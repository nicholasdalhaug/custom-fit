import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import {Menu} from '@material-ui/icons'

interface NavBarProps {
    title: string
}

const NavBar = ({title}: NavBarProps) => {
    return <>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <Menu />
                </IconButton>
                <Typography variant="h6">
                    {title}
                </Typography>
            </Toolbar>
        </AppBar>
    </>
}

export default NavBar;