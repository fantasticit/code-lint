export const installEslint = () => {
  return {
    toRemoveDeps: ['prettier-eslint', 'prettier-eslint-cli'],
    toInstallDeps: [
      '@typescript-eslint/eslint-plugin',
      '@typescript-eslint/parser',
      'eslint',
      'eslint-config-prettier',
      'eslint-plugin-prettier',
      'eslint-import-resolver-typescript',
      'eslint-plugin-import',
      'eslint-plugin-jest',
      'eslint-plugin-react',
      'eslint-plugin-react-hooks',
      'typescript',
    ],
    toRemoveFiles: [
      '.eslintrc.cjs',
      '.eslintrc.yaml',
      '.eslintrc.yml',
      '.eslintrc.json',
      '.eslintrc',
    ],
    toAddFiles: [
      ['samples/.eslintrc.js', '.eslintrc.js'],
      ['samples/.eslintignore', '.eslintignore'],
    ],
  };
};
