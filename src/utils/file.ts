import fs from 'fs-extra';
import path from 'path';

export const rm = (file: string) => {
  return () => fs.removeSync(path.join(process.cwd(), file));
};

export const copy = (source: string, target: string) => {
  return () => {
    const newTarget = path.join(process.cwd(), target);
    const content = fs.readFileSync(path.join(__dirname, '../', source), {
      encoding: 'utf8',
    });
    fs.outputFileSync(newTarget, content);
  };
};
