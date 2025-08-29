import { FlatCompat } from '@eslint/eslintrc'
import pluginJs from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'
import { dirname } from 'path'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  { files: ['**/*.{js,mjs,cjs,ts,tsx}'] },
  { ignores: ['node_modules/', '.next/'] },
  { languageOptions: { globals: globals.browser } },

  // --- Base configs ---
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,

  // --- Plugins ---
  {
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
    },
  },

  // --- Custom rules ---
  {
    rules: {
      'prettier/prettier': 'error',
      'no-debugger': 'off',
      'no-console': 'warn',
      'eol-last': ['error', 'always'],
      'no-empty': 'warn',
      'no-empty-function': 'warn',
      'no-var': 'error',
      camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],
      'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
      'func-call-spacing': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'no-trailing-spaces': [
        'error',
        { skipBlankLines: true, ignoreComments: true },
      ],
      'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],

      // ✅ Usa SOLO simple-import-sort
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'sort-imports': 'off',

      // Typescript
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',

      // Next.js
      '@next/next/no-img-element': 'off',

      // React
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/destructuring-assignment': [
        'error',
        'always',
        { ignoreClassFields: true, destructureInSignature: 'always' },
      ],
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'function-declaration',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-sort-props': [
        'warn',
        {
          callbacksLast: true,
          shorthandFirst: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
    },
  },

  // --- Settings ---
  { settings: { react: { version: 'detect' } } },
]

export default eslintConfig
