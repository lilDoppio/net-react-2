import React from 'react'
import { Checkbox } from '@mui/material';
import { useStoreRouter } from '../../app/hooks/useStoreRouter';

const CheckboxInput = ({ storeProp, store }) => {
    const {storeValue, setStoreValue} = useStoreRouter(storeProp, store)

    return (
        <Checkbox checked={storeValue} onChange={() => setStoreValue(!storeValue, storeProp)}/>
    )
}

export default CheckboxInput