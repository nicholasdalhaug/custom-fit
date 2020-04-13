import React, { useState } from 'react';

import { Typography, Grid } from '@material-ui/core';

import InputField, { State } from './InputField'
import SelectField from './SelectField'
import AddButton from '../AddButton';
import Center from '../Center';
import { Exercise } from '../../resources/firebase/exercises';
interface CombinedStatus {
    name: State
    reps: State
    sets: State
    increment: State
    weight: State
}

interface ValidityParams {
    min: number,
    max: number,
    step: number
}

interface CombinedValidityParams {
    name: ValidityParams
    reps: ValidityParams
    sets: ValidityParams
    increment: ValidityParams
    weight: ValidityParams
}

const combinedValidityParams: CombinedValidityParams = {
    name: {min: 1, max: 99, step: 1},
    reps: {min: 1, max: 99, step: 1},
    sets: {min: 1, max: 12, step: 1}, 
    increment: {min: 0, max: 10, step: 0.25},
    weight: {min: 1, max: 999, step: 0.25}
}

const isValidNumber = (prop: keyof CombinedValidityParams, value:  number | undefined) => {
    if(value === undefined) return false;

    const validityParams = combinedValidityParams[prop]
    
    if(value >= validityParams.min && value <= validityParams.max){
        if(value % validityParams.step === 0){
            return true
        }
    }
    return false
}

interface ExerciseFormProps {
    exercise?: Exercise
}

const ExerciseForm = ({exercise}: ExerciseFormProps) => {
    const initialExercise = exercise !== undefined ? exercise : {
        name: '',
        reps: undefined, 
        sets: undefined, 
        pause: 0, 
        increment: undefined,
        weight: undefined
    };
    const [exerciseState, setExerciseState] = useState(initialExercise); 
    const initialCombinedStatus: CombinedStatus = {
        name: State.PRIMARY,
        reps: State.PRIMARY, 
        sets: State.PRIMARY, 
        increment: State.PRIMARY, 
        weight: State.PRIMARY
    }
    const [combinedStatus, setCombinedStatus] = useState(initialCombinedStatus)

    const onInputChange = (prop: keyof CombinedStatus) => (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setExerciseState({ ...exerciseState, [prop]: value });

        if(combinedStatus[prop] !== State.PRIMARY){
            const valueNumber: number = event.target.type === "text" ? value.length : +value;
            if(isValidNumber(prop, valueNumber)){
                setCombinedStatus({...combinedStatus, [prop]: State.SUCCESS})
            }
            else{
                setCombinedStatus({...combinedStatus, [prop]: State.ERROR})
            }
        }
    };

    const onMinutesChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const minutes = +(event.target.value as string);
        const pause = exerciseState.pause % 60 + 60 * minutes;
        setExerciseState({ ...exerciseState, pause: pause });
    }

    const onSecondsChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const minutes = Math.floor(exerciseState.pause / 60);
        const seconds = +(event.target.value as string);
        const pause = 60 * minutes + seconds;
        setExerciseState({ ...exerciseState, pause: pause });
    }

    const validateForm = () => {
        let nameStatus = State.PRIMARY;
        if(!isValidNumber('name', exerciseState.name.length)){
            nameStatus = State.ERROR;
        }
        let repsStatus = State.PRIMARY;
        if(!isValidNumber('reps', exerciseState.reps)){
            repsStatus = State.ERROR;
        }
        let setsStatus = State.PRIMARY;
        if(!isValidNumber('sets', exerciseState.sets)){
            setsStatus = State.ERROR;
        }
        let incrementStatus = State.PRIMARY;
        if(!isValidNumber('increment', exerciseState.increment)){
            incrementStatus = State.ERROR;
        }
        let weightStatus = State.PRIMARY;
        if(!isValidNumber('weight', exerciseState.weight)){
            weightStatus = State.ERROR;
        }
        setCombinedStatus({
            name: nameStatus,
            reps: repsStatus,
            sets: setsStatus,
            increment: incrementStatus,
            weight: weightStatus
        })
    }
    
    return <>
        <Typography variant="h5">Plan an exercise</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <InputField 
                    label="Name" 
                    errorText="Name must have length between 1 and 99"
                    state={combinedStatus.name}
                    inputType="text"
                    value={exerciseState.name}
                    onChange={onInputChange('name')}
                />
            </Grid>
            <Grid item xs={12}>
                <InputField 
                    label="Reps" 
                    errorText="Should be an integer between 1 and 99"
                    state={combinedStatus.reps}
                    inputType="number"
                    min={1}
                    max={99}
                    step={1}
                    value={exerciseState.reps}
                    onChange={onInputChange('reps')}
                />
            </Grid>
            <Grid item xs={12}>
                <InputField 
                    label="Sets" 
                    errorText="Should be an integer between 1 and 12"
                    state={combinedStatus.sets}
                    inputType="number"
                    min={1}
                    max={12}
                    step={1}
                    value={exerciseState.sets}
                    onChange={onInputChange('sets')}
                />
            </Grid>
            <Grid item xs={6}>
                <SelectField 
                    label="Pause minutes"
                    possibleValues={['0', '1', '2', '3', '4', '5', '6']}
                    onChange={onMinutesChange}
                    value={Math.floor(exerciseState.pause / 60).toString()}
                />
            </Grid>
            <Grid item xs={6}>
                <SelectField 
                    label="Pause seconds"
                    possibleValues={['0', '15', '30', '45']}
                    onChange={onSecondsChange}
                    value={(exerciseState.pause % 60).toString()}
                />
            </Grid>
            <Grid item xs={12}>
                <InputField 
                    label="Increment" 
                    errorText="Should be between 0 and 10 with steps of 0.25"
                    state={combinedStatus.increment}
                    inputType="number"
                    min={0}
                    max={10}
                    step={0.25}
                    value={exerciseState.increment}
                    onChange={onInputChange('increment')}
                />
            </Grid>
            <Grid item xs={12}>
                <InputField 
                    label="Weight" 
                    errorText="Should be between 1 and 999 with steps of 0.25"
                    state={combinedStatus.weight}
                    inputType="number"
                    min={1}
                    max={999}
                    step={0.25}
                    value={exerciseState.weight}
                    onChange={onInputChange('weight')}
                />
            </Grid>
            <Grid item xs={12}>
                <Center>
                    <AddButton onClick={validateForm} />
                </Center>
            </Grid>
        </Grid>
    </>
}

export default ExerciseForm;