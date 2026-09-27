import {
  PNG_DIR,
  LINUX_OUTPUT_DIR,
  WINDOWS_OUTPUT_DIR
} from '@src/constant/constant.js';
import { compileLinuxCursor } from '@src/util/compiler_linux.js';
import { logger, loggerLoader } from '@src/util/logger.js';
import { themeConfig } from '@src/util/theme_config.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const createCursor = async () => {
  try {
    await fs.mkdir(LINUX_OUTPUT_DIR, { recursive: true });
    await fs.mkdir(WINDOWS_OUTPUT_DIR, { recursive: true });
    const entries = await fs.readdir(PNG_DIR, { withFileTypes: true });
    const loader = loggerLoader('Creating cursors for linux and windows');
    loader.start();

    for (const entry of entries) {
      const cursorName = entry.name;
      const cursorFolderPath = path.join(PNG_DIR, cursorName);
      const filesInFolder = await fs.readdir(cursorFolderPath);
      const pngFiles = filesInFolder.filter((file) => { return path.extname(file).toLowerCase() === '.png'; });

      try {
        await compileLinuxCursor(
          cursorName,
          cursorFolderPath,
          pngFiles,
          LINUX_OUTPUT_DIR
        );
      } catch (error) {
        logger.error(`Error Linux (${cursorName}): ${error as string}`);
      }
    }

    await themeConfig();

    loader.stop();
    logger.info('Process completed');
  } catch (error: unknown) {
    logger.error(`Error crítico en la ejecución: ${error as string}`);
  }
};

await createCursor();