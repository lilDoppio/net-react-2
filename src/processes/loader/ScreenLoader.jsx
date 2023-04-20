import React from 'react'
import { styled } from "@mui/system";
import { CircularProgress } from '@mui/material';
import { useScreenLoaderStore } from './model';

const LoaderContainer = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    right: '0',
    width: '100vw',
    height: '100vh',
    padding: '15px', 
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    zIndex: 1000
}))


const LoaderScreen = () => {
    const isLoading = useScreenLoaderStore(store => store.isLoading);

    if (isLoading) {
        return (
            <LoaderContainer onClick={e => {e.stopPropagation();e.preventDefault()}}>
                <CircularProgress />
            </LoaderContainer>
        )
    }
}

export default LoaderScreen