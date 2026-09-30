type CalculateHotSpotParameters = {
  targetSize: number;
  hotSpot: {
    x: number;
    y: number;
  };
};

const calculateHotSpot = ({ targetSize, hotSpot }: CalculateHotSpotParameters) => {
  const baseSize = 32;

  return {
    x: Math.round(hotSpot.x * (targetSize / baseSize)),
    y: Math.round(hotSpot.y * (targetSize / baseSize))
  };
};

export { calculateHotSpot };