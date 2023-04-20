import { create } from 'zustand'
import { subscribeWithSelector } from 'zustand/middleware'

export const useScreenLoaderStore = create(subscribeWithSelector((set, get) => ({
    isLoading: false, 
    setIsLoading: (isLoading) => {
        console.log('isLoading', isLoading)
        set({ isLoading: isLoading })
    }
})))