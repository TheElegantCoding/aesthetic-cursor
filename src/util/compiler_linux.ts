import { SIZES } from '@src/constant/constant.js';
import { getHotspot } from '@src/constant/hotspot.js';
import { exec } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import util from 'node:util';

const execPromise = util.promisify(exec);

const compileLinuxCursor = async (
  cursorName: string,
  cursorFolderPath: string,
  pngFiles: string[],
  outputDirectory: string
) => {
  let inConfigContent = '';
  const [hx, hy] = getHotspot(cursorName);

  for (const size of SIZES) {
    const staticFile = pngFiles.find((file) => { return file === `${cursorName}_${size}.png`; });
    if (staticFile) {
      inConfigContent += `${size}\t${hx}\t${hy}\t${staticFile}\n`;
    }

    const animFrames = pngFiles.filter((file) => { return file.includes(`_${size}`) && file !== `${cursorName}_${size}.png`; }).toSorted();

    if (animFrames.length > 0) {
      for (const frame of animFrames) {
        inConfigContent += `${size}\t${hx}\t${hy}\t${frame}\t80\n`;
      }
    }
  }

  if (!inConfigContent.trim()) { return; }

  const inFilePath = path.join(cursorFolderPath, `${cursorName}.in`);
  await fs.writeFile(inFilePath, inConfigContent, 'utf-8');
  const linuxBinaryPath = path.join(outputDirectory, cursorName);

  await execPromise(`cd "${cursorFolderPath}" && xcursorgen "${cursorName}.in" "${linuxBinaryPath}"`);
};

export { compileLinuxCursor };