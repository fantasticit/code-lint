import { getPkg, uninstall, install, setPkg, rm, copy, pipe } from '../utils';

export const installHusky = async () => {
  process.chdir(process.cwd());
  await pipe(
    getPkg(),
    uninstall('pre-commit'),
    uninstall('ghooks'),
    uninstall('precommit-hook'),
    uninstall('yorkie'),
    install('husky'),
    setPkg()
  );
  await pipe(
    rm('.huskyrc'),
    rm('.huskyrc.json'),
    rm('husky.config.js'),
    rm('.husky.config.js'),
    copy('samples/.huskyrc.js', '.huskyrc.js')
  );
};
