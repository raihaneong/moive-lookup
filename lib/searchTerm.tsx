import {create} from 'zustand'

interface ISearchTerm {
    search: string
    setSearch: (search: string) => void
}

export const useMovieStore = create<ISearchTerm>((set) => ({
    search: '',
    setSearch: (search) => set({search})
}))