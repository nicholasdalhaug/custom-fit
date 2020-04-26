import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Box, CircularProgress, CardActionArea } from '@material-ui/core';

import AddButton from '../components/buttons/AddButton'
import Center from '../components/Center'
import ExerciseFormWithDialogsAndValidation from '../components/forms/ExerciseFormWithDialogsAndValidation'
import { useStoredExercises, Exercise, StoredExercise, addExerciseToStore, editExerciseInStore, deleteExerciseFromStore } from '../resources/firebase/exercises'

interface ExerciseParameterProps {
    name: string, 
    value: string
}

const ExerciseParameter = ({name, value}: ExerciseParameterProps) => {
    return <>
        <Typography component={'span'}>
            <Box fontWeight="fontWeightBold" display="inline">
                {name + ": "}
            </Box>
        </Typography>
        <Typography component={'span'}>
            {value}
        </Typography>
    </>
}

interface ExerciseCardProps {
    storedExercise: StoredExercise
    onClick: (storedExercise: StoredExercise) => void

}

const ExerciseCard = ({storedExercise, onClick}: ExerciseCardProps) => {
    const exercise = storedExercise.exercise;

    return <>
        <Card>
            <CardActionArea onClick={() => {onClick(storedExercise)}}>
                <CardContent>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography gutterBottom variant="h5">
                                {exercise.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <ExerciseParameter name="Reps" value={exercise.reps.toString()} />
                        </Grid>
                        <Grid item xs={6}>
                            <ExerciseParameter name="Sets" value={exercise.sets.toString()} />
                        </Grid>
                        <Grid item xs={6}>
                            <ExerciseParameter name="Pause" value={exercise.pause.toString() + "s"} />
                        </Grid>
                        <Grid item xs={6}>
                            <ExerciseParameter name="Increment" value={exercise.increment.toString() + "kg"} />
                        </Grid>
                        <Grid item xs={6}>
                            <ExerciseParameter name="Weight" value={exercise.weight.toString() + "kg"} />
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
        </Card>
    </>
}

const Exercises = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [selectedExercise, setSelectedExercise] = useState(undefined as unknown as StoredExercise)

    const storedExercises = useStoredExercises();

    const onClickOpen = () => {
        setSelectedExercise(undefined as unknown as StoredExercise);
        setIsFormOpen(true);
    }
    const onClickExercise = (storedExxercise: StoredExercise) => {
        setSelectedExercise(storedExxercise);
        setIsFormOpen(true);
    }

    const onClickFormBack = () => {
        setIsFormOpen(false);
    }
    const onClickFormAdd = (exercise: Exercise) => {
        console.log("Adding exercise: ")
        console.log(exercise)

        addExerciseToStore(exercise)
    }
    const onClickFormEdit = (exercise: Exercise) => {
        console.log("Editing exercise: ")
        console.log(exercise)

        const newStoredExercise: StoredExercise = {
            id: selectedExercise.id,
            exercise: exercise
        }

        editExerciseInStore(newStoredExercise)
    }
    const onClickFormDelete = () => {
        console.log("Deleting exercise: ")
        console.log(selectedExercise)

        deleteExerciseFromStore(selectedExercise)
    }

    if(isFormOpen){
        if(selectedExercise === undefined){
            return <ExerciseFormWithDialogsAndValidation 
                onClickBack={onClickFormBack} 
                onClickAdd={onClickFormAdd}
            />
        }
        else {
            return <ExerciseFormWithDialogsAndValidation 
                exercise={selectedExercise.exercise}
                onClickBack={onClickFormBack} 
                onClickAdd={onClickFormAdd}
                onClickEdit={onClickFormEdit}
                onClickDelete={onClickFormDelete}
            />
        }
    }

    return <>
        <Box mt={1}>
            <Grid container spacing={3}>
                {storedExercises &&
                    storedExercises.map((storedExercise) => {
                        return <Grid item 
                            key={storedExercise.id}
                            xs={12} sm={6} md={4} lg={4} xl={3}
                        >
                            <ExerciseCard 
                                storedExercise={storedExercise} 
                                onClick={onClickExercise}
                            />
                        </Grid>
                    })
                }
                <Grid item xs={12}>
                    <Center>
                        {!storedExercises &&
                            <CircularProgress />
                        }
                        {storedExercises &&
                            <AddButton onClick={onClickOpen} />
                        }
                    </Center>
                </Grid>
            </Grid>
        </Box>
    </>
}

export default Exercises;
