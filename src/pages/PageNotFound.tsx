import React from 'react';
import { Button, makeStyles, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';

const usePageNotFoundStyle = makeStyles({
    container: {
        textAlign: "center"
    }
})

const PageNotFound = () => {
    const classes = usePageNotFoundStyle();

    return <>
        <Container className={classes.container}>
            <PageNotFoundContent />
        </Container>
    </>
}

const PageNotFoundContent = () => {
    return <>
        <Typography variant="h5">
            No content found
        </Typography>
        <Typography paragraph>
            This page does not seem to have any content. Consider returning to an other page. 
        </Typography>
        <Button 
            color="primary" 
            variant="contained"
            component={Link} 
            to="/overview"
        >
            Overview
        </Button>
    </>
}

export default PageNotFound;