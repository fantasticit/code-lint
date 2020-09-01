import { copy, pipe } from '../utils';

export const installEditorconfig = async () => {
  process.chdir(process.cwd());
  await pipe(copy('samples/.editorconfig', '.editorconfig'));
};
