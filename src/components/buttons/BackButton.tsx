import React from 'react';
import { ArrowBack } from '@material-ui/icons';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    bigButton: {
        fontSize: "3rem"
    }
});

interface BackButtonProps {
    onClick?: () => void
}

const BackButton = ({onClick}: BackButtonProps) => {
    const classes = useStyles();

    return <>
        <IconButton
            onClick={onClick}
        >
            <ArrowBack 
                color="primary" 
                fontSize="large" 
                className={classes.bigButton} 
            />
        </IconButton>
    </>
}

export default BackButton;