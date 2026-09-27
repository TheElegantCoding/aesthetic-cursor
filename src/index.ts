import fs from 'node:fs/promises';
import path from 'node:path';
import { exec } from 'node:child_process';
import util from 'node:util';
import { logger, loggerLoader } from '@src/util/logger.js';

const execPromise = util.promisify(exec);
const PNG_DIR = path.join(process.cwd(), 'src/asset/png');
const THEME_OUTPUT_DIR = path.join(process.cwd(), 'dist/cursors');

const SIZES = [24, 48];

const getHotspot = (name: string): [number, number] => {
  if (name.includes('pointer') || name.includes('hand') || name.includes('link')) return [6, 2];
  if (name.includes('cross') || name.includes('precision')) return [12, 12];
  if (name.includes('ibeam') || name.includes('xterm')) return [12, 12];
  return [0, 0];
};

const compileCursors = async () => {
  try {
    await fs.mkdir(THEME_OUTPUT_DIR, { recursive: true });
    const entries = await fs.readdir(PNG_DIR, { withFileTypes: true });

    if (entries.length === 0) {
      logger.warning(`There is no folder in: ${PNG_DIR}`);
      return;
    }

    const loader = loggerLoader(`Generating .in files and compiling with xcursorgen`);
    loader.start();

    for (const entry of entries) {
      if (!entry.isDirectory()) continue;

      const cursorName = entry.name;
      const cursorFolderPath = path.join(PNG_DIR, cursorName);
      const filesInFolder = await fs.readdir(cursorFolderPath);

      let inConfigContent = '';
      const [hx, hy] = getHotspot(cursorName);

      const pngFiles = filesInFolder.filter(f => path.extname(f).toLowerCase() === '.png');

      for (const size of SIZES) {
        const staticFile = pngFiles.find(f => f === `${cursorName}_${size}.png`);
        if (staticFile) {
          inConfigContent += `${size}\t${hx}\t${hy}\t${staticFile}\n`;
        }

        const animFrames = pngFiles.filter(f => f.includes(`_${size}`) && f !== `${cursorName}_${size}.png`).sort();
        if (animFrames.length > 0) {
          for (const frame of animFrames) {
            inConfigContent += `${size}\t${hx}\t${hy}\t${frame}\t80\n`;
          }
        }
      }

      if (!inConfigContent.trim()) continue;

      const inFilePath = path.join(cursorFolderPath, `${cursorName}.in`);
      await fs.writeFile(inFilePath, inConfigContent, 'utf-8');

      const outputBinaryPath = path.join(THEME_OUTPUT_DIR, cursorName);

      try {
        await execPromise(`cd "${cursorFolderPath}" && xcursorgen "${cursorName}.in" "${outputBinaryPath}"`);
      } catch (execError) {
        logger.error(`Error at ${cursorName} with xcursorgen: ${execError}`);
      }
    }

    loader.stop();
    logger.info(`Cursor theme successfully compiled.`);
  } catch (error) {
    logger.error(`Error at compilation: ${error}`);
  }
};

await compileCursors();