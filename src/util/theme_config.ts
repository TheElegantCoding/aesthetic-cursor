import fs from 'node:fs/promises';
import path from 'node:path';

const themeConfig = async () => {
  const rootIndexTheme = path.join(process.cwd(), 'index.theme');
  const linuxDestination = path.join(process.cwd(), 'dist/index.theme');

  await fs.access(rootIndexTheme);
  await fs.copyFile(rootIndexTheme, linuxDestination);
};

export { themeConfig };