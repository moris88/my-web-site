import { atom } from 'jotai'
import { Theme } from '../types/global'

export const themeAtom = atom<Theme>('light')
