import React from 'react';
import { InputBase } from "@mui/material";
import { useStoreRouter } from '../../app/hooks/useStoreRouter';

const DateInput = ({ store, storeProp }) => {
    const {storeValue, setStoreValue} = useStoreRouter(storeProp, store)

    const validateDate = (value) => {
        setStoreValue(value, storeProp)
    }

    return (
        <InputBase 
            onChange={e => validateDate(e.target.value)} 
            value={storeValue} 
            name={storeProp}
            type='date' 
        />
    )
}

export default DateInput
