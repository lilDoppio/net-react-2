import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { storePropsInfo } from '../../model/consts';
import { stringContainsOnlyNumbers } from '../../model/model';

export const useIndividualStore = create(subscribeWithSelector((set, get) => ({
    registrationDate: null, 
    inn: null,
    innSkan: null,
    ogrnip: null, 
    ogrnipSkan: null,
    egripSkan: null,
    officeRentSkan: false,
    isOfficeRentSkanOff: true,
    setStoreValue: (value, type) => {
        console.log('storeProp', value, type)
        switch (type) {
            case 'registrationDate':
                set({ registrationDate: value })
                break
            case 'inn':
                set({ inn: value })
                break
            case 'innSkan':
                set({ innSkan: value })
                break
            case 'ogrnip':
                set({ ogrnip: value })
                break
            case 'ogrnipSkan':
                set({ ogrnipSkan: value })
                break
            case 'egripSkan':
                set({ egripSkan: value })
                break
            case 'officeRentSkan':
                if (!get().isOfficeRentSkanOff) {
                    set({ officeRentSkan: value })
                }
                break
            case 'isOfficeRentSkanOff':
                if (value) {
                    set({ officeRentSkan: false })
                } else if (!get().officeRentSkan) {
                    set({ officeRentSkan: null })
                }
                set({ isOfficeRentSkanOff: value })
                break
            default: 
                break
                
        }
    },
    isFieldsValid: () => {
        let error = {
            status: false,
            message: ''
        }
        console.log(Object.values(get()))
        if (Object.values(get()).some(elm => elm === null)) {
            error.status = true
            error.message = `Все поля должны быть заполнены!`
            console.log('что-то null', error)
            return error
        }

        Object.entries(get()).map(([key, value]) => {
            const propLimits = storePropsInfo[key]
            if (value && propLimits && propLimits.length) {
                if (propLimits.length !== value.length) {
                    error.status = true
                    error.message = `В поле "${propLimits.title}" введенео ${value.length}, необходимо ${propLimits.length} символов!`
                }
                if (!stringContainsOnlyNumbers(value)) {
                    error.status = true
                    error.message = `Поле "${propLimits.title}" не должен содержать буквы!`
                }
            }
        }) 

        // if (!error.status) {
        //     get().postOrganization()
        // }

        return error
    }
})))