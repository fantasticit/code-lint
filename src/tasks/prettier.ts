import { getPkg, install, setPkg, rm, copy, pipe } from '../utils';

export const installPrettier = async () => {
  process.chdir(process.cwd());
  await pipe(getPkg(), install('prettier'), setPkg());
  await pipe(
    rm('.prettierrc'),
    rm('prettier.config.js'),
    rm('.prettierrc.toml'),
    copy('samples/.prettierrc.js', '.prettierrc.js'),
    copy('samples/.prettierignore', '.prettierignore')
  );
};
