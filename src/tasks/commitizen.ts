import { getPkg, install, modifyPkg, setPkg, copy, pipe } from '../utils';

export const installCommitizen = async () => {
  process.chdir(process.cwd());
  await pipe(
    getPkg(),
    install('commitizen'),
    install('cz-customizable'),
    modifyPkg((pkg) => {
      pkg.config = Object.assign(pkg.config || {}, {
        commitizen: {
          path: './node_modules/cz-customizable',
        },
      });
    }),
    setPkg()
  );
  await pipe(copy('samples/.cz-config.js', '.cz-config.js'));
};
