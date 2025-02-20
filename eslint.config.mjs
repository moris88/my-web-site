import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintConfigPrettier from 'eslint-config-prettier'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
const eslintConfig = [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { ignores: ['node_modules/'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    rules: {
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
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
          ignoreMemberSort: true,
          memberSyntaxSortOrder: ['all', 'single', 'multiple', 'none'],
          allowSeparatedGroups: true,
        },
      ],
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
]

export default eslintConfig
