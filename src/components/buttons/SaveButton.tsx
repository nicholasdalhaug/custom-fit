import React from 'react';
import { Save } from '@material-ui/icons';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    bigButton: {
        fontSize: "3rem"
    }
});

interface SaveButtonProps {
    onClick?: () => void
}

const SaveButton = ({onClick}: SaveButtonProps) => {
    const classes = useStyles();

    return <>
        <IconButton
            onClick={onClick}
        >
            <Save 
                color="primary" 
                fontSize="large" 
                className={classes.bigButton} 
            />
        </IconButton>
    </>
}

export default SaveButton;