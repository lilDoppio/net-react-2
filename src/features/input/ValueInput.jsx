/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import { InputBase } from "@mui/material"
import { useStoreRouter } from '../../app/hooks/useStoreRouter'

const ValueInput = ({ isUpdate = true, store, storeProp, placeholder, length }) => {
    const [inputValue, setInputValue] = useState('')
    const currentPlaceholder = placeholder ?? 'x'.repeat(length)
    const {storeValue, setStoreValue} = useStoreRouter(storeProp, store)
    
    const onValueChange = (value) => {
        setStoreValue(value, storeProp)
        // setInputValue(value)
    }

    useEffect(() => {
        if (isUpdate) {
            setInputValue(storeValue)
        }
    }, [storeValue])
    
    return (
        <InputBase
            value={inputValue}
            onChange={e => onValueChange(e.target.value)}
            placeholder={currentPlaceholder}
            name={storeProp}
        />
    )
}

export default ValueInput;