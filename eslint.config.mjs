// eslint.config.js
import tseslint from 'typescript-eslint'

export default [
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts'],
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'double'],
      indent: ['error', 4],
      'comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': ['error', 'always']
    },
    ignores: ['dist/**', 'node_modules/**']
  },
]