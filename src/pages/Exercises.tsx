import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@material-ui/core';

import AddButton from '../components/AddButton'
import Center from '../components/Center'

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

interface Exercise {
    name: string, 
    reps: number, 
    sets: number, 
    pause: number, 
    increment: number, 
    weight: number
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
    const legPress: Exercise = {
        name: "Leg press", 
        reps: 12, 
        sets: 3, 
        pause: 90, 
        increment: 2.5, 
        weight: 172.5
    }
    const chestPress: Exercise = {
        name: "Chest press", 
        reps: 12, 
        sets: 3,
        pause: 90,
        increment: 2.5,
        weight: 80
    }

    return <>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}> 
                <ExerciseCard exercise={legPress} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={3}> 
                <ExerciseCard exercise={chestPress} />
            </Grid>
            <Grid item xs={12}>
                <Center>
                    <AddButton />
                </Center>
            </Grid>
        </Grid>
    </>
}

export default Exercises;
