'use client'

import { atom } from 'jotai'

import type { Theme } from './types'

export const themeAtom = atom<Theme>('light')
