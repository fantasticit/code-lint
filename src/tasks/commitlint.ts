import { getPkg, install, setPkg, copy, pipe } from '../utils';

export const installCommitlint = async () => {
  process.chdir(process.cwd());
  await pipe(
    getPkg(),
    install('@commitlint/cli'),
    install('@commitlint/config-conventional'),
    setPkg()
  );
  await pipe(copy('samples/commitlint.config.js', 'commitlint.config.js'));
};
