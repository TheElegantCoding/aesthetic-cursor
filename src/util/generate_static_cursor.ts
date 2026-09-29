import type { Dirent } from 'node:fs';

import {
  SIZES,
  SVG_DIR,
  PNG_DIR,
  OUTPUT_DIR
} from '@src/constant/constant.js';
import { getHotspot } from '@src/constant/hotspot.js';
import { generateCursorFile } from '@src/util/generate_cursor_file.js';
import { exec } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const generateStaticCursor = (entries: Dirent[]) => {
  entries.forEach(async (entry) => {
    const cursorName = entry.name.replaceAll('.svg', '');
    const cursorFile = await fs.readFile(path.join(`${SVG_DIR}/static`, `${cursorName}.svg`));
    const [hx, hy] = getHotspot(cursorName);

    await fs.mkdir(path.join(PNG_DIR, cursorName), { recursive: true });
    await fs.mkdir(path.join(OUTPUT_DIR), { recursive: true });
    await fs.mkdir(path.join(OUTPUT_DIR, 'cursors'), { recursive: true });

    SIZES.forEach(async (size) => {
      await sharp(cursorFile, { density: 300 })
        .png({
          quality: 100,
          compressionLevel: 9,
          adaptiveFiltering: true,
          force: true
        })
        .resize(size, size)
        .toFile(path.join(`${PNG_DIR}/${cursorName}`, `${cursorName}_${size}.png`));

      const cursorFileContent = generateCursorFile(
        cursorName,
        hx,
        hy,
        SIZES
      );
      await fs.writeFile(path.join(`${PNG_DIR}/${cursorName}`, `${cursorName}.cursor`), cursorFileContent);
      exec(`cd ${PNG_DIR}/${cursorName} && xcursorgen ${cursorName}.cursor ${OUTPUT_DIR}/cursors/${cursorName}`);
    });
  });
};

export { generateStaticCursor };