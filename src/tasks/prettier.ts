export const installPrettier =  () => {
  return {
    toInstallDeps: ['prettier'],
    toRemoveFiles: [
      '.prettierrc',
      'prettier.config.js',
      '.prettierrc.toml',
    ],
    toAddFiles: [
      ['samples/.prettierrc.js', '.prettierrc.js'],
      ['samples/.prettierignore', '.prettierignore']
    ],
  }
};
