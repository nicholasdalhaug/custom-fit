import React, { useState } from 'react';
import { 
    AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Hidden, 
    Button, 
    makeStyles, 
    SwipeableDrawer, 
    ListItem, 
    List, 
    ListItemText 
} from '@material-ui/core';
import {Menu} from '@material-ui/icons'

import customFitLogo from '../../resources/img/logo_gears_drawing_192.png'

interface NavBarProps {
    title: string
}

const useStyles = makeStyles(theme => ({
    grow: {
        flexGrow: 1,
    },
    sideNavMenu: {
        width: 250
    },
    sideMenuImage: {
        width: "40%",
        margin: "auto"
    },
}));

const NavBar = ({title}: NavBarProps) => {
    const classes = useStyles();

    return <>
        <AppBar position="fixed">
            <Toolbar>
                <SideMenuButton />
                <Typography variant="h5">
                    {title}
                </Typography>
                <div className={classes.grow} />
                <MenuItems />
            </Toolbar>
        </AppBar>
    </>
}

const SideMenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    return <>
        <Hidden lgUp>
            <IconButton 
                edge="start" 
                color="inherit" 
                aria-label="menu"
                onClick={toggleIsOpen}
            >
                <Menu />
            </IconButton>
        </Hidden>
        <SwipeableDrawer
            anchor="left"
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onOpen={() => setIsOpen(true)}
            className={classes.sideNavMenu}
        >   
            <List>
                <ListItem>
                    <img 
                        className={classes.sideMenuImage}
                        src={customFitLogo} 
                        alt="Custom Fit logo" 
                    />
                </ListItem>
                {pageNames.map(pageName => {
                    return <ListItem key={pageName} button>
                        <ListItemText primary={pageName} />
                    </ListItem>
                })}
                
            </List>
        </SwipeableDrawer>
    </>
}

const pageNames = ["Overview", "Routines", "Exercises", "Stats", "Settings"];

const MenuItems = () => {
    return <>
        <Hidden mdDown>
            {pageNames.map(pageName => {
                return <Button key={pageName} color="inherit">
                    {pageName}
                </Button>
            })}
        </Hidden>
    </>
}

export default NavBar;