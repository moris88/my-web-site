import { atom } from 'jotai'

export type Theme = 'light' | 'dark'

export const theme = atom<Theme>('light')
