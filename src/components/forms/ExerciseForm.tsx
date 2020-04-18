import React from 'react';

import { Typography, Grid, Card, CardContent } from '@material-ui/core';

import { State } from "./fields/state";
import AddButton from '../buttons/AddButton';
import BackButton from '../buttons/BackButton';
import EditButton from '../buttons/EditButton';
import DeleteButton from '../buttons/DeleteButton';
import Center from '../Center';
import { Exercise } from '../../resources/firebase/exercises';

import InputTextFieldWithValidation from './fields/InputTextFieldWithValidation';
import InputNumberFieldWithValidation from './fields/InputNumberFieldWithValidation';
import SelectNumberField from './fields/SelectNumberField'

import { limitsToArray } from '../../utils/array'

export interface CombinedStatus {
    name: State
    reps: State
    sets: State
    pause: State
    increment: State
    weight: State
}

interface ValidityParams {
    min: number,
    max: number,
    step: number
}

export interface CombinedValidityParams {
    name: ValidityParams
    reps: ValidityParams
    sets: ValidityParams
    pauseMinutes: ValidityParams
    pauseSeconds: ValidityParams
    increment: ValidityParams
    weight: ValidityParams
}

export type TemporaryExercise = {
    [prop in keyof Exercise]?: Exercise[prop];
} & {
    pause: Exercise['pause'];
}

interface ExerciseFormProps {
    exercise: TemporaryExercise
    combinedStatus: CombinedStatus
    combinedValidityParams: CombinedValidityParams
    onValueChange: (prop: keyof Exercise) => (value: string) => void
    onValidityChange: (prop: keyof Exercise) => (toStatus: State) => void
    onClickBack: () => void
    onClickAdd: () => void
    onClickEdit?: () => void
    onClickDelete?: () => void
}

const ExerciseForm = ({
        exercise, 
        combinedStatus,
        combinedValidityParams,
        onValueChange,
        onValidityChange, 
        onClickBack, 
        onClickAdd, 
        onClickEdit, 
        onClickDelete
    }: ExerciseFormProps) => {
    
    const pauseMinutes = Math.floor(exercise.pause / 60);
    const pauseSeconds = exercise.pause % 60;

    const onMinutesChange = (value: string) => {
        const minutes = +value;
        const pause = 60 * minutes + pauseSeconds;
        onValueChange('pause')(pause.toString());
    }

    const onSecondsChange = (value: string) => {
        const seconds = +value;
        const pause = 60 * pauseMinutes + seconds;
        onValueChange('pause')(pause.toString());
    }
    
    return <>
        <Card>
            <CardContent>
            <   Typography variant="h5">Plan an exercise</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <InputTextFieldWithValidation 
                            label="Name" 
                            errorText="Name must have length between 1 and 99"
                            state={combinedStatus.name}
                            value={exercise.name}
                            onValueChange={onValueChange('name')}
                            onValidationChange={onValidityChange('name')}
                            minLength={combinedValidityParams.name.min}
                            maxLength={combinedValidityParams.name.max}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputNumberFieldWithValidation 
                            label="Reps" 
                            errorText="Should be an integer between 1 and 99"
                            state={combinedStatus.reps}
                            value={exercise.reps}
                            onValueChange={onValueChange('reps')}
                            onValidityChange={onValidityChange('reps')}
                            min={combinedValidityParams.reps.min}
                            max={combinedValidityParams.reps.max}
                            step={combinedValidityParams.reps.step}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputNumberFieldWithValidation 
                            label="Sets" 
                            errorText="Should be an integer between 1 and 12"
                            state={combinedStatus.sets}
                            value={exercise.sets}
                            onValueChange={onValueChange('sets')}
                            onValidityChange={onValidityChange('sets')}
                            min={combinedValidityParams.sets.min}
                            max={combinedValidityParams.sets.max}
                            step={combinedValidityParams.sets.step}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <SelectNumberField 
                            label="Pause minutes"
                            possibleValues={limitsToArray(
                                combinedValidityParams.pauseMinutes.min,
                                combinedValidityParams.pauseMinutes.max,
                                combinedValidityParams.pauseMinutes.step
                            )}
                            onValueChange={onMinutesChange}
                            value={pauseMinutes}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <SelectNumberField 
                            label="Pause seconds"
                            possibleValues={limitsToArray(
                                combinedValidityParams.pauseSeconds.min,
                                combinedValidityParams.pauseSeconds.max,
                                combinedValidityParams.pauseSeconds.step
                            )}
                            onValueChange={onSecondsChange}
                            value={pauseSeconds}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputNumberFieldWithValidation 
                            label="Increment" 
                            errorText="Should be between 0 and 10 with steps of 0.25"
                            state={combinedStatus.increment}
                            value={exercise.increment}
                            onValueChange={onValueChange('increment')}
                            onValidityChange={onValidityChange('increment')}
                            min={combinedValidityParams.increment.min}
                            max={combinedValidityParams.increment.max}
                            step={combinedValidityParams.increment.step}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <InputNumberFieldWithValidation 
                            label="Weight" 
                            errorText="Should be between 1 and 999 with steps of 0.25"
                            state={combinedStatus.weight}
                            value={exercise.weight}
                            onValueChange={onValueChange('weight')}
                            onValidityChange={onValidityChange('weight')}
                            min={combinedValidityParams.weight.min}
                            max={combinedValidityParams.weight.max}
                            step={combinedValidityParams.weight.step}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Center>
                            <BackButton onClick={onClickBack} />
                            <AddButton onClick={onClickAdd} />
                            {onClickEdit !== undefined && 
                                <EditButton onClick={onClickEdit} />
                            }
                            {onClickDelete !== undefined && 
                                <DeleteButton onClick={onClickDelete} />
                            }
                        </Center>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    </>
}

export default ExerciseForm;