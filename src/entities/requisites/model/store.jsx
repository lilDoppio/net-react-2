import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'
import { storePropsKeys } from './consts';

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

export const useRequisitesStore = create(subscribeWithSelector((set, get) => ({
    requisites: [],
    bic: null,
    bankName: null,
    paymentAccount: null,
    correspondentAccount: null,
    requisitesCount: 0,
    setStoreValue: (value, type) => {
        console.log('storeProp', value, type)
        switch (type) {
            case 'bic':
                set({ bic: value })
                break
            case 'bankName':
                set({ bankName: value })
                break
            case 'paymentAccount':
                set({ paymentAccount: value })
                break
            case 'correspondentAccount':
                set({ correspondentAccount: value })
                break
            default: 
                break
                
        }
    },
    getRequisites: () => {
        return get().requisites
    },
    addRequisites: () => {
        const error = get().isFieldsValid()

        if (error.status) {
            return error
        }

        set(state => ({
            requisites: [
                ...state.requisites, 
                { 
                    bic: get().bic,
                    bankName: get().bankName,
                    paymentAccount: get().paymentAccount,
                    correspondentAccount: get().correspondentAccount,
                }
            ],
            bic: null,
            bankName: null,
            paymentAccount: null,
            correspondentAccount: null,
            requisitesCount: state.requisitesCount + 1,
        }))
        
        console.log(
            get().requisites,
            get().bic,
            get().bankName,
            get().paymentAccount,
            get().correspondentAccount,
        )

        return { status: false }
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
            return error
        }

        Object.entries(get()).map(([key, value]) => {
            const propLimits = storePropsKeys[key]
            if (value && propLimits && propLimits.length) {
                if (propLimits.length !== value.length) {
                    error.status = true
                    error.message = `В поле "${propLimits.title}" введенео ${value.length}, необходимо ${propLimits.length} символов!`
                }
                if (!containsOnlyNumbers(value)) {
                    error.status = true
                    error.message = `Поле "${propLimits.title}" не должен содержать буквы!`
                }
            }
        }) 

        return error
    },
    fetchData: async (storeProp) => {
        var url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/bank";
        var token = "9c31c48197ecb8d4d0fcb50562ae4b48899a1bfb";
        var query = get().bic;

        const options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify({query: query})
        }
        const response = await fetch(url, options)
        let data = await response.json()
        console.log('data', {query: query}, data)
        
        if (storeProp === 'bankName') {
            set({ bankName: data.suggestions[0].value })
        }
        if (storeProp === 'correspondentAccount') {
            set({ correspondentAccount: data.suggestions[0].data.correspondent_account })
        }

        console.log(
            get().bic,
            get().bankName,
            get().paymentAccount,
            get().correspondentAccount,
        )
    },   
})))