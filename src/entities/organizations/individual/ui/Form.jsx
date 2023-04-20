import { Box, FormControlLabel, Grid, Typography } from '@mui/material';
import React from 'react'
import { postOrganizationRequest } from '../../api/post';
import ValueInput from '../../../../features/input/ValueInput';
import DateInput from '../../../../features/date-input/DateInput';
import FileInput from '../../../../features/file-input/FileInput';
import { SubmitButton } from '../../../../shared/ui/button/SubmitButton';
import { useTheme } from '@mui/material/styles';
import { useErrorStore } from '../../../../processes/error/model';
import CheckboxInput from '../../../../features/checkbox/Checkbox';
import { useIndividualStore} from '../model/store';
import { useScreenLoaderStore } from '../../../../processes/loader/model';
import { Form } from '../../../../shared/ui/form/Form';
import { useIndexPageStore } from '../../../../pages/store';

const IndividualForm = () => {
    const theme = useTheme();
    const isFieldsValid = useIndividualStore(store => store.isFieldsValid)
    const rootInn = useIndividualStore(store => store.inn)
    const setErrorMessage = useErrorStore(store => store.setErrorMessage)
    const setIsLoading = useScreenLoaderStore(store => store.setIsLoading)
    const setStoreValue = useIndexPageStore(store => store.setStoreValue)

    const onFormSubmit = async (e) => {
        e.preventDefault()
        const error = isFieldsValid()
        if (error.status) {
            setErrorMessage(error.message)
            console.log('ERROR', error.status, error.message)
        } else {
            setIsLoading(true)
            const isOver = await postOrganizationRequest(e.target, 'individual')
            if (isOver) {
                setIsLoading(false)
                setStoreValue(true ,'isOrganizationFormComplite')
                setStoreValue(rootInn ,'rootInn')
            }
        }
    }
   
    return (
        <div className="App">
            <Form enctype="multipart/form-data" onSubmit={e => onFormSubmit(e)}>
                <Grid container spacing={'16px'}>
                    <Grid item xs={2}>
                        <Typography variant='subtitle2'>ИНН*</Typography>
                        <ValueInput
                            store={'individual'}
                            storeProp={'inn'} 
                            length={10} 
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle2'>Скан ИНН*</Typography>
                        <FileInput
                            store={'individual'}
                            storeProp={'innSkan'}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='subtitle2'>ОГРНИП*</Typography>
                        <ValueInput 
                            store={'individual'}
                            storeProp={'ogrnip'} 
                            length={13} 
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle2'>Скан ОГРНИП*</Typography>
                        <FileInput
                            store={'individual'}
                            storeProp={'ogrnipSkan'}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='subtitle2'>Дата регистрации*</Typography>
                        <DateInput
                            store={'individual'}
                            storeProp={'registrationDate'}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle2'>Скан выписки из ЕГРИП (не старше 3 месяцев)*</Typography>
                        <FileInput
                            store={'individual'}
                            storeProp={'egripSkan'}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle2'>Скан договора аренды помещения (офиса)</Typography>
                        <FileInput
                            store={'individual'}
                            storeProp={'officeRentSkan'}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ marginTop: '34px' }}>
                            <FormControlLabel 
                                control={<CheckboxInput 
                                    store={'individual'}
                                    storeProp={'isOfficeRentSkanOff'}
                                />} 
                                label="Нет договора" 
                                sx={{ height: '52px', color: '#999999' }}
                            />
                        </Box>
                    </Grid>
                </Grid>
                <Box sx={{ marginTop: theme.spacing(6)}}>
                    <SubmitButton type="submit">
                        Далее
                    </SubmitButton>
                </Box>
            </Form>
        </div>
    );
}

export default IndividualForm;
