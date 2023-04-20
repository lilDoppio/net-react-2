import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react'
import ValueInput from '../../../features/input/ValueInput';
import { SubmitButton } from '../../../shared/ui/button/SubmitButton';
import { useTheme } from '@mui/material/styles';
import { useErrorStore } from '../../../processes/error/model';
import { useScreenLoaderStore } from '../../../processes/loader/model';
import { Form } from '../../../shared/ui/form/Form';
import RequisitesTooltip from '../../../features/requisites-tooltip/Tooltip';
import { postRequisitesRequest } from '../api/post';
import { useRequisitesStore } from '../model/store';
import ActionValueInput from '../../../features/action-input/ActionValueInput';
import { useIndexPageStore } from '../../../pages/store';

const RequisitesForm = ({ isUpdate, onClick }) => {
    const theme = useTheme();
    const rootInn = useIndexPageStore(store => store.rootInn)
    const getRequisites = useRequisitesStore(store => store.getRequisites)
    const isFieldsValid = useRequisitesStore(store => store.isFieldsValid)
    const addRequisites = useRequisitesStore(store => store.addRequisites)
    const setErrorMessage = useErrorStore(store => store.setErrorMessage)
    const setIsLoading = useScreenLoaderStore(store => store.setIsLoading)

    const onFormSubmit = async (e) => {
        e.preventDefault()
        const error = isFieldsValid()
        if (error.status) {
            setErrorMessage(error.message)
            console.log('ERROR', error.status, error.message)
        } else if (onAddRequisites()) {
            setIsLoading(true)
            console.log('POST requisites', getRequisites())
            const isOver = await postRequisitesRequest(getRequisites(), rootInn)
            if (isOver) {
                setIsLoading(false)
            }
        }
    }

    const onAddRequisites = () => {
        const error = addRequisites()
        if (error.status) {
            setErrorMessage(error.message)
            console.log('ERROR', error.status, error.message)

            return false
        } else {
            onClick()

            return true
        }
    }
   
    return (
            <Form enctype="multipart/form-data" onSubmit={e => onFormSubmit(e)}
                sx={{ pointerEvents: isUpdate ? 'all' : 'none' }}
            >
                <Grid container spacing={'16px'}>
                    <Grid item xs={2}>
                        <Typography variant='subtitle2'>БИК*</Typography>
                        <ValueInput 
                            store={'requisites'}
                            storeProp={'bic'} 
                            length={9} 
                            isUpdate={isUpdate}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <Typography variant='subtitle2'>Название филиала банка*</Typography>
                        <ActionValueInput 
                            store={'requisites'}
                            storeProp={'bankName'}
                            placeholder='ООО «Московская промышленная компания»' 
                            isUpdate={isUpdate}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <RequisitesTooltip/>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant='subtitle2'>Рассчетный счет*</Typography>
                        <ValueInput
                            store={'requisites'}
                            storeProp={'paymentAccount'} 
                            length={20}
                            isUpdate={isUpdate}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='subtitle2'>Корреспондентский счет*</Typography>
                        <ActionValueInput
                            store={'requisites'}
                            storeProp={'correspondentAccount'}
                            length={20}
                            isUpdate={isUpdate}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <RequisitesTooltip/>
                    </Grid>
                </Grid>
                {isUpdate && <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', marginTop: theme.spacing(6)}}>
                    <Button onClick={onAddRequisites} sx={{ textTransform: 'none', fontWeight: 400, fontSize: '15px' }}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="8" y="2" width="2" height="14" rx="1" fill="#5795FD"/>
                            <rect x="2" y="10" width="2" height="14" rx="1" transform="rotate(-90 2 10)" fill="#5795FD"/>
                        </svg>
                        Добавить еще один банк
                    </Button>
                    <SubmitButton type="submit">
                        Далее
                    </SubmitButton>
                </Box>}
            </Form>
    );
}

export default RequisitesForm;
