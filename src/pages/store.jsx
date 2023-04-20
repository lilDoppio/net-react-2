import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export const useIndexPageStore = create(subscribeWithSelector((set, get) => ({
    organizationType: 'individual', 
    isOrganizationFormComplite: false,
    rootInn: null,
    setStoreValue: (value, type) => {
        console.log('storeProp', value, type)
        switch (type) {
            case 'organizationType':
                set({ organizationType: value })
                break
            case 'isOrganizationFormComplite':
                set({ isOrganizationFormComplite: value })
                break
            case 'rootInn':
                set({ rootInn: value })
                break
            default: 
                break
                
        }
    },
})))