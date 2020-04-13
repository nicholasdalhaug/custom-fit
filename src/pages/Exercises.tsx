import React from 'react';
import { Card, CardContent, Typography, Grid, Box, CircularProgress } from '@material-ui/core';

import AddButton from '../components/AddButton'
import Center from '../components/Center'
import { useStoredExercises, Exercise } from '../resources/firebase/exercises'

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
    exercise: Exercise

}

const ExerciseCard = ({exercise}: ExerciseCardProps) => {
    return <>
        <Card>
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
        </Card>
    </>
}

const Exercises = () => {
    const storedExercises = useStoredExercises();

    return <>
        <Grid container spacing={3}>
            {storedExercises &&
                storedExercises.map((storedExercise) => {
                    return <Grid item key={storedExercise.id} xs={12} sm={6} md={4} lg={4} xl={3}>
                        <ExerciseCard exercise={storedExercise.exercise} />
                    </Grid>
                })
            }
            <Grid item xs={12}>
                <Center>
                    {!storedExercises &&
                        <CircularProgress />
                    }
                    {storedExercises &&
                        <AddButton />
                    }
                </Center>
            </Grid>
        </Grid>
    </>
}

export default Exercises;
