const fs = require('fs');

const getDefaultLintStagedConfig = () => {
  return {
    '*.{js,jsx,ts,tsx}': (fileNames) => {
      const fileList = fileNames.join(' ');
      const actions = [`eslint --fix ${fileList}`];

      if (fs.existsSync('./tsconfig.json')) {
        actions.push('tsc -p tsconfig.json --noEmit');
      }

      return actions;
    },
    '*.{css,scss,sass}': ['stylelint --fix --formatter verbose --allow-empty-input'],
    '*.md': ['prettier --write', 'git add'],
  };
};

export default getDefaultLintStagedConfig;
module.exports = getDefaultLintStagedConfig;
