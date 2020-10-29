export const installLintStaged =  () => {
  return {
    toInstallDeps: ['lint-staged'],
    toAddFiles: [
      ['samples/lint-staged.config.js', 'lint-staged.config.js']
    ]
  }
};
