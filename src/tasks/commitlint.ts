export const installCommitlint =  () => {
  return {
    toInstallDeps: [
      '@commitlint/cli',
      '@commitlint/config-conventional'
    ],
    toAddFiles: [
      [
        'samples/commitlint.config.js',
        'commitlint.config.js'
      ],
    ]
  }
};
