import { logger } from '@src/util/logger.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const themeConfig = async () => {
  try {
    const rootIndexTheme = path.join(process.cwd(), 'index.theme');
    const linuxDestination = path.join(process.cwd(), 'dist/linux/index.theme');

    await fs.access(rootIndexTheme);
    await fs.copyFile(rootIndexTheme, linuxDestination);

    logger.info('File index.theme copied successfully to dist/linux/');
  } catch (error) {
    logger.warning(`Error copying index.theme: ${error as string}`);
  }
};

export { themeConfig };