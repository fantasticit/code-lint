import spawn from 'cross-spawn';

/**
 * 执行指定脚本命令
 * @param cmd
 * @param options
 */
export const exec = (cmd: string, options = {}): Promise<string> => {
  const [shell, ...args] = cmd.split(' ');

  return new Promise((resolve, reject) => {
    const child = spawn(shell, args, { stdio: 'pipe', ...options });
    let stdout = Buffer.from([]);
    let stderr = Buffer.from([]);

    child.stdout &&
      child.stdout.on('data', (buf) => {
        stdout = Buffer.concat([stdout, buf]);
      });

    child.stderr &&
      child.stderr.on('data', (buf) => {
        stderr = Buffer.concat([stderr, buf]);
      });

    child.on('exit', (code) => {
      if (code !== 0) {
        const reason = `${stderr} || unknown error`;
        reject(new Error(`child process exited with code ${code} due to ${reason}`));
      } else {
        resolve(`${stdout}`);
      }
    });

    child.on('error', (err) => {
      reject(new Error(`child process exited due to ${err}`));
    });
  });
};
