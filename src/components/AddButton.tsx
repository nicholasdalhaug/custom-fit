import React from 'react';
import { AddCircle } from '@material-ui/icons';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    bigButton: {
        fontSize: "3rem"
    }
});

interface AddButtonProps {
    onClick?: () => void
}

const AddButton = ({onClick}: AddButtonProps) => {
    const classes = useStyles();

    return <>
        <IconButton
            onClick={onClick}
        >
            <AddCircle 
                color="primary" 
                fontSize="large" 
                className={classes.bigButton} 
            />
        </IconButton>
    </>
}

export default AddButton;
