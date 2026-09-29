import path from 'node:path';

const PNG_DIR = path.join(process.cwd(), 'src/asset/png');
const SVG_DIR = path.join(process.cwd(), 'src/asset/svg');
const OUTPUT_DIR = path.join(process.cwd(), 'dist');
const SIZES = [24, 32, 48, 64];

export {
  PNG_DIR,
  SVG_DIR,
  OUTPUT_DIR,
  SIZES
}