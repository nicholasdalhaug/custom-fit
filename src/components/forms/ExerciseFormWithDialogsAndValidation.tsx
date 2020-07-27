import React, { useState } from 'react';

import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';

import { Exercise } from '../../resources/firebase/exercises';
import ExerciseFormWithValidation from './ExerciseFormWithValidation';
import EditButton from '../buttons/EditButton';
import AddButton from '../buttons/AddButton';

interface ExerciseFormWithDialogsAndValidationProps {
    exercise?: Exercise
    onClickBack: () => void
    onClickAdd: (exercise: Exercise) => void
    onClickEdit?: (exercise: Exercise) => void
    onClickDelete?: () => void
}

const ExerciseFormWithDialogsAndValidation = ({
        exercise, 
        onClickBack, 
        onClickAdd, 
        onClickEdit, 
        onClickDelete
    }: ExerciseFormWithDialogsAndValidationProps) => {
    
    const shouldConfirmSaving = onClickEdit !== undefined;
    
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
    const onCloseDeleteDialog = () => {
        setIsDeleteDialogOpen(false);
    }
    const onClickDeleteValidated = () => {
        setIsDeleteDialogOpen(true);
    }
    const onClickConfirmedDelete = () => {
        if(onClickDelete !== undefined){
            onClickDelete();
            onClickBack();
        }
    }
    
    const [exerciseToPossiblySave, setExerciseToPossibleSave] = useState(undefined as Exercise | undefined);
    const isSaveDialogOpen = exerciseToPossiblySave !== undefined;

    const onCloseSaveDialog = () => {
        setExerciseToPossibleSave(undefined);
    }
    const onClickSaveValidated = (exercise: Exercise) => {
        if(shouldConfirmSaving){
            setExerciseToPossibleSave(exercise);
        }
        else {
            onClickAdd(exercise);
            onClickBack();
        }
    }

    const onClickConfirmedEdit = () => {
        if(exerciseToPossiblySave !== undefined && onClickEdit!== undefined){
            onClickEdit(exerciseToPossiblySave);
            onClickBack();
        }
    }

    const onClickConfirmedAdd = () => {
        if(exerciseToPossiblySave !== undefined){
            onClickAdd(exerciseToPossiblySave);
            onClickBack();
        }
    }

    return <>
        <ExerciseFormWithValidation    
            exercise={exercise}
            onClickBack={onClickBack}
            onClickSaveValidated={onClickSaveValidated}
            onClickDeleteValidated={onClickDeleteValidated}
        />

        <Dialog
            open={isDeleteDialogOpen}
            onClose={onCloseDeleteDialog}
        >
            <DialogTitle>{"Are you sure you want to delete this exercise?"}</DialogTitle>
            <DialogActions>
                <Button onClick={onClickConfirmedDelete} variant="contained" color="primary">
                    Yes
                </Button>
                <Button onClick={onCloseDeleteDialog} variant="contained">
                    No
                </Button>
            </DialogActions>
        </Dialog>

        {shouldConfirmSaving &&
            <Dialog
                open={isSaveDialogOpen}
                onClose={onCloseSaveDialog}
            >
                <DialogTitle>{"Create new or edit?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        You can choose between creating a new exercise 
                        or editing the exercise you clicked. 
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <AddButton onClick={onClickConfirmedAdd} />
                    <EditButton onClick={onClickConfirmedEdit} />
                </DialogActions>
            </Dialog>
        }
    </>
}

export default ExerciseFormWithDialogsAndValidation;