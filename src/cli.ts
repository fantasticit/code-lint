import program from 'commander';
import { init } from '.';

program.command(`init`).description(`add lint, formatter config here`).action(init);

program.arguments('<command>').action((cmd) => {
  program.outputHelp();
  /* eslint-disable no-console */
  console.log(`  ` + `未知命令 ${cmd}.`);
  console.log();
});

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

program.parse(process.argv);
