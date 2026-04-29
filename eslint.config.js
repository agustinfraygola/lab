import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    ignores: ['dist', 'build', 'coverage', 'node_modules'],
  },

  js.configs.recommended,

  {
    files: ['**/*.{js,jsx}'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    rules: {
      'no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],

      'prefer-const': 'warn',
      'no-var': 'error',
      curly: ['error', 'all'],
      'no-duplicate-imports': 'error',
      'no-else-return': 'warn',
    },
  },
];