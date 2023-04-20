import { Box, Typography } from "@mui/material";
import React from 'react'
import LegalForm from "../../entities/organizations/legal/ui/Form";
import IndividualForm from "../../entities/organizations/individual/ui/Form";
import Selector from "../../features/selector/Selector";
import { useIndexPageStore } from "../../pages/store";

const Organizations = () => {
    const organizationType = useIndexPageStore(store => store.organizationType)
    
    return (
        <>
            <Box>
                <Typography variant='h6'>Форма собственности</Typography>
                <Typography variant='subtitle2'>Вид деятельности*</Typography>
                <Selector storeProp='organizationType'/>
            </Box>
            <Box>
                {organizationType === 'legal' ?
                <LegalForm/>
                :
                <IndividualForm/>}
            </Box>
        </>
    )
}

export default Organizations