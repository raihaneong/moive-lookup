import {create} from 'zustand'

interface MovieStore {
    search: string
    setSearch: (search: string) => void
}

export const useMovieStore = create<MovieStore>((set) => ({
    search: '',
    setSearch: (search) => set({search})
}))