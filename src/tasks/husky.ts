export const installHusky =  () => {
  return {
    toRemoveDeps: [
      'pre-commit',
      'ghooks',
      'precommit-hook',
      'yorkie',
    ],
    toInstallDeps: [
      'husky',
    ],
    toAddFiles: [
      ['samples/.huskyrc.js', '.huskyrc.js']
    ],
    toRemoveFiles: [
      '.huskyrc',
      '.huskyrc.json',
      'husky.config.js',
      '.husky.config.js',
    ],
  }
};
