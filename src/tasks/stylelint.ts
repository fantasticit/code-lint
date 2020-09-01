import { getPkg, install, setPkg, rm, copy, pipe } from '../utils';

export const installStylelint = async () => {
  process.chdir(process.cwd());
  await pipe(
    getPkg(),
    install('stylelint'),
    install('stylelint-config-standard'),
    install('stylelint-order'),
    setPkg()
  );
  await pipe(
    rm('.stylelintrc'),
    rm('.stylelintrc.json'),
    rm('.stylelintrc.yaml'),
    rm('.stylelintrc.yml'),
    rm('.stylelintrc.js'),
    copy('samples/stylelint.config.js', 'stylelint.config.js')
  );
};
