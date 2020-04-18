import React, { useState } from 'react';

import { State } from "./fields/state";
import { Exercise } from '../../resources/firebase/exercises';

import ExerciseForm, { CombinedValidityParams, TemporaryExercise, CombinedStatus } from './ExerciseForm'

const combinedValidityParams: CombinedValidityParams = {
    name: {min: 1, max: 99, step: 1},
    reps: {min: 1, max: 99, step: 1},
    sets: {min: 1, max: 12, step: 1}, 
    pauseMinutes: {min: 0, max: 6, step: 1},
    pauseSeconds: {min: 0, max: 45, step: 15}, 
    increment: {min: 0, max: 10, step: 0.25},
    weight: {min: 1, max: 999, step: 0.25}
}

interface ExerciseFormWithValidationProps {
    exercise?: Exercise
    onClickBack: () => void
    onClickAddValidated: (exercise: Exercise) => void
    onClickEditValidated?: (exercise: Exercise) => void
    onClickDeleteValidated?: () => void
}

const ExerciseFormWithValidation = ({
        exercise, 
        onClickBack, 
        onClickAddValidated, 
        onClickEditValidated, 
        onClickDeleteValidated
    }: ExerciseFormWithValidationProps) => {

    let initialExercise: TemporaryExercise;
    let initialCombinedStatus: CombinedStatus;
    if(exercise === undefined){
        initialExercise = {
            name: '',
            reps: undefined, 
            sets: undefined, 
            pause: 0, 
            increment: undefined,
            weight: undefined
        };
        initialCombinedStatus = {
            name: State.PRIMARY,
            reps: State.PRIMARY, 
            sets: State.PRIMARY, 
            pause: State.SUCCESS, 
            increment: State.PRIMARY, 
            weight: State.PRIMARY
        };
    }
    else {
        initialExercise = exercise;
        initialCombinedStatus = {
            name: State.SUCCESS,
            reps: State.SUCCESS, 
            sets: State.SUCCESS, 
            pause: State.SUCCESS, 
            increment: State.SUCCESS, 
            weight: State.SUCCESS
        }
    }
    const [temporaryExercise, setTemporaryExercise] = useState(initialExercise); 
    const [combinedStatus, setCombinedStatus] = useState(initialCombinedStatus)

    const onValueChange = (prop: keyof Exercise) => (value: string) => {
        setTemporaryExercise({ ...temporaryExercise, [prop]: value });
    }

    const onValidityChange = (prop: keyof Exercise) => (toStatus: State) => {
        setCombinedStatus({...combinedStatus, [prop]: toStatus})
    }

    const isFieldValid = (prop: keyof Exercise) => {
        const currentStatus: State = combinedStatus[prop];
        if(currentStatus === State.SUCCESS){
            return true;
        }
        return false;
    }

    const areAllValid: () => boolean = () => {
        return isFieldValid('name')
            && isFieldValid('reps')
            && isFieldValid('sets')
            && isFieldValid('increment')
            && isFieldValid('weight')
    }

    const onClickAdd = () => {
        if(areAllValid()){
            onClickAddValidated(temporaryExercise as Exercise);
            onClickBack();
        }
    }
    const onClickEdit = onClickEditValidated === undefined ? undefined : () => {
        if(areAllValid()){
            onClickEditValidated(temporaryExercise as Exercise);
            onClickBack();
        }
    }
    const onClickDelete = onClickDeleteValidated === undefined ? undefined : () => {
        if(areAllValid()){
            onClickDeleteValidated();
            onClickBack();
        }
    }
    
    return <>
        <ExerciseForm    
            exercise={temporaryExercise}
            combinedStatus={combinedStatus}
            combinedValidityParams={combinedValidityParams}
            onValueChange={onValueChange}
            onValidityChange={onValidityChange}
            onClickBack={onClickBack}
            onClickAdd={onClickAdd}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
        />
    </>
}

export default ExerciseFormWithValidation;