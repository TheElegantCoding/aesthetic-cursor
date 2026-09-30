const cursorConfig = [
  {
    name: 'left_ptr',
    png: 'left_ptr.png',
    hotSpot: {
      x: 10,
      y: 6
    },
    symlink: [
      'arrow',
      'default',
      'top_left_arrow'
    ]
  },
  {
    name: 'link',
    png: 'link.png',
    hotSpot: {
      x: 10,
      y: 6
    },
    symlink: ['alias']
  },
  {
    name: 'copy',
    png: 'copy.png',
    hotSpot: {
      x: 10,
      y: 6
    }
  },
  {
    name: 'circle',
    png: 'circle.png',
    hotSpot: {
      x: 10,
      y: 6
    },
    symlink: ['forbidden']
  },
  {
    name: 'context-menu',
    png: 'context-menu.png',
    hotSpot: {
      x: 10,
      y: 6
    }
  },
  {
    name: 'pointer-move',
    png: 'pointer-move.png',
    hotSpot: {
      x: 10,
      y: 6
    }
  },
  {
    name: 'center_ptr',
    png: 'center_ptr.png',
    hotSpot: {
      x: 14,
      y: 4
    }
  },
  {
    name: 'right_ptr',
    png: 'right_ptr.png',
    hotSpot: {
      x: 23,
      y: 6
    }
  },
  {
    name: 'grabbing',
    png: 'grabbing.png',
    hotSpot: {
      x: 16,
      y: 8
    },
    symlink: [
      'closehand',
      'dnd-move',
      'dnd-none'
    ]
  },
  {
    name: 'dnd-copy',
    png: 'dnd-copy.png',
    hotSpot: {
      x: 16,
      y: 8
    }
  },
  {
    name: 'dnd-no-drop',
    png: 'dnd-no-drop.png',
    hotSpot: {
      x: 16,
      y: 8
    },
    symlink: ['no-drop']
  },
  {
    name: 'dnd-ask',
    png: 'dnd-ask.png',
    hotSpot: {
      x: 16,
      y: 8
    }
  },
  {
    name: 'dnd-link',
    png: 'dnd-link.png',
    hotSpot: {
      x: 16,
      y: 8
    }
  },
  {
    name: 'grab',
    png: 'grab.png',
    hotSpot: {
      x: 16,
      y: 11
    },
    symlink: ['openhand']
  },
  {
    name: 'pointer',
    png: 'pointer.png',
    hotSpot: {
      x: 15,
      y: 4
    },
    symlink: ['pointing_hand']
  },
  {
    name: 'move',
    png: 'move.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: [
      'all-scroll',
      'fleur',
      'size_all'
    ]
  },
  {
    name: 'vertical-resize',
    png: 'vertical-resize.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: [
      'double-arrow',
      'ns-resize',
      'row-resize',
      'size-ver',
      'size_ver',
      'split_v',
      's-resize',
      'v_double_arrow'
    ]
  },
  {
    name: 'horizontal-resize',
    png: 'horizontal-resize.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: [
      'col-resize',
      'ew-resize',
      'h_double_arrow',
      'size-hor',
      'size_hor',
      'split_h',
      'e-resize',
      'ew-resize',
      'w-resize'
    ]
  }
];

export { cursorConfig };