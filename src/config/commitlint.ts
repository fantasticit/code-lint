const getDefaultCommitlintConfig = () => {
  return {
    extends: ['@commitlint/config-conventional'],
  };
};

export default getDefaultCommitlintConfig;
module.exports = getDefaultCommitlintConfig;
