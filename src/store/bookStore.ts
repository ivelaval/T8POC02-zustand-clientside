import { create } from 'zustand';

export interface IBook {
    amount: number,
    title: string,
    updateAmount: (newAmount: number) => void,
    updateTitle: (newAmount: string) => void,
    dropStore: () => void,
}

export const initialStore = (set) => ({
    amount: 40,
    title: "Desafio de box 2023",
    updateAmount: (newAmount: number ) => set( state => ({ ...state, amount: state.amount + newAmount })),
    updateTitle: (newTitle: string ) => set( state => ({ ...state, title: newTitle })),
    dropStore: () => set({}, true),
})

export const useBookStore = create<IBook>(initialStore);