import React from 'react'
import { Box, Button, styled } from "@mui/material";
import ValueInput from '../input/ValueInput';
import { useRequisitesStore } from '../../entities/requisites/model/store';

const StyledButton = styled(Button)(({ theme }) => ({
    position: 'absolute', 
    top: 0, 
    right: 0,
    height: '52px', 
    textTransform: 'none', 
    fontWeight: 400, 
    fontSize: '15px'
}));

const ActionValueInput = ({...props}) => {
    const fetchRequisitesData = useRequisitesStore(state => state.fetchData);

    const onClick = () => {
        fetchRequisitesData(props.storeProp)
    }

    return (
        <Box sx={{ position: 'relative' }}>
            <ValueInput {...props}/>
            <StyledButton sx={{  }} onClick={onClick}>Заполнить</StyledButton>
        </Box>
    )
}

export default ActionValueInput