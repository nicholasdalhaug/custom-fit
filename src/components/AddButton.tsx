import React from 'react';
import { AddCircle } from '@material-ui/icons';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    bigButton: {
        fontSize: "3rem"
    }
});

const AddButton = () => {
    const classes = useStyles();

    return <>
        <IconButton>
            <AddCircle color="primary" fontSize="large" className={classes.bigButton} />
        </IconButton>
    </>
}

export default AddButton;
