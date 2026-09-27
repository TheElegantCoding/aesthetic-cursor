import path from 'node:path';

const PNG_DIR = path.join(process.cwd(), 'src/asset/png');
const LINUX_OUTPUT_DIR = path.join(process.cwd(), 'dist/linux/cursors');
const WINDOWS_OUTPUT_DIR = path.join(process.cwd(), 'dist/windows/cursors');
const SIZES = [24, 48];

export {
  PNG_DIR,
  LINUX_OUTPUT_DIR,
  WINDOWS_OUTPUT_DIR,
  SIZES
}