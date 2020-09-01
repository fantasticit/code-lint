import { getPkg, install, setPkg, copy, pipe } from '../utils';

export const installLintStaged = async () => {
  process.chdir(process.cwd());
  await pipe(getPkg(), install('lint-staged'), setPkg());
  await pipe(copy('samples/lint-staged.config.js', 'lint-staged.config.js'));
};
