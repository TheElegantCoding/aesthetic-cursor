import { SIZES, PNG_DIR } from '@src/constant/constant.js';
import { calculateHotSpot } from '@src/util/calculate_hotspot.js';
import fs from 'node:fs/promises';
import path from 'node:path';

type GenerateCursorFileParameter = {
  cursorName: string;
  isAnimated?: boolean;
  hotSpot: {
    x: number;
    y: number;
  };
  framesData?: {
    size: number;
    fileName: string;
    delay: number;
    hotSpot: {
      x: number;
      y: number;
    };
  }[];
};

const generateCursorFile = async (parameters: GenerateCursorFileParameter) => {
  const { cursorName, isAnimated, hotSpot: { x: hotSpotX, y: hotSpotY } } = parameters;
  const hotSpot = `${hotSpotX} ${hotSpotY}`;
  let cursorContent = '';

  if (isAnimated) {
    for (const frame of parameters.framesData ?? []) {
      const calculatedHotSpot = calculateHotSpot({ targetSize: frame.size, hotSpot: { x: hotSpotX, y: hotSpotY } });
      cursorContent += `${frame.size} ${calculatedHotSpot.x} ${calculatedHotSpot.y} ${frame.fileName} ${frame.delay}\n`;
    }

    await fs.writeFile(path.join(`${PNG_DIR}/${cursorName}`, `${cursorName}.cursor`), cursorContent);
    return;
  }

  SIZES.forEach((entry) => {
    if (entry === 32) {
      cursorContent += `${entry} ${hotSpot} ${cursorName}-${entry}.png 0\n`;
    } else {
      const calculatedHotSpot = calculateHotSpot({ targetSize: entry, hotSpot: { x: hotSpotX, y: hotSpotY } });
      cursorContent += `${entry} ${calculatedHotSpot.x} ${calculatedHotSpot.y} ${cursorName}-${entry}.png 0\n`;
    }
  });

  await fs.writeFile(path.join(`${PNG_DIR}/${cursorName}`, `${cursorName}.cursor`), cursorContent);
};

export { generateCursorFile };