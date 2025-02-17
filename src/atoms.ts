'use client'

import { atom } from 'jotai'
import { Theme, Todo } from './types'

export const themeAtom = atom<Theme>('light')
export const todoListAtom = atom<Todo[]>([])
