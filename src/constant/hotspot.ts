const getHotspot = (name: string): [number, number] => {
  if (name.includes('pointer') || name.includes('hand') || name.includes('link')) { return [6, 2]; }
  if (name.includes('cross') || name.includes('precision')) { return [12, 12]; }
  if (name.includes('ibeam') || name.includes('xterm')) { return [12, 12]; }
  return [0, 0];
};

export { getHotspot };