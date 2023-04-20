import { Paper } from "@mui/material";
import { styled } from "@mui/system";
import React from 'react'
import Organizations from "../widgets/organizations/Organizations";
import { useIndexPageStore } from "./store";
import Requisites from "../widgets/requisites/Requisites";

const Container = styled(Paper)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    padding: '80px',
    boxShadow: 'none'
}))

const IndexPage = () => {
    const isOrganizationFormComplite = useIndexPageStore(store => store.isOrganizationFormComplite)

    return (
        <Container>
            {isOrganizationFormComplite ?
            <Requisites/>
            :
            <Organizations/>}
        </Container>
    )
}

export default IndexPage