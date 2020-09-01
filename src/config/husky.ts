import os from 'os';

const getDefaultHuskyConfig = () => {
  const config = {
    hooks: {
      'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
      'prepare-commit-msg': 'exec < /dev/tty && git cz --hook || true',
      'pre-commit': 'lint-staged',
      'post-merge': 'yarn',
    },
  }; // 针对lerna等特殊工具需要命令式调用git commit，避免git cz交互式操作，出现bug
  // windows上脚本执行存在bug，暂时忽略交互式git-cz

  if (process.env.NO_PREPARE_COMMIT_MSG || os.platform() === 'win32') {
    delete config.hooks['prepare-commit-msg'];
  }

  return config;
};

export default getDefaultHuskyConfig;
module.exports = getDefaultHuskyConfig;
