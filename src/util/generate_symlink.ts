import { cursorConfig } from '@src/config/cursor_config.js';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';

const generateSymlink = async () => {
  const outputCursors = path.join(os.homedir(), '.local/share/icons/aesthetic-cursor/cursors');

  await fs.mkdir(outputCursors, { recursive: true });

  for (const cursor of cursorConfig) {
    if (cursor.symlink && cursor.symlink.length > 0) {
      for (const alias of cursor.symlink) {
        const symlinkPath = path.join(outputCursors, alias);
        await fs.rm(symlinkPath, { force: true });
        await fs.symlink(cursor.name, symlinkPath);
      }
    }
  }
};

export { generateSymlink };