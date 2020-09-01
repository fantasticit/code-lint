import { exec, createLoading } from './utils';
import { installEditorconfig } from './tasks/editorconfig';
import { installEslint } from './tasks/eslint';
import { installPrettier } from './tasks/prettier';
import { installHusky } from './tasks/husky';
import { installLintStaged } from './tasks/lintstaged';
import { installStylelint } from './tasks/stylelint';
import { installCommitizen } from './tasks/commitizen';
import { installCommitlint } from './tasks/commitlint';

export const init = async () => {
  const start = Date.now();
  const spinner = createLoading('Install @fantaticit/code-lint...');
  spinner.start();
  await installEditorconfig();
  await installEslint();
  await installStylelint();
  await installPrettier();
  await installHusky();
  await installLintStaged();
  await installCommitizen();
  await installCommitlint();
  await exec('yarn');
  await exec('npm rebuild');
  spinner.stop();
  /* eslint-disable no-console */
  console.log(`✨  Done in ${((Date.now() - start) / 1000).toFixed(2)}s`);
};
