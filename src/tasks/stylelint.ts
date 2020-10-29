export const installStylelint =  () => {
  return {
    toInstallDeps: [
      'stylelint',
      'stylelint-config-standard',
      'stylelint-order',
    ],
    toRemoveFiles: [
      '.stylelintrc',
      '.stylelintrc.json',
      '.stylelintrc.yaml',
      '.stylelintrc.yml',
      '.stylelintrc.js',
    ],
    toAddFiles: [
      ['samples/stylelint.config.js', 'stylelint.config.js']
    ]
  }
};
