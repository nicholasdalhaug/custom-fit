import React from 'react';
import { Delete } from '@material-ui/icons';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    bigButton: {
        fontSize: "3rem"
    }
});

interface DeleteButtonProps {
    onClick?: () => void
}

const DeleteButton = ({onClick}: DeleteButtonProps) => {
    const classes = useStyles();

    return <>
        <IconButton
            onClick={onClick}
        >
            <Delete 
                color="secondary" 
                fontSize="large" 
                className={classes.bigButton} 
            />
        </IconButton>
    </>
}

export default DeleteButton;