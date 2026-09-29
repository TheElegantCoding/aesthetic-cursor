const generateCursorFile = (cursorName: string, hotspotX: number, hotspotY: number, sizes: number[]) => {
  let cursorContent = '';

  sizes.forEach((entry) => {
    cursorContent += `${entry} ${hotspotX} ${hotspotY} ${cursorName}_${entry}.png 0\n`;
  })

  return cursorContent;
}

export { generateCursorFile }