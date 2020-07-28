import React, { useState, useEffect } from 'react';
import {StyledFirebaseAuth} from 'react-firebaseui'
import firebase from '../resources/firebase/firebase';
import { Typography, CircularProgress, makeStyles, Container } from '@material-ui/core';
import 'firebase/auth';

interface LoginProps {
    children: React.ReactNode
}

const Login = ({children}: LoginProps) => {
    const [user, setUser] = useState<firebase.User | null | undefined>(undefined);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setUser(user);
            console.log('User: ', user)
        });
    }, []);

    if(user === undefined){
        return <>
            <LoginWaiting />
        </>
    }
    else if(user === null){
        return <>
            <LoginPrompt />
        </>
    }
    else {
        return <>
            {children}
        </>
    }
};

const useStyle = makeStyles({
    container: {
        textAlign: "center"
    }
});

const LoginWaiting = () => {
    const classes = useStyle();

    return <>
        <Container className={classes.container}>
            <Typography paragraph>
                Please wait while you are being logged in...
            </Typography>
            <CircularProgress />
        </Container>
    </>
};

const LoginPrompt = () => {
    const classes = useStyle();

    const uiConfig = {
        signInFlow: 'popup', 
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ], 
    };

    return <>
        <Container className={classes.container}>
            <Typography variant="h5">
                Please sign-in:
            </Typography>
            <StyledFirebaseAuth 
                uiConfig={uiConfig} 
                firebaseAuth={firebase.auth()} 
            />
        </Container>
    </>
};

export default Login;