import { getPkg, install, uninstall, setPkg, rm, copy, pipe } from '../utils';

export const installEslint = async () => {
  process.chdir(process.cwd());
  await pipe(
    getPkg(),
    uninstall('prettier-eslint'),
    uninstall('prettier-eslint-cli'),
    uninstall('eslint-plugin-msfe'),
    install('@typescript-eslint/eslint-plugin'),
    install('@typescript-eslint/parser'),
    install('eslint'),
    install('eslint-config-prettier'),
    install('eslint-plugin-prettier'),
    install('eslint-import-resolver-typescript'),
    install('eslint-plugin-import'),
    install('eslint-plugin-jest'),
    install('eslint-plugin-react'),
    install('eslint-plugin-react-hooks'),
    install('typescript'),
    setPkg()
  );
  await pipe(
    rm('.eslintrc.cjs'),
    rm('.eslintrc.yaml'),
    rm('.eslintrc.yml'),
    rm('.eslintrc.json'),
    rm('.eslintrc'),
    copy('samples/.eslintrc.js', '.eslintrc.js'),
    copy('samples/.eslintignore', '.eslintignore')
  );
};
