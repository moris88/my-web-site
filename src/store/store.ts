import { createStore } from 'jotai'
import { themeAtom } from './atoms'

export const myStore = createStore()
myStore.set(themeAtom, 'light')
