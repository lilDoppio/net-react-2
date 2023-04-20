import { Box } from "@mui/material";
import React, { useState } from 'react'
import { useRequisitesStore } from "../../entities/requisites/model/store";
import RequisitesForm from "../../entities/requisites/ui/From";

const Requisites = () => {
    const [requisites, setRequisites] = useState([0])
    const requisitesCount = useRequisitesStore(store => store.requisitesCount)

    const onAddRequisites = () => {
        setRequisites([...requisites, requisites[requisites.length - 1] + 1])
    }
    
    return (
        <div>
            {requisites.map((item, index) => {
                return (
                    <Box key={index} sx={{ marginBottom: '32px' }}>
                        <RequisitesForm isUpdate={index === requisitesCount} onClick={onAddRequisites}/>
                    </Box>
                )
            })}
        </div>
    )
}

export default Requisites