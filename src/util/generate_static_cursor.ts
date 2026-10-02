import { cursorConfig } from '@src/config/cursor_config.js';
import {
  SIZES,
  SVG_DIR,
  PNG_DIR,
  OUTPUT_DIR
} from '@src/constant/constant.js';
import { generateCursorFile } from '@src/util/generate_cursor_file.js';
import { exec } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const generateStaticCursor = async () => {
  const staticCursor = cursorConfig.filter((cursor) => { return !cursor.animation; });

  for (const cursor of staticCursor) {
    const cursorFile = path.join(SVG_DIR, 'static', `${cursor.name}.svg`);

    await fs.mkdir(path.join(PNG_DIR, cursor.name), { recursive: true });

    for (const size of SIZES) {
      const outputFile = path.join(PNG_DIR, cursor.name, `${cursor.name}-${size}.png`);

      await sharp(cursorFile, { density: 300 })
        .png({
          quality: 100,
          compressionLevel: 9,
          adaptiveFiltering: true,
          force: true
        })
        .resize(size, size)
        .toFile(outputFile);

      await generateCursorFile({
        cursorName: cursor.name,
        hotSpot: cursor.hotSpot
      });
      exec(`cd ${PNG_DIR}/${cursor.name} && xcursorgen ${cursor.name}.cursor ${OUTPUT_DIR}/cursors/${cursor.name}`);
    }
  }
};

export { generateStaticCursor };