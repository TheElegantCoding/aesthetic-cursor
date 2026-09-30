/* eslint-disable max-lines */

const cursorConfig = [
  {
    name: 'left-ptr',
    png: 'left-ptr.png',
    hotSpot: {
      x: 10,
      y: 6
    },
    symlink: [
      'arrow',
      'left_ptr',
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
    name: 'center-ptr',
    png: 'center-ptr.png',
    hotSpot: {
      x: 14,
      y: 4
    },
    symlink: ['center_ptr']
  },
  {
    name: 'right-ptr',
    png: 'right-ptr.png',
    hotSpot: {
      x: 23,
      y: 6
    },
    symlink: ['right_ptr']
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
  },
  {
    name: 'diagonal-left-resize',
    png: 'diagonal-left-resize.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: [
      'size_fdiag',
      'nw-resize',
      'nwse-resize',
      'se-resize'
    ]
  },
  {
    name: 'diagonal-right-resize',
    png: 'diagonal-right-resize.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: [
      'ne-resize',
      'nesw-resize',
      'sw-resize',
      'size_bdiag'
    ]
  },
  {
    name: 'up-arrow',
    png: 'up-arrow.png',
    hotSpot: {
      x: 16,
      y: 4
    },
    symlink: ['sb_up_arrow']
  },
  {
    name: 'down-arrow',
    png: 'down-arrow.png',
    hotSpot: {
      x: 16,
      y: 27
    },
    symlink: ['sb_down_arrow']
  },
  {
    name: 'left-arrow',
    png: 'left-arrow.png',
    hotSpot: {
      x: 5,
      y: 16
    },
    symlink: ['sb_left_arrow']
  },
  {
    name: 'right-arrow',
    png: 'right-arrow.png',
    hotSpot: {
      x: 27,
      y: 16
    },
    symlink: ['sb_right_arrow']
  },
  {
    name: 'text',
    png: 'text.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: ['ibeam']
  },
  {
    name: 'vertical-text',
    png: 'vertical-text.png',
    hotSpot: {
      x: 16,
      y: 16
    }
  },
  {
    name: 'pencil',
    png: 'pencil.png',
    hotSpot: {
      x: 6,
      y: 25
    },
    symlink: ['draft']
  },
  {
    name: 'help',
    png: 'help.png',
    hotSpot: {
      x: 9,
      y: 10
    },
    symlink: [
      'left_ptr_help',
      'whats_this',
      'question_arrow'
    ]
  },
  {
    name: 'plus',
    png: 'plus.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: ['cell']
  },
  {
    name: 'x-cursor',
    png: 'x-cursor.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: ['pirate', 'x_cursor']
  },
  {
    name: 'zoom-in',
    png: 'zoom-in.png',
    hotSpot: {
      x: 14,
      y: 14
    },
    symlink: ['zoom_in']
  },
  {
    name: 'zoom-out',
    png: 'zoom-out.png',
    hotSpot: {
      x: 14,
      y: 14
    },
    symlink: ['zoom_out']
  },
  {
    name: 'dotbox',
    png: 'dotbox.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: [
      'dot_box_mask',
      'draped_box',
      'icon',
      'target'
    ]
  },
  {
    name: 'cross',
    png: 'cross.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: ['cross_reverse', 'diamond_cross']
  },
  {
    name: 'crosshair',
    png: 'crosshair.png',
    hotSpot: {
      x: 16,
      y: 16
    }
  },
  {
    name: 'color-picker',
    png: 'color-picker.png',
    hotSpot: {
      x: 6,
      y: 26
    }
  },
  {
    name: 'not-allowed',
    png: 'not-allowed.png',
    hotSpot: {
      x: 16,
      y: 16
    }
  },
  {
    name: 'wayland-cursor',
    png: 'wayland-cursor.png',
    hotSpot: {
      x: 16,
      y: 16
    }
  },
  {
    name: 'top-tee',
    png: 'top-tee.png',
    hotSpot: {
      x: 16,
      y: 6
    }
  },
  {
    name: 'bottom-tee',
    png: 'bottom-tee.png',
    hotSpot: {
      x: 16,
      y: 25
    }
  },
  {
    name: 'right-tee',
    png: 'right-tee.png',
    hotSpot: {
      x: 27,
      y: 16
    }
  },
  {
    name: 'left-tee',
    png: 'left-tee.png',
    hotSpot: {
      x: 7,
      y: 16
    }
  },
  {
    name: 'left-angle',
    png: 'left-angle.png',
    hotSpot: {
      x: 7,
      y: 25
    },
    symlink: ['ll_angle', 'll-angle']
  },
  {
    name: 'right-angle',
    png: 'right-angle.png',
    hotSpot: {
      x: 25,
      y: 25
    },
    symlink: ['ur_angle', 'ur-angle']
  },
  {
    name: 'up-left-angle',
    png: 'up-left-angle.png',
    hotSpot: {
      x: 7,
      y: 6
    },
    symlink: ['ul_angle', 'ul-angle']
  },
  {
    name: 'up-right-angle',
    png: 'up-right-angle.png',
    hotSpot: {
      x: 26,
      y: 6
    },
    symlink: ['ur_angle', 'ur-angle']
  },
  {
    name: 'wait',
    png: 'wait.png',
    hotSpot: {
      x: 16,
      y: 16
    },
    symlink: ['watch']
  },
  {
    name: 'progress',
    png: 'progress.png',
    hotSpot: {
      x: 5,
      y: 9
    }
  }
];

export { cursorConfig };