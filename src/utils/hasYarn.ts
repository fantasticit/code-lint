import { execSync } from 'child_process';

let _hasYarn = null;

/**
 * 检查安装环境下是否安装 yarn
 */
export const hasYarn = () => {
  if (_hasYarn != null) {
    return _hasYarn;
  }

  try {
    execSync('yarn --version', { stdio: 'ignore' });
    return (_hasYarn = true);
  } catch (e) {
    return (_hasYarn = false);
  }
};
