import { createStore } from 'jotai'
import { theme } from './atoms'

export const myStore = createStore()

myStore.set(theme, 'light') //default value
