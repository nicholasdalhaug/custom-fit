import React, { ReactNode } from 'react';
import {Container as MUIContainer, Box} from '@material-ui/core'

interface ContainerProps {
    children: ReactNode
}

const Container = ({children}: ContainerProps) => {
    return <>
        <Box mt={2}>
            <MUIContainer>
                <>{children}</>
            </MUIContainer>
        </Box>
    </>
}

export default Container;
