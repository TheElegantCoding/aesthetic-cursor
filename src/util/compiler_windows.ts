import { getHotspot } from '@src/constant/hotspot.js';
import { exec } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import util from 'node:util';

const execPromise = util.promisify(exec);

export const compileWindowsCursor = async (
  cursorName: string,
  cursorFolderPath: string,
  pngFiles: string[],
  outputDirectory: string
): Promise<string | null> => {
  const primaryPng = pngFiles.find((file) => { return file === `${cursorName}_24.png`; }) ?? pngFiles[0];
  if (!primaryPng) { return null; }

  const sourcePngPath = path.join(cursorFolderPath, primaryPng);
  const windowsCurrentName = `${cursorName}.cur`;
  const windowsCurrentPath = path.join(outputDirectory, windowsCurrentName);
  const [hx, hy] = getHotspot(cursorName);

  await execPromise(`magick convert "${sourcePngPath}" -define cursor:hot-x=${hx} -define cursor:hot-y=${hy} "${windowsCurrentPath}"`);
  return windowsCurrentName;
};

export const generateWindowsInf = async (outputDirectory: string, windowsCursors: string[]) => {
  let infContent = '[Version]\nsignature="$CHICAGO$"\n\n';
  infContent += '[DefaultInstall]\nCopyFiles = Cursor.Files.Install\nAddReg = Cursor.Reg\n\n';
  infContent += '[DestinationDirs]\nCursor.Files.Install = 10, CURSORS\n\n';
  infContent += '[Cursor.Files.Install]\n';

  for (const current of windowsCursors) {
    infContent += `${current}\n`;
  }

  infContent += '\n[Cursor.Reg]\n';
  infContent += 'HKCU,"Control Panel\\Cursors","",0x00020000,"Aesthetic Cursor"\n';
  infContent += 'HKCU,"Control Panel\\Cursors","Arrow",0x00020000,"%%10%%\\CURSORS\\pointer.cur"\n';

  await fs.writeFile(path.join(path.dirname(outputDirectory), 'install.inf'), infContent, 'utf-8');
};