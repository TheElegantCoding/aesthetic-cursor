import { generateSymlink } from '@src/util/generate_symlink.js';
import { exec } from 'node:child_process';
import util from 'node:util';

const execPromise = util.promisify(exec);

const install = async () => {
  const theme = '~/.local/share/icons/aesthetic-cursor';

  await execPromise(`rm -rf ${theme}/cursors`);
  await execPromise(`mkdir -p ${theme}/cursors`);
  await execPromise(`cp -r dist/cursors/* ${theme}/cursors/`);
  await execPromise(`cp -r dist/index.theme ${theme}/`);
  await generateSymlink();
};

await install();