import { SVG_DIR, OUTPUT_DIR } from '@src/constant/constant.js';
import { generateStaticCursor } from '@src/util/generate_static_cursor.js';
import { loggerLoader } from '@src/util/logger.js';
import { themeConfig } from '@src/util/theme_config.js';
import fs from 'node:fs/promises';

const createCursor = async () => {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const staticCursors = await fs.readdir(`${SVG_DIR}/static`, { withFileTypes: true, recursive: true });
  const loader = loggerLoader('Creating cursors.');
  loader.start();

  generateStaticCursor(staticCursors);
  await themeConfig();

  loader.stop();
};

await createCursor();