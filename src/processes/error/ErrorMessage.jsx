import React from 'react'
import { styled } from "@mui/system";
import { Typography } from '@mui/material';
import { useErrorStore } from './model';

const ErrorContainer = styled('div')(({theme}) => ({
    position: 'fixed',
    top: '25px',
    right: '25px',
    padding: '15px', 
    backgroundColor: 'white',
    boxShadow: `0px 5px 5px -5px ${theme.palette.error.light}`
}))

const ErrorMessage = () => {
    const message = useErrorStore(store => store.message)

    if (message) {
        return (
            <ErrorContainer>
                <Typography variant='body2'>{message}</Typography>
            </ErrorContainer>
        )
    }
}

export default ErrorMessage