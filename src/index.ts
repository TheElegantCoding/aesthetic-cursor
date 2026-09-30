import { OUTPUT_DIR } from '@src/constant/constant.js';
import { generateAnimationCursor } from '@src/util/generate_animation_cursor.js';
import { generateStaticCursor } from '@src/util/generate_static_cursor.js';
import { loggerLoader } from '@src/util/logger.js';
import { themeConfig } from '@src/util/theme_config.js';
import fs from 'node:fs/promises';
import path from 'node:path';

const createCursor = async () => {
  const loader = loggerLoader('Creating cursors.');
  loader.start();

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.mkdir(path.join(OUTPUT_DIR, 'cursors'), { recursive: true });

  await generateStaticCursor();
  await generateAnimationCursor();
  // await themeConfig();

  loader.stop();
};

await createCursor();