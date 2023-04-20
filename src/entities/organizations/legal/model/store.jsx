import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { storePropsInfo } from '../../model/consts';
import { stringContainsOnlyNumbers } from '../../model/model';

export const useLegalStore = create(subscribeWithSelector((set, get) => ({
    fullname: null, 
    shortname: null, 
    registrationDate: null, 
    inn: null,
    innSkan: null,
    ogrn: null, 
    ogrnSkan: null,
    egripSkan: null,
    officeRentSkan: false,
    isOfficeRentSkanOff: true,
    setStoreValue: (value, type) => {
        console.log('storeProp', value, type)
        switch (type) {
            case 'fullname':
                set({ fullname: value })
                break
            case 'shortname':
                set({ shortname: value })
                break
            case 'registrationDate':
                set({ registrationDate: value })
                break
            case 'inn':
                if (value.length === 10 && stringContainsOnlyNumbers(value)) {
                    get().fetchData()
                }
                set({ inn: value })
                break
            case 'innSkan':
                set({ innSkan: value })
                break
            case 'ogrn':
                set({ ogrn: value })
                break
            case 'ogrnSkan':
                set({ ogrnSkan: value })
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
    },
    fetchData: async () => {
        const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
        const token = "9c31c48197ecb8d4d0fcb50562ae4b48899a1bfb";
        const query = get().inn;
        const branchType = "MAIN";

        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: query, branch_type: branchType})
        }
        const response = await fetch(url, options)
        let data = await response.json()
        console.log('data', data)

        let date = '';
        if (data.suggestions[0].data.state.registration_date) {
            const currentDate = new Date(data.suggestions[0].data.state.registration_date)
            const theyear = currentDate.getFullYear();
            const themonth = currentDate.getMonth() + 1 < 10? `0${currentDate.getMonth() + 1}` : currentDate.getMonth() + 1;
            const thetoday = currentDate.getDate() < 10? `0${currentDate.getDate()}` : currentDate.getDate();

            date = theyear + "-" + themonth + "-" + thetoday
        }
        
        set({
            fullname: data.suggestions[0].data.name.full_with_opf,
            shortname: data.suggestions[0].data.name.short_with_opf,
            registrationDate: date,
            ogrn: data.suggestions[0].data.ogrn
        })

        console.log(
            get().fullname,
            get().shortname,
            get().registrationDate,
            get().ogrn,
        )
    },
})))