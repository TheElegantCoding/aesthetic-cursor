import { exec } from 'node:child_process';
import util from 'node:util';

const execPromise = util.promisify(exec);

const install = async () => {
  await execPromise('mkdir -p ~/.local/share/icons/aesthetic-cursor/cursors');
  await execPromise('cp -r dist/cursors/* ~/.local/share/icons/aesthetic-cursor/cursors');
  await execPromise('mv index.theme ~/.local/share/icons/aesthetic-cursor/');
};

await install();