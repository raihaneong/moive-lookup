import {create} from 'zustand'

interface ISearchTerm {
    search: string
    setSearch: (search: string) => void
    result: any
    setResult: (result: any) => void
}

export const useSearhTerm = create<ISearchTerm>((set) => ({
    search: '',
    setSearch: (search) => set({ search }),
    result: [],
    setResult: (result) => set({ result })
}))