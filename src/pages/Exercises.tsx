import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, makeStyles, Grid, Box } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const ExercisesCard = () => {
    const classes = useStyles();

    return <>
        <Card className={classes.root}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    be*nev*o*lent
                </Typography>
                <Typography color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    </>
}

interface ExerciseParameterProps {
    name: string, 
    value: string
}

const ExerciseParameter = ({name, value}: ExerciseParameterProps) => {
    return <>
        <Typography display="inline">
            <Box fontWeight="fontWeightBold" display="inline">
                {name + ": "}
            </Box>
        </Typography>
        <Typography display="inline">
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
                        <Typography variant="h5">
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
            <Grid item xs={12}> 
                <ExerciseCard exercise={legPress} />
            </Grid>
            <Grid item xs={12}> 
                <ExerciseCard exercise={chestPress} />
            </Grid>
            <Grid item xs={12}>
                <ExercisesCard />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ExercisesCard />
            </Grid>
            <Grid item xs={12} sm={6}>
                <ExercisesCard />
            </Grid>
            <Grid item xs={6} sm={3}>
                <ExercisesCard />
            </Grid>
            <Grid item xs={6} sm={3}>
                <ExercisesCard />
            </Grid>
            <Grid item xs={6} sm={3}>
                <ExercisesCard />
            </Grid>
            <Grid item xs={6} sm={3}>
                <ExercisesCard />
            </Grid>
        </Grid>
    </>
}

export default Exercises;
