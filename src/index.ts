import path from 'path';
import fs from 'fs-extra';
import { exec, createLoading, hasYarn, rm, copy } from './utils';
import { installEditorconfig } from './tasks/editorconfig';
import { installEslint } from './tasks/eslint';
import { installPrettier } from './tasks/prettier';
import { installHusky } from './tasks/husky';
import { installLintStaged } from './tasks/lintstaged';
import { installStylelint } from './tasks/stylelint';
import { installCommitizen } from './tasks/commitizen';
import { installCommitlint } from './tasks/commitlint';

const removeDepVersion = (dep) => (/(\w+)@(\w+)/.test(dep) ? dep.split('@')[0] : dep);

export const init = async () => {
  process.chdir(process.cwd());

  const pkgPath = path.join(process.cwd(), 'package.json');

  if (!fs.existsSync(pkgPath)) {
    throw new Error(`No package.json find in ${process.cwd()}`);
  }

  const start = Date.now();
  const spinner = createLoading('Install @fantaticit/code-lint...');
  spinner.start();

  const toAddFiles: Array<[string, string]> = [];
  const toRemoveFiles: Array<string> = [];
  const toInstallDeps: Array<string> = ['@fantasticit/code-lint'];
  const toRemoveDeps: Array<string> = [];
  // eslint-disable-next-line @typescript-eslint/ban-types
  const toModifyPkg: Array<Function> = [];

  const collect = (fn) => {
    const {
      toAddFiles: s0 = [],
      toRemoveFiles: s1 = [],
      toInstallDeps: s2 = [],
      toRemoveDeps: s3 = [],
      toModifyPkg: s4 = [],
    } = fn();

    /* eslint-disable prefer-spread */
    toAddFiles.push.apply(toAddFiles, s0);
    toRemoveFiles.push.apply(toRemoveFiles, s1);
    toInstallDeps.push.apply(toInstallDeps, s2);
    toRemoveDeps.push.apply(toRemoveDeps, s3);
    toModifyPkg.push.apply(toModifyPkg, s4);
  };

  [
    installEditorconfig,
    installEslint,
    installStylelint,
    installPrettier,
    installHusky,
    installLintStaged,
    installCommitizen,
    installCommitlint,
  ].forEach(collect);

  const useYarn = hasYarn();

  if (hasYarn) {
    await exec('yarn install');
  }

  const removeCommand = useYarn
    ? (deps) => `yarn remove ${deps} -D`
    : (deps) => `npm uninstall ${deps} --save-dev`;
  const installCommand = useYarn
    ? (deps) => `yarn add ${deps} -D`
    : (deps) => `npm install ${deps} --save-dev`;

  const toRemoveDepsWithoutVersion = toRemoveDeps.map(removeDepVersion).join(' ');
  const toInstallDepsWithoutVersion = toInstallDeps.map(removeDepVersion).join(' ');

  try {
    await exec(`${removeCommand(toRemoveDepsWithoutVersion)}`);
  } catch (e) {
    // eslint-disable no-empty
  }
  console.log(''); // eslint-disable-line no-console
  console.log(`Now install dependencies...`); // eslint-disable-line no-console
  await exec(`${installCommand(toInstallDepsWithoutVersion)}`);

  toRemoveFiles.forEach(rm);
  toAddFiles.forEach(([s, t]) => copy(s, t));

  const pkg = fs.readJsonSync(pkgPath);

  toModifyPkg.forEach((patch) => {
    patch(pkg);
  });

  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  await exec('yarn');
  await exec('npm rebuild');

  spinner.stop();
  /* eslint-disable no-console */
  console.log(`✨  Done in ${((Date.now() - start) / 1000).toFixed(2)}s`);
};
