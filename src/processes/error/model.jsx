import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export const useErrorStore = create(subscribeWithSelector((set, get) => ({
    message: '', 
    setErrorMessage: (message) => {
        set({ message: message })

        setTimeout(() => {
            set({ message: '' })
        }, 3000)
    }
})))