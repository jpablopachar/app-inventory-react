import js from '@eslint/js'
import prettierConfig from 'eslint-config-prettier'
import pluginImport from 'eslint-plugin-import'
import pluginReact from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      pluginReact.configs.flat.recommended,
    ],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      prettier: prettierConfig,
      import: pluginImport,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...prettierConfig.rules,
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'react/react-in-jsx-scope': 'off',
      'no-undef': 'off',
      'react/prop-types': 'off',
      quotes: [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: false,
            object: true,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'always-and-inside-groups',
          groups: [
            ['builtin', 'external'],
            'internal',
            'sibling',
            'index',
            'parent',
            'object',
          ],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'react/jsx-one-expression-per-line': [
        'error',
        {
          allow: 'single-child',
        },
      ],
      'react/jsx-max-props-per-line': [
        2,
        {
          maximum: 1,
          when: 'multiline',
        },
      ],
      'react/jsx-first-prop-new-line': [2, 'multiline'],
      semi: ['error', 'never'],
      '@typescript-eslint/semi': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
        },
      ],
      'no-console': 'error',
      'max-len': [
        'error',
        {
          code: 100,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'array-callback-return': [
        'error',
        {
          allowImplicit: true,
        },
      ],
      'no-return-await': 'error',
      'no-return-assign': ['error', 'always'],
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-else-return': [
        'error',
        {
          allowElseIf: false,
        },
      ],
      camelcase: [
        'error',
        {
          ignoreDestructuring: true,
          properties: 'always',
        },
      ],
      'no-lonely-if': 'error',
      'no-unmodified-loop-condition': 'error',
      'space-before-blocks': ['error', 'always'],
      curly: ['error', 'all'],
      'no-await-in-loop': 'error',
      'no-cond-assign': 'error',
      'no-constant-condition': [
        'error',
        {
          checkLoops: false,
        },
      ],
      'no-unreachable-loop': 'error',
      'lines-between-class-members': ['error', 'always'],
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        {
          blankLine: 'always',
          prev: 'directive',
          next: '*',
        },
        {
          blankLine: 'any',
          prev: 'directive',
          next: 'directive',
        },
        {
          blankLine: 'always',
          prev: ['case', 'default'],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: 'return',
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['function', 'class', 'export'],
        },
      ],
      'eol-last': ['error', 'always'],
      'block-scoped-var': 'error',
      'no-var': 'error',
      'func-call-spacing': ['error', 'never'],
      'no-eq-null': 'error',
      'no-lone-blocks': 'error',
      'react/destructuring-assignment': [
        'error',
        'always',
        {
          ignoreClassFields: true,
        },
      ],
      'no-plusplus': [
        'error',
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      'space-in-parens': [
        'off',
        'always',
        {
          exceptions: ['{}', '[]', '()'],
        },
      ],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': [
        'error',
        {
          hoist: 'all',
        },
      ],
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
        },
      ],
      'spaced-comment': [
        'error',
        'always',
        {
          exceptions: [],
        },
      ],
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/jsx-boolean-value': 'error',
      'react/jsx-indent': [2, 2],
      '@typescript-eslint/no-explicit-any': 'warn',
    },
    ignores: [
      'node_modules',
      'dist',
      '**/*.d.ts',
      '*.css',
      '*.svg',
      '*.jpeg',
      '*.jpg',
      '*.png',
      'scripts',
    ],
  }
)
