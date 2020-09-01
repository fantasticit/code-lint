import path from 'path';
import fs from 'fs-extra';
import { hasYarn } from './hasYarn';
import { exec } from './exec';

export const getPkg = () => {
  return () => {
    return fs.readJsonSync(path.join(process.cwd(), 'package.json'));
  };
};

export const uninstall = (dep: string) => {
  return async (pkg) => {
    const dependencies = pkg.dependencies;
    const devDependencies = pkg.devDependencies;
    const depWithoutVersion = /(\w+)@(\w+)/.test(dep) ? dep.split('@')[0] : dep; // 去除版本号

    if (
      (dependencies && dependencies[depWithoutVersion]) ||
      (devDependencies && devDependencies[depWithoutVersion])
    ) {
      await exec(`${hasYarn() ? 'yarn remove' : 'npm uninstall'} ${depWithoutVersion}`);
    }

    return getPkg()();
  };
};

export const install = (dep: string) => {
  return async (pkg) => {
    const dependencies = pkg.dependencies;
    const devDependencies = pkg.devDependencies;
    const depWithoutVersion = /(\w+)@(\w+)/.test(dep) ? dep.split('@')[0] : dep; // 去除版本号

    if (dependencies && dependencies[depWithoutVersion]) {
      await exec(`${hasYarn() ? 'yarn remove' : 'npm uninstall'} ${depWithoutVersion}`);
    }

    if (!devDependencies || !devDependencies[depWithoutVersion]) {
      await exec(`${hasYarn() ? 'yarn add' : 'npm install'} ${dep} --dev`);
    }

    return getPkg()();
  };
};

export const modifyPkg = (fn) => {
  return (pkg) => {
    fn(pkg);
    return pkg;
  };
};

export const setPkg = () => {
  return (pkg) => {
    fs.writeFileSync(path.join(process.cwd(), 'package.json'), JSON.stringify(pkg, null, 2));
    exec('./node_modules/.bin/prettier package.json --write').catch(() => {
      exec('npx prettier package.json --write');
    });
  };
};
