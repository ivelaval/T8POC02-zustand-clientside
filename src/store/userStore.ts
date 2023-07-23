import { create } from 'zustand';

export interface IUserData {
    name: number,
    age: string,
}

export interface IUserStore {
    IUserData,
    setUser: (data: IUserData) => void,
    dropStore: () => void,
}

export const initialStore = (set) => ({
    name: '',
    age: 0,
    setUser: (data: IUserData ) => set( state => ({ ...state, ...data })),
    dropStore: () => set({}, true),
})

export const useUserStore = create<IUserStore>(initialStore);