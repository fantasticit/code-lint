import fs from 'fs-extra';
import path from 'path';

export const rm = (file: string) => {
  const target = path.join(process.cwd(), file);
  fs.removeSync(target);
  console.log(`Add file ${target}`); // eslint-disable-line no-console
};

export const copy = (source: string, target: string) => {
  const newTarget = path.join(process.cwd(), target);
  const content = fs.readFileSync(path.join(__dirname, '../', source), {
    encoding: 'utf8',
  });
  fs.outputFileSync(newTarget, content);
  console.log(`Add file ${newTarget}`); // eslint-disable-line no-console
};
