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
import { Link, useLocation } from 'react-router-dom';
import firebase from '../../resources/firebase/firebase';

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

const NavBar = () => {
    const classes = useStyles();
    const location = useLocation();

    const lowerCaseLocationName = lastPartOfPath(location.pathname);
    let locationName = "";
    if(pageNames.includes(lowerCaseLocationName)) {
        locationName = capitalizeFirstLetter(lowerCaseLocationName);
    }
    
    return <>
        <FixedAppBar>
            <SideMenuButton />
            <Typography variant="h5">
                {locationName}
            </Typography>
            <div className={classes.grow} />
            <MenuItems />
        </FixedAppBar>
    </>
}

const pageNames = ["overview", "routines", "exercises", "stats", "settings"];

const lastPartOfPath = (path: string) => {
    const pathParts = path.split("/");
    return pathParts[pathParts.length - 1]
}

const capitalizeFirstLetter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

interface FixedAppBarProps {
    children: React.ReactNode
}

const FixedAppBar = ({children}: FixedAppBarProps) => {
    // The last toolbar takes up the space under the appbar
    return <>
        <AppBar position="fixed">
            <Toolbar>
                {children}
            </Toolbar>
        </AppBar>
        <Toolbar />
    </>
}

const SideMenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const classes = useStyles();

    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    }

    const signOut = () => {
        toggleIsOpen();

        firebase.auth().signOut();
    }

    return <>
        <Hidden lgUp>
            <IconButton 
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
                    return <ListItem 
                                key={pageName} 
                                button 
                                component={Link} 
                                to={process.env.PUBLIC_URL + '/' + pageName}
                                onClick={toggleIsOpen}
                            >
                        <ListItemText primary={capitalizeFirstLetter(pageName)} />
                    </ListItem>
                })}
                <ListItem 
                    button 
                    component={Link} 
                    to={process.env.PUBLIC_URL + '/'}
                    onClick={signOut}
                >
                    <ListItemText primary="Sign Out" />
                </ListItem>
                
            </List>
        </SwipeableDrawer>
    </>
}

const MenuItems = () => {
    const signOut = () => {
        firebase.auth().signOut();
    }

    return <>
        <Hidden mdDown>
            {pageNames.map(pageName => {
                return <Button 
                            key={pageName} 
                            color="inherit"
                            component={Link} 
                            to={process.env.PUBLIC_URL + '/' + pageName}
                        >
                    {capitalizeFirstLetter(pageName)}
                </Button>
            })}
            <Button 
                color="inherit"
                onClick={signOut}
                component={Link} 
                to={process.env.PUBLIC_URL + '/'}
            >
                Sign Out
            </Button>
        </Hidden>
    </>
}

export default NavBar;