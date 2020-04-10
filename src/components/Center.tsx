import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    centerContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

interface CenterProps {
    children: ReactNode
}

const Center = ({children}: CenterProps) => {
    const classes = useStyles();

    return <>
        <div className={classes.centerContent}>
            {children}
        </div>
    </>
}

export default Center;
