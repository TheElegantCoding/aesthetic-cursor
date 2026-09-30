type CursorModel = {
  name: string;
  size: number;
  hotSpot: {
    x: number;
    y: number;
  };
  animation?: boolean;
  symlink?: string[];
};

export type { CursorModel };