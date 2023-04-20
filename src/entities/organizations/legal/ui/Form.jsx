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
import { useLegalStore } from '../model/store';
import { useScreenLoaderStore } from '../../../../processes/loader/model';
import { Form } from '../../../../shared/ui/form/Form';
import { useIndexPageStore } from '../../../../pages/store';

const LegalForm = () => {
    const theme = useTheme();
    const isFieldsValid = useLegalStore(store => store.isFieldsValid)
    const rootInn = useLegalStore(store => store.inn)
    const setErrorMessage = useErrorStore(store => store.setErrorMessage)
    const setIsLoading = useScreenLoaderStore(store => store.setIsLoading)
    const setStoreValue = useIndexPageStore(store => store.setStoreValue)

    const onFormSubmit = async (e) => {
        e.preventDefault()
        const error = isFieldsValid()
        if (error.status) {
            setErrorMessage(error.message)
        } else {
            setIsLoading(true)
            const isOver = await postOrganizationRequest(e.target, 'legal')
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
                    <Grid item xs={6}>
                        <Typography variant='subtitle2'>Наименование полное*</Typography>
                        <ValueInput 
                            placeholder='ООО «Московская промышленная компания»' 
                            store={'legal'}
                            storeProp={'fullname'}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle2'>Наименование сокращенное*</Typography>
                        <ValueInput 
                            placeholder='ООО «МПК»' 
                            store={'legal'}
                            storeProp={'shortname'}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='subtitle2'>Дата регистрации*</Typography>
                        <DateInput
                            store={'legal'}
                            storeProp={'registrationDate'}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='subtitle2'>ИНН*</Typography>
                        <ValueInput
                            store={'legal'}
                            storeProp={'inn'} 
                            length={10} 
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle2'>Скан ИНН*</Typography>
                        <FileInput
                            store={'legal'}
                            storeProp={'innSkan'}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant='subtitle2'>ОГРН*</Typography>
                        <ValueInput 
                            store={'legal'}
                            storeProp={'ogrn'} 
                            length={13} 
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle2'>Скан ОГРН*</Typography>
                        <FileInput
                            store={'legal'}
                            storeProp={'ogrnSkan'}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle2'>Скан выписки из ЕГРИП (не старше 3 месяцев)*</Typography>
                        <FileInput
                            store={'legal'}
                            storeProp={'egripSkan'}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant='subtitle2'>Скан договора аренды помещения (офиса)</Typography>
                        <FileInput
                            store={'legal'}
                            storeProp={'officeRentSkan'}
                        />
                    </Grid>
                    <Grid item xs={2}>
                        <Box sx={{ marginTop: '34px' }}>
                            <FormControlLabel 
                                control={<CheckboxInput 
                                    store={'legal'}
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

export default LegalForm;
