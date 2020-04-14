import React from 'react';
import { Edit } from '@material-ui/icons';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    bigButton: {
        fontSize: "3rem"
    }
});

interface EditButtonProps {
    onClick?: () => void
}

const EditButton = ({onClick}: EditButtonProps) => {
    const classes = useStyles();

    return <>
        <IconButton
            onClick={onClick}
        >
            <Edit 
                color="primary" 
                fontSize="large" 
                className={classes.bigButton} 
            />
        </IconButton>
    </>
}

export default EditButton;