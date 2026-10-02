import { cursorConfig } from '@src/config/cursor_config.js';
import {
  SIZES,
  SVG_DIR,
  PNG_DIR,
  OUTPUT_DIR
} from '@src/constant/constant.js';
import { calculateHotSpot } from '@src/util/calculate_hotspot.js';
import { generateCursorFile } from '@src/util/generate_cursor_file.js';
import { exec } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const generateAnimationCursor = async () => {
  const animationCursors = cursorConfig.filter((cursor) => { return cursor.animation; });

  for (const cursor of animationCursors) {
    const cursorSvgDirectory = path.join(SVG_DIR, 'animation', cursor.name);
    const cursorOutputDirectory = path.join(PNG_DIR, cursor.name);

    await fs.mkdir(cursorOutputDirectory, { recursive: true });

    const files = await fs.readdir(cursorSvgDirectory);
    const pngFiles = files
      .filter((file) => { return file.endsWith('.png'); })
      .toSorted((a, b) => {
        const numberA = parseInt(a.replaceAll(/[^0-9]/g, ''), 10) || 0;
        const numberB = parseInt(b.replaceAll(/[^0-9]/g, ''), 10) || 0;
        return numberA - numberB;
      });

    const sizesData = [];

    for (const size of SIZES) {
      const scaledHotSpot = calculateHotSpot({
        targetSize: size,
        hotSpot: { x: cursor.hotSpot.x, y: cursor.hotSpot.y }
      });
      const framesData = [];

      for (const [index, svgFile] of pngFiles.entries()) {
        const inputSvgPath = path.join(cursorSvgDirectory, svgFile);
        const outputPngName = `${cursor.name}-${size}-frame-${index + 1}.png`;
        const outputPngPath = path.join(cursorOutputDirectory, outputPngName);

        await sharp(inputSvgPath, { density: 300 })
          .resize(size, size)
          .png({
            quality: 100,
            compressionLevel: 9,
            adaptiveFiltering: true,
            force: true
          })
          .toFile(outputPngPath);

        framesData.push({ size, fileName: outputPngName, delay: 16 });
      }

      sizesData.push({
        size,
        hotSpot: { x: scaledHotSpot.x, y: scaledHotSpot.y },
        frames: framesData
      });
    }

    await generateCursorFile({
      cursorName: cursor.name,
      hotSpot: cursor.hotSpot,
      isAnimated: true,
      framesData: sizesData.flatMap((sizeEntry) => {
        return sizeEntry.frames.map((frame) => { return { ...frame, hotSpot: sizeEntry.hotSpot }; });
      })
    });

    exec(`cd ${PNG_DIR}/${cursor.name} && xcursorgen ${cursor.name}.cursor ${OUTPUT_DIR}/cursors/${cursor.name}`);
  }
};

export { generateAnimationCursor };