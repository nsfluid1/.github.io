import next from 'eslint-config-next';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist', '.next', 'node_modules'],
  },
  ...next,
  ...tseslint.configs.recommended,
];
