import {create} from 'zustand'

interface ISearchTerm {
    search: string
    setSearch: (search: string) => void
}

export const useSearhTerm = create<ISearchTerm>((set) => ({
    search: '',
    setSearch: (search) => set({search})
}))