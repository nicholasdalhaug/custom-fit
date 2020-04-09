import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, makeStyles, Grid } from '@material-ui/core';

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

const Exercises = () => {
    return <>
        <Grid container spacing={3}>
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
