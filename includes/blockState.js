/*
  MIT License

  Copyright (c) 2023 missing244

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/
// https://github.com/missing244/Command_Simulator

module.exports = {
  "minecraft:anvil": {
    "default": {
      "damage": "undamaged",
      "direction": 0
    },
    "support_value": {
      "damage": [
        "undamaged",
        "slightly_damaged",
        "very_damaged",
        "broken"
      ],
      "direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "damage": "undamaged",
      "direction": 0
    },
    "0b1": {
      "damage": "undamaged",
      "direction": 1
    },
    "0b10": {
      "damage": "undamaged",
      "direction": 2
    },
    "0b11": {
      "damage": "undamaged",
      "direction": 3
    },
    "0b100": {
      "damage": "slightly_damaged",
      "direction": 0
    },
    "0b101": {
      "damage": "slightly_damaged",
      "direction": 1
    },
    "0b110": {
      "damage": "slightly_damaged",
      "direction": 2
    },
    "0b111": {
      "damage": "slightly_damaged",
      "direction": 3
    },
    "0b1000": {
      "damage": "very_damaged",
      "direction": 0
    },
    "0b1001": {
      "damage": "very_damaged",
      "direction": 1
    },
    "0b1010": {
      "damage": "very_damaged",
      "direction": 2
    },
    "0b1011": {
      "damage": "very_damaged",
      "direction": 3
    },
    "0b1100": {
      "damage": "broken",
      "direction": 0
    },
    "0b1101": {
      "damage": "broken",
      "direction": 1
    },
    "0b1110": {
      "damage": "broken",
      "direction": 2
    },
    "0b1111": {
      "damage": "broken",
      "direction": 3
    }
  },
  "minecraft:small_amethyst_bud": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    }
  },
  "minecraft:medium_amethyst_bud": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    }
  },
  "minecraft:large_amethyst_bud": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    }
  },
  "minecraft:amethyst_cluster": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    }
  },
  "minecraft:bamboo": {
    "default": {
      "age_bit": false,
      "bamboo_leaf_size": "no_leaves",
      "bamboo_stalk_thickness": "thin"
    },
    "support_value": {
      "age_bit": [
        true,
        false
      ],
      "bamboo_leaf_size": [
        "no_leaves",
        "small_leaves",
        "large_leaves"
      ],
      "bamboo_stalk_thickness": [
        "thin",
        "thick"
      ]
    },
    "0b0": {
      "age_bit": false,
      "bamboo_leaf_size": "no_leaves",
      "bamboo_stalk_thickness": "thin"
    },
    "0b1": {
      "age_bit": false,
      "bamboo_leaf_size": "no_leaves",
      "bamboo_stalk_thickness": "thick"
    },
    "0b10": {
      "age_bit": false,
      "bamboo_leaf_size": "small_leaves",
      "bamboo_stalk_thickness": "thin"
    },
    "0b11": {
      "age_bit": false,
      "bamboo_leaf_size": "small_leaves",
      "bamboo_stalk_thickness": "thick"
    },
    "0b100": {
      "age_bit": false,
      "bamboo_leaf_size": "large_leaves",
      "bamboo_stalk_thickness": "thin"
    },
    "0b101": {
      "age_bit": false,
      "bamboo_leaf_size": "large_leaves",
      "bamboo_stalk_thickness": "thick"
    },
    "0b1000": {
      "age_bit": true,
      "bamboo_leaf_size": "no_leaves",
      "bamboo_stalk_thickness": "thin"
    },
    "0b1001": {
      "age_bit": true,
      "bamboo_leaf_size": "no_leaves",
      "bamboo_stalk_thickness": "thick"
    },
    "0b1010": {
      "age_bit": true,
      "bamboo_leaf_size": "small_leaves",
      "bamboo_stalk_thickness": "thin"
    },
    "0b1011": {
      "age_bit": true,
      "bamboo_leaf_size": "small_leaves",
      "bamboo_stalk_thickness": "thick"
    },
    "0b1100": {
      "age_bit": true,
      "bamboo_leaf_size": "large_leaves",
      "bamboo_stalk_thickness": "thin"
    },
    "0b1101": {
      "age_bit": true,
      "bamboo_leaf_size": "large_leaves",
      "bamboo_stalk_thickness": "thick"
    }
  },
  "minecraft:bamboo_sapling": {
    "default": {
      "age_bit": false
    },
    "support_value": {
      "age_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "age_bit": false
    },
    "0b1": {
      "age_bit": true
    }
  },
  "minecraft:standing_banner": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    },
    "0b1": {
      "ground_sign_direction": 1
    },
    "0b10": {
      "ground_sign_direction": 2
    },
    "0b11": {
      "ground_sign_direction": 3
    },
    "0b100": {
      "ground_sign_direction": 4
    },
    "0b101": {
      "ground_sign_direction": 5
    },
    "0b110": {
      "ground_sign_direction": 6
    },
    "0b111": {
      "ground_sign_direction": 7
    },
    "0b1000": {
      "ground_sign_direction": 8
    },
    "0b1001": {
      "ground_sign_direction": 9
    },
    "0b1010": {
      "ground_sign_direction": 10
    },
    "0b1011": {
      "ground_sign_direction": 11
    },
    "0b1100": {
      "ground_sign_direction": 12
    },
    "0b1101": {
      "ground_sign_direction": 13
    },
    "0b1110": {
      "ground_sign_direction": 14
    },
    "0b1111": {
      "ground_sign_direction": 15
    }
  },
  "minecraft:wall_banner": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:barrel": {
    "default": {
      "facing_direction": 0,
      "open_bit": false
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "open_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "open_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "open_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "open_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "open_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "open_bit": false,
      "facing_direction": 5
    }
  },
  "minecraft:basalt": {
    "default": {
      "pillar_axis": "x"
    },
    "support_value": {
      "pillar_axis": [
        "x",
        "y",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:polished_basalt": {
    "default": {
      "pillar_axis": "x"
    },
    "support_value": {
      "pillar_axis": [
        "x",
        "y",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:bed": {
    "default": {
      "direction": 0,
      "head_piece_bit": true,
      "occupied_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "head_piece_bit": [
        true,
        false
      ],
      "occupied_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "head_piece_bit": false,
      "occupied_bit": false
    },
    "0b1": {
      "direction": 1,
      "head_piece_bit": false,
      "occupied_bit": false
    },
    "0b10": {
      "direction": 2,
      "head_piece_bit": false,
      "occupied_bit": false
    },
    "0b11": {
      "direction": 3,
      "head_piece_bit": false,
      "occupied_bit": false
    },
    "0b100": {
      "direction": 0,
      "head_piece_bit": true,
      "occupied_bit": false
    },
    "0b101": {
      "direction": 1,
      "head_piece_bit": true,
      "occupied_bit": false
    },
    "0b110": {
      "direction": 2,
      "head_piece_bit": true,
      "occupied_bit": false
    },
    "0b111": {
      "direction": 3,
      "head_piece_bit": true,
      "occupied_bit": false
    },
    "0b1000": {
      "direction": 0,
      "head_piece_bit": false,
      "occupied_bit": true
    },
    "0b1001": {
      "direction": 1,
      "head_piece_bit": false,
      "occupied_bit": true
    },
    "0b1010": {
      "direction": 2,
      "head_piece_bit": false,
      "occupied_bit": true
    },
    "0b1011": {
      "direction": 3,
      "head_piece_bit": false,
      "occupied_bit": true
    },
    "0b1100": {
      "direction": 0,
      "head_piece_bit": true,
      "occupied_bit": true
    },
    "0b1101": {
      "direction": 1,
      "head_piece_bit": true,
      "occupied_bit": true
    },
    "0b1110": {
      "direction": 2,
      "head_piece_bit": true,
      "occupied_bit": true
    },
    "0b1111": {
      "direction": 3,
      "head_piece_bit": true,
      "occupied_bit": true
    }
  },
  "minecraft:bedrock": {
    "default": {
      "infiniburn_bit": false
    },
    "support_value": {
      "infiniburn_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "infiniburn_bit": false
    },
    "0b1": {
      "infiniburn_bit": true
    }
  },
  "minecraft:bee_nest": {
    "default": {
      "direction": 0,
      "honey_level": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "honey_level": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "direction": 0,
      "honey_level": 0
    }
  },
  "minecraft:beehive": {
    "default": {
      "direction": 0,
      "honey_level": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "honey_level": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "direction": 0,
      "honey_level": 0
    }
  },
  "minecraft:beetroot": {
    "default": {
      "growth": 0
    },
    "support_value": {
      "growth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    },
    "0b0": {
      "growth": 0
    },
    "0b1": {
      "growth": 1
    },
    "0b10": {
      "growth": 2
    },
    "0b11": {
      "growth": 3
    },
    "0b100": {
      "growth": 4
    },
    "0b101": {
      "growth": 5
    },
    "0b110": {
      "growth": 6
    },
    "0b111": {
      "growth": 7
    }
  },
  "minecraft:bell": {
    "default": {
      "direction": 0,
      "attachment": "standing",
      "toggle_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "attachment": [
        "standing",
        "hanging",
        "side",
        "multiple"
      ],
      "toggle_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "attachment": false,
      "toggle_bit": false
    },
    "0b1": {
      "direction": 1,
      "attachment": false,
      "toggle_bit": false
    },
    "0b10": {
      "direction": 2,
      "attachment": false,
      "toggle_bit": false
    },
    "0b11": {
      "direction": 3,
      "attachment": false,
      "toggle_bit": false
    },
    "0b100": {
      "direction": 0,
      "attachment": true,
      "toggle_bit": false
    },
    "0b101": {
      "direction": 1,
      "attachment": true,
      "toggle_bit": false
    },
    "0b110": {
      "direction": 2,
      "attachment": true,
      "toggle_bit": false
    },
    "0b111": {
      "direction": 3,
      "attachment": true,
      "toggle_bit": false
    },
    "0b1000": {
      "direction": 0,
      "attachment": false,
      "toggle_bit": false
    },
    "0b1001": {
      "direction": 1,
      "attachment": false,
      "toggle_bit": false
    },
    "0b1010": {
      "direction": 2,
      "attachment": false,
      "toggle_bit": false
    },
    "0b1011": {
      "direction": 3,
      "attachment": false,
      "toggle_bit": false
    },
    "0b1100": {
      "direction": 0,
      "attachment": true,
      "toggle_bit": false
    },
    "0b1101": {
      "direction": 1,
      "attachment": true,
      "toggle_bit": false
    },
    "0b1110": {
      "direction": 2,
      "attachment": true,
      "toggle_bit": false
    },
    "0b1111": {
      "direction": 3,
      "attachment": true,
      "toggle_bit": false
    },
    "0b10000": {
      "direction": 0,
      "attachment": false,
      "toggle_bit": true
    },
    "0b10001": {
      "direction": 1,
      "attachment": false,
      "toggle_bit": true
    },
    "0b10010": {
      "direction": 2,
      "attachment": false,
      "toggle_bit": true
    },
    "0b10011": {
      "direction": 3,
      "attachment": false,
      "toggle_bit": true
    },
    "0b10100": {
      "direction": 0,
      "attachment": true,
      "toggle_bit": true
    },
    "0b10101": {
      "direction": 1,
      "attachment": true,
      "toggle_bit": true
    },
    "0b10110": {
      "direction": 2,
      "attachment": true,
      "toggle_bit": true
    },
    "0b10111": {
      "direction": 3,
      "attachment": true,
      "toggle_bit": true
    },
    "0b11000": {
      "direction": 0,
      "attachment": false,
      "toggle_bit": true
    },
    "0b11001": {
      "direction": 1,
      "attachment": false,
      "toggle_bit": true
    },
    "0b11010": {
      "direction": 2,
      "attachment": false,
      "toggle_bit": true
    },
    "0b11011": {
      "direction": 3,
      "attachment": false,
      "toggle_bit": true
    },
    "0b11100": {
      "direction": 0,
      "attachment": true,
      "toggle_bit": true
    },
    "0b11101": {
      "direction": 1,
      "attachment": true,
      "toggle_bit": true
    },
    "0b11110": {
      "direction": 2,
      "attachment": true,
      "toggle_bit": true
    },
    "0b11111": {
      "direction": 3,
      "attachment": true,
      "toggle_bit": true
    }
  },
  "minecraft:big_dripleaf": {
    "default": {
      "big_dripleaf_head": 1,
      "big_dripleaf_tilt": "none",
      "direction": 0
    },
    "support_value": {
      "big_dripleaf_head": [
        1,
        0
      ],
      "big_dripleaf_tilt": [
        "none",
        "unstable",
        "partial_tilt",
        "full_tilt"
      ],
      "direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "big_dripleaf_head": 1,
      "big_dripleaf_tilt": "none",
      "direction": 0
    }
  },
  "minecraft:blast_furnace": {
    "default": {
      "facing_direction": 3
    },
    "support_value": {
      "facing_direction": [
        3,
        0,
        1,
        2,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:lit_blast_furnace": {
    "default": {
      "facing_direction": 3
    },
    "support_value": {
      "facing_direction": [
        3,
        0,
        1,
        2,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:bone_block": {
    "default": {
      "pillar_axis": "y",
      "deprecated": 0
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ],
      "deprecated": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "deprecated": 0,
      "pillar_axis": "y"
    },
    "0b1": {
      "deprecated": 1,
      "pillar_axis": "y"
    },
    "0b10": {
      "deprecated": 2,
      "pillar_axis": "y"
    },
    "0b11": {
      "deprecated": 3,
      "pillar_axis": "y"
    },
    "0b100": {
      "deprecated": 0,
      "pillar_axis": "x"
    },
    "0b101": {
      "deprecated": 1,
      "pillar_axis": "x"
    },
    "0b110": {
      "deprecated": 2,
      "pillar_axis": "x"
    },
    "0b111": {
      "deprecated": 3,
      "pillar_axis": "x"
    },
    "0b1000": {
      "deprecated": 0,
      "pillar_axis": "z"
    },
    "0b1001": {
      "deprecated": 1,
      "pillar_axis": "z"
    },
    "0b1010": {
      "deprecated": 2,
      "pillar_axis": "z"
    },
    "0b1011": {
      "deprecated": 3,
      "pillar_axis": "z"
    }
  },
  "minecraft:border_block": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:brewing_stand": {
    "default": {
      "brewing_stand_slot_a_bit": false,
      "brewing_stand_slot_b_bit": false,
      "brewing_stand_slot_c_bit": false
    },
    "support_value": {
      "brewing_stand_slot_a_bit": [
        false,
        true
      ],
      "brewing_stand_slot_b_bit": [
        false,
        true
      ],
      "brewing_stand_slot_c_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "brewing_stand_slot_a_bit": false,
      "brewing_stand_slot_b_bit": false,
      "brewing_stand_slot_c_bit": false
    },
    "0b1": {
      "brewing_stand_slot_a_bit": true,
      "brewing_stand_slot_b_bit": false,
      "brewing_stand_slot_c_bit": false
    },
    "0b10": {
      "brewing_stand_slot_a_bit": false,
      "brewing_stand_slot_b_bit": true,
      "brewing_stand_slot_c_bit": false
    },
    "0b11": {
      "brewing_stand_slot_a_bit": true,
      "brewing_stand_slot_b_bit": true,
      "brewing_stand_slot_c_bit": false
    },
    "0b100": {
      "brewing_stand_slot_a_bit": false,
      "brewing_stand_slot_b_bit": false,
      "brewing_stand_slot_c_bit": true
    },
    "0b101": {
      "brewing_stand_slot_a_bit": true,
      "brewing_stand_slot_b_bit": false,
      "brewing_stand_slot_c_bit": true
    },
    "0b110": {
      "brewing_stand_slot_a_bit": false,
      "brewing_stand_slot_b_bit": true,
      "brewing_stand_slot_c_bit": true
    },
    "0b111": {
      "brewing_stand_slot_a_bit": true,
      "brewing_stand_slot_b_bit": true,
      "brewing_stand_slot_c_bit": true
    }
  },
  "minecraft:bubble_column": {
    "default": {
      "drag_down": false
    },
    "support_value": {
      "drag_down": [
        false,
        true
      ]
    },
    "0b0": {
      "drag_down": false
    },
    "0b1": {
      "drag_down": true
    }
  },
  "minecraft:stone_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:wooden_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:spruce_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:birch_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:jungle_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:acacia_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:dark_oak_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:crimson_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:warped_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:polished_blackstone_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:mangrove_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:cactus": {
    "default": {
      "age": 0
    },
    "support_value": {
      "age": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "age": 0
    },
    "0b1": {
      "age": 1
    },
    "0b10": {
      "age": 2
    },
    "0b11": {
      "age": 3
    },
    "0b100": {
      "age": 4
    },
    "0b101": {
      "age": 5
    },
    "0b110": {
      "age": 6
    },
    "0b111": {
      "age": 7
    },
    "0b1000": {
      "age": 8
    },
    "0b1001": {
      "age": 9
    },
    "0b1010": {
      "age": 10
    },
    "0b1011": {
      "age": 11
    },
    "0b1100": {
      "age": 12
    },
    "0b1101": {
      "age": 13
    },
    "0b1110": {
      "age": 14
    },
    "0b1111": {
      "age": 15
    }
  },
  "minecraft:cake": {
    "default": {
      "bite_counter": 0
    },
    "support_value": {
      "bite_counter": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ]
    },
    "0b0": {
      "bite_counter": 0
    },
    "0b1": {
      "bite_counter": 1
    },
    "0b10": {
      "bite_counter": 2
    },
    "0b11": {
      "bite_counter": 3
    },
    "0b100": {
      "bite_counter": 4
    },
    "0b101": {
      "bite_counter": 5
    },
    "0b110": {
      "bite_counter": 6
    }
  },
  "minecraft:candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:white_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:orange_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:magenta_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:light_blue_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:yellow_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:lime_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:pink_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:gray_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:light_gray_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:cyan_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:purple_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:blue_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:brown_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:green_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:red_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:black_candle_cake": {
    "default": {
      "lit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false
    },
    "0b1": {
      "lit": true
    }
  },
  "minecraft:campfire": {
    "default": {
      "direction": 0,
      "extinguished": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "extinguished": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "extinguished": false
    },
    "0b1": {
      "direction": 1,
      "extinguished": false
    },
    "0b10": {
      "direction": 2,
      "extinguished": false
    },
    "0b11": {
      "direction": 3,
      "extinguished": false
    },
    "0b100": {
      "direction": 0,
      "extinguished": true
    },
    "0b101": {
      "direction": 1,
      "extinguished": true
    },
    "0b110": {
      "direction": 2,
      "extinguished": true
    },
    "0b111": {
      "direction": 3,
      "extinguished": true
    }
  },
  "minecraft:soul_campfire": {
    "default": {
      "direction": 0,
      "extinguished": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "extinguished": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "extinguished": false
    },
    "0b1": {
      "direction": 1,
      "extinguished": false
    },
    "0b10": {
      "direction": 2,
      "extinguished": false
    },
    "0b11": {
      "direction": 3,
      "extinguished": false
    },
    "0b100": {
      "direction": 0,
      "extinguished": true
    },
    "0b101": {
      "direction": 1,
      "extinguished": true
    },
    "0b110": {
      "direction": 2,
      "extinguished": true
    },
    "0b111": {
      "direction": 3,
      "extinguished": true
    }
  },
  "minecraft:candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:white_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:orange_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:magenta_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:light_blue_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:yellow_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:lime_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:pink_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:gray_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:light_gray_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:cyan_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:purple_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:blue_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:brown_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:green_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:red_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:black_candle": {
    "default": {
      "candles": 0,
      "lit": false
    },
    "support_value": {
      "candles": [
        0,
        1,
        2,
        3
      ],
      "lit": [
        false,
        true
      ]
    },
    "0b0": {
      "candles": 0,
      "lit": false
    },
    "0b1": {
      "candles": 1,
      "lit": false
    },
    "0b10": {
      "candles": 2,
      "lit": false
    },
    "0b11": {
      "candles": 3,
      "lit": false
    },
    "0b100": {
      "candles": 0,
      "lit": true
    },
    "0b101": {
      "candles": 1,
      "lit": true
    },
    "0b110": {
      "candles": 2,
      "lit": true
    },
    "0b111": {
      "candles": 3,
      "lit": true
    }
  },
  "minecraft:carpet": {
    "default": {
      "color": "white"
    },
    "support_value": {
      "color": [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "silver",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
      ]
    },
    "0b0": {
      "color": "white"
    },
    "0b1": {
      "color": "orange"
    },
    "0b10": {
      "color": "magenta"
    },
    "0b11": {
      "color": "light_blue"
    },
    "0b100": {
      "color": "yellow"
    },
    "0b101": {
      "color": "lime"
    },
    "0b110": {
      "color": "pink"
    },
    "0b111": {
      "color": "gray"
    },
    "0b1000": {
      "color": "silver"
    },
    "0b1001": {
      "color": "cyan"
    },
    "0b1010": {
      "color": "purple"
    },
    "0b1011": {
      "color": "blue"
    },
    "0b1100": {
      "color": "brown"
    },
    "0b1101": {
      "color": "green"
    },
    "0b1110": {
      "color": "red"
    },
    "0b1111": {
      "color": "black"
    }
  },
  "minecraft:concrete": {
    "default": {
      "color": "white"
    },
    "support_value": {
      "color": [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "silver",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
      ]
    },
    "0b0": {
      "color": "white"
    },
    "0b1": {
      "color": "orange"
    },
    "0b10": {
      "color": "magenta"
    },
    "0b11": {
      "color": "light_blue"
    },
    "0b100": {
      "color": "yellow"
    },
    "0b101": {
      "color": "lime"
    },
    "0b110": {
      "color": "pink"
    },
    "0b111": {
      "color": "gray"
    },
    "0b1000": {
      "color": "silver"
    },
    "0b1001": {
      "color": "cyan"
    },
    "0b1010": {
      "color": "purple"
    },
    "0b1011": {
      "color": "blue"
    },
    "0b1100": {
      "color": "brown"
    },
    "0b1101": {
      "color": "green"
    },
    "0b1110": {
      "color": "red"
    },
    "0b1111": {
      "color": "black"
    }
  },
  "minecraft:concrete_powder": {
    "default": {
      "color": "white"
    },
    "support_value": {
      "color": [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "silver",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
      ]
    },
    "0b0": {
      "color": "white"
    },
    "0b1": {
      "color": "orange"
    },
    "0b10": {
      "color": "magenta"
    },
    "0b11": {
      "color": "light_blue"
    },
    "0b100": {
      "color": "yellow"
    },
    "0b101": {
      "color": "lime"
    },
    "0b110": {
      "color": "pink"
    },
    "0b111": {
      "color": "gray"
    },
    "0b1000": {
      "color": "silver"
    },
    "0b1001": {
      "color": "cyan"
    },
    "0b1010": {
      "color": "purple"
    },
    "0b1011": {
      "color": "blue"
    },
    "0b1100": {
      "color": "brown"
    },
    "0b1101": {
      "color": "green"
    },
    "0b1110": {
      "color": "red"
    },
    "0b1111": {
      "color": "black"
    }
  },
  "minecraft:stained_glass": {
    "default": {
      "color": "white"
    },
    "support_value": {
      "color": [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "silver",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
      ]
    },
    "0b0": {
      "color": "white"
    },
    "0b1": {
      "color": "orange"
    },
    "0b10": {
      "color": "magenta"
    },
    "0b11": {
      "color": "light_blue"
    },
    "0b100": {
      "color": "yellow"
    },
    "0b101": {
      "color": "lime"
    },
    "0b110": {
      "color": "pink"
    },
    "0b111": {
      "color": "gray"
    },
    "0b1000": {
      "color": "silver"
    },
    "0b1001": {
      "color": "cyan"
    },
    "0b1010": {
      "color": "purple"
    },
    "0b1011": {
      "color": "blue"
    },
    "0b1100": {
      "color": "brown"
    },
    "0b1101": {
      "color": "green"
    },
    "0b1110": {
      "color": "red"
    },
    "0b1111": {
      "color": "black"
    }
  },
  "minecraft:stained_glass_pane": {
    "default": {
      "color": "white"
    },
    "support_value": {
      "color": [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "silver",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
      ]
    },
    "0b0": {
      "color": "white"
    },
    "0b1": {
      "color": "orange"
    },
    "0b10": {
      "color": "magenta"
    },
    "0b11": {
      "color": "light_blue"
    },
    "0b100": {
      "color": "yellow"
    },
    "0b101": {
      "color": "lime"
    },
    "0b110": {
      "color": "pink"
    },
    "0b111": {
      "color": "gray"
    },
    "0b1000": {
      "color": "silver"
    },
    "0b1001": {
      "color": "cyan"
    },
    "0b1010": {
      "color": "purple"
    },
    "0b1011": {
      "color": "blue"
    },
    "0b1100": {
      "color": "brown"
    },
    "0b1101": {
      "color": "green"
    },
    "0b1110": {
      "color": "red"
    },
    "0b1111": {
      "color": "black"
    }
  },
  "minecraft:wool": {
    "default": {
      "color": "white"
    },
    "support_value": {
      "color": [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "silver",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
      ]
    },
    "0b0": {
      "color": "white"
    },
    "0b1": {
      "color": "orange"
    },
    "0b10": {
      "color": "magenta"
    },
    "0b11": {
      "color": "light_blue"
    },
    "0b100": {
      "color": "yellow"
    },
    "0b101": {
      "color": "lime"
    },
    "0b110": {
      "color": "pink"
    },
    "0b111": {
      "color": "gray"
    },
    "0b1000": {
      "color": "silver"
    },
    "0b1001": {
      "color": "cyan"
    },
    "0b1010": {
      "color": "purple"
    },
    "0b1011": {
      "color": "blue"
    },
    "0b1100": {
      "color": "brown"
    },
    "0b1101": {
      "color": "green"
    },
    "0b1110": {
      "color": "red"
    },
    "0b1111": {
      "color": "black"
    }
  },
  "minecraft:shulker_box": {
    "default": {
      "color": "white"
    },
    "support_value": {
      "color": [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "silver",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
      ]
    },
    "0b0": {
      "color": "white"
    },
    "0b1": {
      "color": "orange"
    },
    "0b10": {
      "color": "magenta"
    },
    "0b11": {
      "color": "light_blue"
    },
    "0b100": {
      "color": "yellow"
    },
    "0b101": {
      "color": "lime"
    },
    "0b110": {
      "color": "pink"
    },
    "0b111": {
      "color": "gray"
    },
    "0b1000": {
      "color": "silver"
    },
    "0b1001": {
      "color": "cyan"
    },
    "0b1010": {
      "color": "purple"
    },
    "0b1011": {
      "color": "blue"
    },
    "0b1100": {
      "color": "brown"
    },
    "0b1101": {
      "color": "green"
    },
    "0b1110": {
      "color": "red"
    },
    "0b1111": {
      "color": "black"
    }
  },
  "minecraft:stained_hardened_clay": {
    "default": {
      "color": "white"
    },
    "support_value": {
      "color": [
        "white",
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "gray",
        "silver",
        "cyan",
        "purple",
        "blue",
        "brown",
        "green",
        "red",
        "black"
      ]
    },
    "0b0": {
      "color": "white"
    },
    "0b1": {
      "color": "orange"
    },
    "0b10": {
      "color": "magenta"
    },
    "0b11": {
      "color": "light_blue"
    },
    "0b100": {
      "color": "yellow"
    },
    "0b101": {
      "color": "lime"
    },
    "0b110": {
      "color": "pink"
    },
    "0b111": {
      "color": "gray"
    },
    "0b1000": {
      "color": "silver"
    },
    "0b1001": {
      "color": "cyan"
    },
    "0b1010": {
      "color": "purple"
    },
    "0b1011": {
      "color": "blue"
    },
    "0b1100": {
      "color": "brown"
    },
    "0b1101": {
      "color": "green"
    },
    "0b1110": {
      "color": "red"
    },
    "0b1111": {
      "color": "black"
    }
  },
  "minecraft:carrots": {
    "default": {
      "growth": 0
    },
    "support_value": {
      "growth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    },
    "0b0": {
      "growth": 0
    },
    "0b1": {
      "growth": 1
    },
    "0b10": {
      "growth": 2
    },
    "0b11": {
      "growth": 3
    },
    "0b100": {
      "growth": 4
    },
    "0b101": {
      "growth": 5
    },
    "0b110": {
      "growth": 6
    },
    "0b111": {
      "growth": 7
    }
  },
  "minecraft:potatoes": {
    "default": {
      "growth": 0
    },
    "support_value": {
      "growth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    },
    "0b0": {
      "growth": 0
    },
    "0b1": {
      "growth": 1
    },
    "0b10": {
      "growth": 2
    },
    "0b11": {
      "growth": 3
    },
    "0b100": {
      "growth": 4
    },
    "0b101": {
      "growth": 5
    },
    "0b110": {
      "growth": 6
    },
    "0b111": {
      "growth": 7
    }
  },
  "minecraft:sweet_berry_bush": {
    "default": {
      "growth": 0
    },
    "support_value": {
      "growth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    },
    "0b0": {
      "growth": 0
    },
    "0b1": {
      "growth": 1
    },
    "0b10": {
      "growth": 2
    },
    "0b11": {
      "growth": 3
    },
    "0b100": {
      "growth": 4
    },
    "0b101": {
      "growth": 5
    },
    "0b110": {
      "growth": 6
    },
    "0b111": {
      "growth": 7
    }
  },
  "minecraft:wheat": {
    "default": {
      "growth": 0
    },
    "support_value": {
      "growth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    },
    "0b0": {
      "growth": 0
    },
    "0b1": {
      "growth": 1
    },
    "0b10": {
      "growth": 2
    },
    "0b11": {
      "growth": 3
    },
    "0b100": {
      "growth": 4
    },
    "0b101": {
      "growth": 5
    },
    "0b110": {
      "growth": 6
    },
    "0b111": {
      "growth": 7
    }
  },
  "minecraft:cauldron": {
    "default": {
      "fill_level": 0,
      "cauldron_liquid": "water"
    },
    "support_value": {
      "fill_level": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "cauldron_liquid": [
        "water",
        "lava",
        "powder_snow"
      ]
    },
    "0b0": {
      "fill_level": 0,
      "cauldron_liquid": "water"
    },
    "0b1": {
      "fill_level": 1,
      "cauldron_liquid": "water"
    },
    "0b10": {
      "fill_level": 2,
      "cauldron_liquid": "water"
    },
    "0b11": {
      "fill_level": 3,
      "cauldron_liquid": "water"
    },
    "0b100": {
      "fill_level": 4,
      "cauldron_liquid": "water"
    },
    "0b101": {
      "fill_level": 5,
      "cauldron_liquid": "water"
    },
    "0b110": {
      "fill_level": 6,
      "cauldron_liquid": "water"
    },
    "0b1000": {
      "fill_level": 0,
      "cauldron_liquid": "lava"
    },
    "0b1001": {
      "fill_level": 1,
      "cauldron_liquid": "lava"
    },
    "0b1010": {
      "fill_level": 2,
      "cauldron_liquid": "lava"
    },
    "0b1011": {
      "fill_level": 3,
      "cauldron_liquid": "lava"
    },
    "0b1100": {
      "fill_level": 4,
      "cauldron_liquid": "lava"
    },
    "0b1101": {
      "fill_level": 5,
      "cauldron_liquid": "lava"
    },
    "0b1110": {
      "fill_level": 6,
      "cauldron_liquid": "lava"
    }
  },
  "minecraft:lava_cauldron": {
    "default": {
      "fill_level": 0,
      "cauldron_liquid": "water"
    },
    "support_value": {
      "fill_level": [
        0,
        1,
        2,
        3,
        4,
        5,
        6
      ],
      "cauldron_liquid": [
        "water",
        "lava",
        "powder_snow"
      ]
    },
    "0b0": {
      "fill_level": 0,
      "cauldron_liquid": "water"
    },
    "0b1": {
      "fill_level": 1,
      "cauldron_liquid": "water"
    },
    "0b10": {
      "fill_level": 2,
      "cauldron_liquid": "water"
    },
    "0b11": {
      "fill_level": 3,
      "cauldron_liquid": "water"
    },
    "0b100": {
      "fill_level": 4,
      "cauldron_liquid": "water"
    },
    "0b101": {
      "fill_level": 5,
      "cauldron_liquid": "water"
    },
    "0b110": {
      "fill_level": 6,
      "cauldron_liquid": "water"
    },
    "0b1000": {
      "fill_level": 0,
      "cauldron_liquid": "lava"
    },
    "0b1001": {
      "fill_level": 1,
      "cauldron_liquid": "lava"
    },
    "0b1010": {
      "fill_level": 2,
      "cauldron_liquid": "lava"
    },
    "0b1011": {
      "fill_level": 3,
      "cauldron_liquid": "lava"
    },
    "0b1100": {
      "fill_level": 4,
      "cauldron_liquid": "lava"
    },
    "0b1101": {
      "fill_level": 5,
      "cauldron_liquid": "lava"
    },
    "0b1110": {
      "fill_level": 6,
      "cauldron_liquid": "lava"
    }
  },
  "minecraft:cave_vines": {
    "default": {
      "growing_plant_age": 0
    },
    "support_value": {
      "growing_plant_age": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
      ]
    },
    "0b0": {
      "growing_plant_age": 0
    },
    "0b1": {
      "growing_plant_age": 0
    },
    "0b10": {
      "growing_plant_age": 0
    },
    "0b11": {
      "growing_plant_age": 0
    },
    "0b100": {
      "growing_plant_age": 0
    },
    "0b101": {
      "growing_plant_age": 0
    },
    "0b110": {
      "growing_plant_age": 0
    },
    "0b111": {
      "growing_plant_age": 0
    },
    "0b1000": {
      "growing_plant_age": 0
    },
    "0b1001": {
      "growing_plant_age": 0
    },
    "0b1010": {
      "growing_plant_age": 0
    },
    "0b1011": {
      "growing_plant_age": 0
    },
    "0b1100": {
      "growing_plant_age": 0
    },
    "0b1101": {
      "growing_plant_age": 0
    },
    "0b1110": {
      "growing_plant_age": 0
    },
    "0b1111": {
      "growing_plant_age": 0
    },
    "0b10000": {
      "growing_plant_age": 0
    },
    "0b10001": {
      "growing_plant_age": 0
    },
    "0b10010": {
      "growing_plant_age": 0
    },
    "0b10011": {
      "growing_plant_age": 0
    },
    "0b10100": {
      "growing_plant_age": 0
    },
    "0b10101": {
      "growing_plant_age": 0
    },
    "0b10110": {
      "growing_plant_age": 0
    },
    "0b10111": {
      "growing_plant_age": 0
    },
    "0b11000": {
      "growing_plant_age": 0
    },
    "0b11001": {
      "growing_plant_age": 0
    },
    "0b11010": {
      "growing_plant_age": 0
    },
    "0b11011": {
      "growing_plant_age": 0
    },
    "0b11100": {
      "growing_plant_age": 0
    },
    "0b11101": {
      "growing_plant_age": 0
    },
    "0b11110": {
      "growing_plant_age": 0
    },
    "0b11111": {
      "growing_plant_age": 0
    }
  },
  "minecraft:cave_vines_body_with_berries": {
    "default": {
      "growing_plant_age": 0
    },
    "support_value": {
      "growing_plant_age": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
      ]
    },
    "0b0": {
      "growing_plant_age": 0
    },
    "0b1": {
      "growing_plant_age": 0
    },
    "0b10": {
      "growing_plant_age": 0
    },
    "0b11": {
      "growing_plant_age": 0
    },
    "0b100": {
      "growing_plant_age": 0
    },
    "0b101": {
      "growing_plant_age": 0
    },
    "0b110": {
      "growing_plant_age": 0
    },
    "0b111": {
      "growing_plant_age": 0
    },
    "0b1000": {
      "growing_plant_age": 0
    },
    "0b1001": {
      "growing_plant_age": 0
    },
    "0b1010": {
      "growing_plant_age": 0
    },
    "0b1011": {
      "growing_plant_age": 0
    },
    "0b1100": {
      "growing_plant_age": 0
    },
    "0b1101": {
      "growing_plant_age": 0
    },
    "0b1110": {
      "growing_plant_age": 0
    },
    "0b1111": {
      "growing_plant_age": 0
    },
    "0b10000": {
      "growing_plant_age": 0
    },
    "0b10001": {
      "growing_plant_age": 0
    },
    "0b10010": {
      "growing_plant_age": 0
    },
    "0b10011": {
      "growing_plant_age": 0
    },
    "0b10100": {
      "growing_plant_age": 0
    },
    "0b10101": {
      "growing_plant_age": 0
    },
    "0b10110": {
      "growing_plant_age": 0
    },
    "0b10111": {
      "growing_plant_age": 0
    },
    "0b11000": {
      "growing_plant_age": 0
    },
    "0b11001": {
      "growing_plant_age": 0
    },
    "0b11010": {
      "growing_plant_age": 0
    },
    "0b11011": {
      "growing_plant_age": 0
    },
    "0b11100": {
      "growing_plant_age": 0
    },
    "0b11101": {
      "growing_plant_age": 0
    },
    "0b11110": {
      "growing_plant_age": 0
    },
    "0b11111": {
      "growing_plant_age": 0
    }
  },
  "minecraft:cave_vines_head_with_berries": {
    "default": {
      "growing_plant_age": 0
    },
    "support_value": {
      "growing_plant_age": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
      ]
    },
    "0b0": {
      "growing_plant_age": 0
    },
    "0b1": {
      "growing_plant_age": 0
    },
    "0b10": {
      "growing_plant_age": 0
    },
    "0b11": {
      "growing_plant_age": 0
    },
    "0b100": {
      "growing_plant_age": 0
    },
    "0b101": {
      "growing_plant_age": 0
    },
    "0b110": {
      "growing_plant_age": 0
    },
    "0b111": {
      "growing_plant_age": 0
    },
    "0b1000": {
      "growing_plant_age": 0
    },
    "0b1001": {
      "growing_plant_age": 0
    },
    "0b1010": {
      "growing_plant_age": 0
    },
    "0b1011": {
      "growing_plant_age": 0
    },
    "0b1100": {
      "growing_plant_age": 0
    },
    "0b1101": {
      "growing_plant_age": 0
    },
    "0b1110": {
      "growing_plant_age": 0
    },
    "0b1111": {
      "growing_plant_age": 0
    },
    "0b10000": {
      "growing_plant_age": 0
    },
    "0b10001": {
      "growing_plant_age": 0
    },
    "0b10010": {
      "growing_plant_age": 0
    },
    "0b10011": {
      "growing_plant_age": 0
    },
    "0b10100": {
      "growing_plant_age": 0
    },
    "0b10101": {
      "growing_plant_age": 0
    },
    "0b10110": {
      "growing_plant_age": 0
    },
    "0b10111": {
      "growing_plant_age": 0
    },
    "0b11000": {
      "growing_plant_age": 0
    },
    "0b11001": {
      "growing_plant_age": 0
    },
    "0b11010": {
      "growing_plant_age": 0
    },
    "0b11011": {
      "growing_plant_age": 0
    },
    "0b11100": {
      "growing_plant_age": 0
    },
    "0b11101": {
      "growing_plant_age": 0
    },
    "0b11110": {
      "growing_plant_age": 0
    },
    "0b11111": {
      "growing_plant_age": 0
    }
  },
  "minecraft:chain": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:pearlescent_froglight": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:verdant_froglight": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:ochre_froglight": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:warped_hyphae": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:stripped_crimson_hyphae": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:stripped_warped_hyphae": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:chest": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:trapped_chest": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:ender_chest": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:chorus_flower": {
    "default": {
      "age": 0
    },
    "support_value": {
      "age": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "age": 0
    },
    "0b1": {
      "age": 1
    },
    "0b10": {
      "age": 2
    },
    "0b11": {
      "age": 3
    },
    "0b100": {
      "age": 4
    },
    "0b101": {
      "age": 5
    }
  },
  "minecraft:cocoa": {
    "default": {
      "direction": 0,
      "age": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "age": [
        0,
        1,
        2
      ]
    },
    "0b0": {
      "direction": 0,
      "age": 0
    },
    "0b1": {
      "direction": 1,
      "age": 0
    },
    "0b10": {
      "direction": 2,
      "age": 0
    },
    "0b11": {
      "direction": 3,
      "age": 0
    },
    "0b100": {
      "direction": 0,
      "age": 1
    },
    "0b101": {
      "direction": 1,
      "age": 1
    },
    "0b110": {
      "direction": 2,
      "age": 1
    },
    "0b111": {
      "direction": 3,
      "age": 1
    },
    "0b1000": {
      "direction": 0,
      "age": 2
    },
    "0b1001": {
      "direction": 1,
      "age": 2
    },
    "0b1010": {
      "direction": 2,
      "age": 2
    },
    "0b1011": {
      "direction": 3,
      "age": 2
    }
  },
  "minecraft:command_block": {
    "default": {
      "facing_direction": 0,
      "conditional_bit": false
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "conditional_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "conditional_bit": false
    },
    "0b1": {
      "facing_direction": 1,
      "conditional_bit": false
    },
    "0b10": {
      "facing_direction": 2,
      "conditional_bit": false
    },
    "0b11": {
      "facing_direction": 3,
      "conditional_bit": false
    },
    "0b100": {
      "facing_direction": 4,
      "conditional_bit": false
    },
    "0b101": {
      "facing_direction": 5,
      "conditional_bit": false
    },
    "0b1000": {
      "facing_direction": 0,
      "conditional_bit": true
    },
    "0b1001": {
      "facing_direction": 1,
      "conditional_bit": true
    },
    "0b1010": {
      "facing_direction": 2,
      "conditional_bit": true
    },
    "0b1011": {
      "facing_direction": 3,
      "conditional_bit": true
    },
    "0b1100": {
      "facing_direction": 4,
      "conditional_bit": true
    },
    "0b1101": {
      "facing_direction": 5,
      "conditional_bit": true
    }
  },
  "minecraft:chain_command_block": {
    "default": {
      "facing_direction": 0,
      "conditional_bit": false
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "conditional_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "conditional_bit": false
    },
    "0b1": {
      "facing_direction": 1,
      "conditional_bit": false
    },
    "0b10": {
      "facing_direction": 2,
      "conditional_bit": false
    },
    "0b11": {
      "facing_direction": 3,
      "conditional_bit": false
    },
    "0b100": {
      "facing_direction": 4,
      "conditional_bit": false
    },
    "0b101": {
      "facing_direction": 5,
      "conditional_bit": false
    },
    "0b1000": {
      "facing_direction": 0,
      "conditional_bit": true
    },
    "0b1001": {
      "facing_direction": 1,
      "conditional_bit": true
    },
    "0b1010": {
      "facing_direction": 2,
      "conditional_bit": true
    },
    "0b1011": {
      "facing_direction": 3,
      "conditional_bit": true
    },
    "0b1100": {
      "facing_direction": 4,
      "conditional_bit": true
    },
    "0b1101": {
      "facing_direction": 5,
      "conditional_bit": true
    }
  },
  "minecraft:repeating_command_block": {
    "default": {
      "facing_direction": 0,
      "conditional_bit": false
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "conditional_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "conditional_bit": false
    },
    "0b1": {
      "facing_direction": 1,
      "conditional_bit": false
    },
    "0b10": {
      "facing_direction": 2,
      "conditional_bit": false
    },
    "0b11": {
      "facing_direction": 3,
      "conditional_bit": false
    },
    "0b100": {
      "facing_direction": 4,
      "conditional_bit": false
    },
    "0b101": {
      "facing_direction": 5,
      "conditional_bit": false
    },
    "0b1000": {
      "facing_direction": 0,
      "conditional_bit": true
    },
    "0b1001": {
      "facing_direction": 1,
      "conditional_bit": true
    },
    "0b1010": {
      "facing_direction": 2,
      "conditional_bit": true
    },
    "0b1011": {
      "facing_direction": 3,
      "conditional_bit": true
    },
    "0b1100": {
      "facing_direction": 4,
      "conditional_bit": true
    },
    "0b1101": {
      "facing_direction": 5,
      "conditional_bit": true
    }
  },
  "minecraft:composter": {
    "default": {
      "composter_fill_level": 0
    },
    "support_value": {
      "composter_fill_level": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ]
    },
    "0b0": {
      "composter_fill_level": 0
    },
    "0b1": {
      "composter_fill_level": 1
    },
    "0b10": {
      "composter_fill_level": 2
    },
    "0b11": {
      "composter_fill_level": 3
    },
    "0b100": {
      "composter_fill_level": 4
    },
    "0b101": {
      "composter_fill_level": 5
    },
    "0b110": {
      "composter_fill_level": 6
    },
    "0b111": {
      "composter_fill_level": 7
    },
    "0b1000": {
      "composter_fill_level": 8
    }
  },
  "minecraft:coral": {
    "default": {
      "coral_color": "blue",
      "dead_bit": false
    },
    "support_value": {
      "coral_color": [
        "blue",
        "pink",
        "purple",
        "red",
        "yellow"
      ],
      "dead_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "coral_color": "blue",
      "dead_bit": false
    },
    "0b1": {
      "coral_color": "pink",
      "dead_bit": false
    },
    "0b10": {
      "coral_color": "purple",
      "dead_bit": false
    },
    "0b11": {
      "coral_color": "red",
      "dead_bit": false
    },
    "0b100": {
      "coral_color": "yellow",
      "dead_bit": false
    },
    "0b1000": {
      "coral_color": "blue",
      "dead_bit": true
    },
    "0b1001": {
      "coral_color": "pink",
      "dead_bit": true
    },
    "0b1010": {
      "coral_color": "purple",
      "dead_bit": true
    },
    "0b1011": {
      "coral_color": "red",
      "dead_bit": true
    },
    "0b1100": {
      "coral_color": "yellow",
      "dead_bit": true
    }
  },
  "minecraft:coral_block": {
    "default": {
      "coral_color": "blue",
      "dead_bit": false
    },
    "support_value": {
      "coral_color": [
        "blue",
        "pink",
        "purple",
        "red",
        "yellow"
      ],
      "dead_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "coral_color": "blue",
      "dead_bit": false
    },
    "0b1": {
      "coral_color": "pink",
      "dead_bit": false
    },
    "0b10": {
      "coral_color": "purple",
      "dead_bit": false
    },
    "0b11": {
      "coral_color": "red",
      "dead_bit": false
    },
    "0b100": {
      "coral_color": "yellow",
      "dead_bit": false
    },
    "0b1000": {
      "coral_color": "blue",
      "dead_bit": true
    },
    "0b1001": {
      "coral_color": "pink",
      "dead_bit": true
    },
    "0b1010": {
      "coral_color": "purple",
      "dead_bit": true
    },
    "0b1011": {
      "coral_color": "red",
      "dead_bit": true
    },
    "0b1100": {
      "coral_color": "yellow",
      "dead_bit": true
    }
  },
  "minecraft:coral_fan": {
    "default": {
      "coral_color": "blue",
      "coral_fan_direction": 0
    },
    "support_value": {
      "coral_color": [
        "blue",
        "pink",
        "purple",
        "red",
        "yellow"
      ],
      "coral_fan_direction": [
        0,
        1
      ]
    },
    "0b0": {
      "coral_color": "blue",
      "coral_fan_direction": 0
    },
    "0b1": {
      "coral_color": "pink",
      "coral_fan_direction": 0
    },
    "0b10": {
      "coral_color": "purple",
      "coral_fan_direction": 0
    },
    "0b11": {
      "coral_color": "red",
      "coral_fan_direction": 0
    },
    "0b100": {
      "coral_color": "yellow",
      "coral_fan_direction": 0
    },
    "0b1000": {
      "coral_color": "blue",
      "coral_fan_direction": 1
    },
    "0b1001": {
      "coral_color": "pink",
      "coral_fan_direction": 1
    },
    "0b1010": {
      "coral_color": "purple",
      "coral_fan_direction": 1
    },
    "0b1011": {
      "coral_color": "red",
      "coral_fan_direction": 1
    },
    "0b1100": {
      "coral_color": "yellow",
      "coral_fan_direction": 1
    }
  },
  "minecraft:coral_fan_dead": {
    "default": {
      "coral_color": "blue",
      "coral_fan_direction": 0
    },
    "support_value": {
      "coral_color": [
        "blue",
        "pink",
        "purple",
        "red",
        "yellow"
      ],
      "coral_fan_direction": [
        0,
        1
      ]
    },
    "0b0": {
      "coral_color": "blue",
      "coral_fan_direction": 0
    },
    "0b1": {
      "coral_color": "pink",
      "coral_fan_direction": 0
    },
    "0b10": {
      "coral_color": "purple",
      "coral_fan_direction": 0
    },
    "0b11": {
      "coral_color": "red",
      "coral_fan_direction": 0
    },
    "0b100": {
      "coral_color": "yellow",
      "coral_fan_direction": 0
    },
    "0b1000": {
      "coral_color": "blue",
      "coral_fan_direction": 1
    },
    "0b1001": {
      "coral_color": "pink",
      "coral_fan_direction": 1
    },
    "0b1010": {
      "coral_color": "purple",
      "coral_fan_direction": 1
    },
    "0b1011": {
      "coral_color": "red",
      "coral_fan_direction": 1
    },
    "0b1100": {
      "coral_color": "yellow",
      "coral_fan_direction": 1
    }
  },
  "minecraft:coral_fan_hang": {
    "default": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 0
    },
    "support_value": {
      "coral_hang_type_bit": [
        false,
        true
      ],
      "dead_bit": [
        false,
        true
      ],
      "coral_direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 0
    },
    "0b1": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 0
    },
    "0b10": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 0
    },
    "0b11": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 0
    },
    "0b100": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 1
    },
    "0b101": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 1
    },
    "0b110": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 1
    },
    "0b111": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 1
    },
    "0b1000": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 2
    },
    "0b1001": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 2
    },
    "0b1010": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 2
    },
    "0b1011": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 2
    },
    "0b1100": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 3
    },
    "0b1101": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 3
    },
    "0b1110": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 3
    },
    "0b1111": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 3
    }
  },
  "minecraft:coral_fan_hang2": {
    "default": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 0
    },
    "support_value": {
      "coral_hang_type_bit": [
        false,
        true
      ],
      "dead_bit": [
        false,
        true
      ],
      "coral_direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 0
    },
    "0b1": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 0
    },
    "0b10": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 0
    },
    "0b11": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 0
    },
    "0b100": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 1
    },
    "0b101": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 1
    },
    "0b110": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 1
    },
    "0b111": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 1
    },
    "0b1000": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 2
    },
    "0b1001": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 2
    },
    "0b1010": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 2
    },
    "0b1011": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 2
    },
    "0b1100": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 3
    },
    "0b1101": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 3
    },
    "0b1110": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 3
    },
    "0b1111": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 3
    }
  },
  "minecraft:coral_fan_hang3": {
    "default": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 0
    },
    "support_value": {
      "coral_hang_type_bit": [
        false,
        true
      ],
      "dead_bit": [
        false,
        true
      ],
      "coral_direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 0
    },
    "0b1": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 0
    },
    "0b10": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 0
    },
    "0b11": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 0
    },
    "0b100": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 1
    },
    "0b101": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 1
    },
    "0b110": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 1
    },
    "0b111": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 1
    },
    "0b1000": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 2
    },
    "0b1001": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 2
    },
    "0b1010": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 2
    },
    "0b1011": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 2
    },
    "0b1100": {
      "coral_hang_type_bit": false,
      "dead_bit": false,
      "coral_direction": 3
    },
    "0b1101": {
      "coral_hang_type_bit": true,
      "dead_bit": false,
      "coral_direction": 3
    },
    "0b1110": {
      "coral_hang_type_bit": false,
      "dead_bit": true,
      "coral_direction": 3
    },
    "0b1111": {
      "coral_hang_type_bit": true,
      "dead_bit": true,
      "coral_direction": 3
    }
  },
  "minecraft:daylight_detector": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    },
    "0b10": {
      "redstone_signal": 2
    },
    "0b11": {
      "redstone_signal": 3
    },
    "0b100": {
      "redstone_signal": 4
    },
    "0b101": {
      "redstone_signal": 5
    },
    "0b110": {
      "redstone_signal": 6
    },
    "0b111": {
      "redstone_signal": 7
    },
    "0b1000": {
      "redstone_signal": 8
    },
    "0b1001": {
      "redstone_signal": 9
    },
    "0b1010": {
      "redstone_signal": 10
    },
    "0b1011": {
      "redstone_signal": 11
    },
    "0b1100": {
      "redstone_signal": 12
    },
    "0b1101": {
      "redstone_signal": 13
    },
    "0b1110": {
      "redstone_signal": 14
    },
    "0b1111": {
      "redstone_signal": 15
    }
  },
  "minecraft:daylight_detector_inverted": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    },
    "0b10": {
      "redstone_signal": 2
    },
    "0b11": {
      "redstone_signal": 3
    },
    "0b100": {
      "redstone_signal": 4
    },
    "0b101": {
      "redstone_signal": 5
    },
    "0b110": {
      "redstone_signal": 6
    },
    "0b111": {
      "redstone_signal": 7
    },
    "0b1000": {
      "redstone_signal": 8
    },
    "0b1001": {
      "redstone_signal": 9
    },
    "0b1010": {
      "redstone_signal": 10
    },
    "0b1011": {
      "redstone_signal": 11
    },
    "0b1100": {
      "redstone_signal": 12
    },
    "0b1101": {
      "redstone_signal": 13
    },
    "0b1110": {
      "redstone_signal": 14
    },
    "0b1111": {
      "redstone_signal": 15
    }
  },
  "minecraft:deepslate": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "y"
    },
    "0b10": {
      "pillar_axis": "y"
    },
    "0b11": {
      "pillar_axis": "y"
    }
  },
  "minecraft:infested_deepslate": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "y"
    },
    "0b10": {
      "pillar_axis": "y"
    },
    "0b11": {
      "pillar_axis": "y"
    }
  },
  "minecraft:crimson_hyphae": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "y"
    },
    "0b10": {
      "pillar_axis": "y"
    },
    "0b11": {
      "pillar_axis": "y"
    }
  },
  "minecraft:dirt": {
    "default": {
      "dirt_type": "normal"
    },
    "support_value": {
      "dirt_type": [
        "normal",
        "coarse"
      ]
    },
    "0b0": {
      "dirt_type": "normal"
    },
    "0b1": {
      "dirt_type": "coarse"
    }
  },
  "minecraft:dispenser": {
    "default": {
      "facing_direction": 0,
      "triggered_bit": false
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "triggered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "triggered_bit": false
    },
    "0b1": {
      "facing_direction": 1,
      "triggered_bit": false
    },
    "0b10": {
      "facing_direction": 2,
      "triggered_bit": false
    },
    "0b11": {
      "facing_direction": 3,
      "triggered_bit": false
    },
    "0b100": {
      "facing_direction": 4,
      "triggered_bit": false
    },
    "0b101": {
      "facing_direction": 5,
      "triggered_bit": false
    },
    "0b110": {
      "facing_direction": 6,
      "triggered_bit": false
    },
    "0b111": {
      "facing_direction": 7,
      "triggered_bit": false
    },
    "0b1000": {
      "facing_direction": 0,
      "triggered_bit": true
    },
    "0b1001": {
      "facing_direction": 1,
      "triggered_bit": true
    },
    "0b1010": {
      "facing_direction": 2,
      "triggered_bit": true
    },
    "0b1011": {
      "facing_direction": 3,
      "triggered_bit": true
    },
    "0b1100": {
      "facing_direction": 4,
      "triggered_bit": true
    },
    "0b1101": {
      "facing_direction": 5,
      "triggered_bit": true
    },
    "0b1110": {
      "facing_direction": 6,
      "triggered_bit": true
    },
    "0b1111": {
      "facing_direction": 7,
      "triggered_bit": true
    }
  },
  "minecraft:dropper": {
    "default": {
      "facing_direction": 0,
      "triggered_bit": false
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "triggered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "triggered_bit": false
    },
    "0b1": {
      "facing_direction": 1,
      "triggered_bit": false
    },
    "0b10": {
      "facing_direction": 2,
      "triggered_bit": false
    },
    "0b11": {
      "facing_direction": 3,
      "triggered_bit": false
    },
    "0b100": {
      "facing_direction": 4,
      "triggered_bit": false
    },
    "0b101": {
      "facing_direction": 5,
      "triggered_bit": false
    },
    "0b110": {
      "facing_direction": 6,
      "triggered_bit": false
    },
    "0b111": {
      "facing_direction": 7,
      "triggered_bit": false
    },
    "0b1000": {
      "facing_direction": 0,
      "triggered_bit": true
    },
    "0b1001": {
      "facing_direction": 1,
      "triggered_bit": true
    },
    "0b1010": {
      "facing_direction": 2,
      "triggered_bit": true
    },
    "0b1011": {
      "facing_direction": 3,
      "triggered_bit": true
    },
    "0b1100": {
      "facing_direction": 4,
      "triggered_bit": true
    },
    "0b1101": {
      "facing_direction": 5,
      "triggered_bit": true
    },
    "0b1110": {
      "facing_direction": 6,
      "triggered_bit": true
    },
    "0b1111": {
      "facing_direction": 7,
      "triggered_bit": true
    }
  },
  "minecraft:iron_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    }
  },
  "minecraft:wooden_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    }
  },
  "minecraft:spruce_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    }
  },
  "minecraft:birch_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    }
  },
  "minecraft:jungle_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    }
  },
  "minecraft:acacia_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    }
  },
  "minecraft:dark_oak_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    }
  },
  "minecraft:crimson_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    }
  },
  "minecraft:warped_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "upper_block_bit": true,
      "door_hinge_bit": false
    }
  },
  "minecraft:end_portal_frame": {
    "default": {
      "direction": 0,
      "end_portal_eye_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "end_portal_eye_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "end_portal_eye_bit": false
    },
    "0b1": {
      "direction": 1,
      "end_portal_eye_bit": false
    },
    "0b10": {
      "direction": 2,
      "end_portal_eye_bit": false
    },
    "0b11": {
      "direction": 3,
      "end_portal_eye_bit": false
    },
    "0b100": {
      "direction": 0,
      "end_portal_eye_bit": true
    },
    "0b101": {
      "direction": 1,
      "end_portal_eye_bit": true
    },
    "0b110": {
      "direction": 2,
      "end_portal_eye_bit": true
    },
    "0b111": {
      "direction": 3,
      "end_portal_eye_bit": true
    }
  },
  "minecraft:end_rod": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:farmland": {
    "default": {
      "moisturized_amount": 0
    },
    "support_value": {
      "moisturized_amount": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    },
    "0b0": {
      "moisturized_amount": 0
    },
    "0b1": {
      "moisturized_amount": 1
    },
    "0b10": {
      "moisturized_amount": 2
    },
    "0b11": {
      "moisturized_amount": 3
    },
    "0b100": {
      "moisturized_amount": 4
    },
    "0b101": {
      "moisturized_amount": 5
    },
    "0b110": {
      "moisturized_amount": 6
    },
    "0b111": {
      "moisturized_amount": 7
    }
  },
  "minecraft:fence": {
    "default": {
      "wood_type": "oak"
    },
    "support_value": {
      "wood_type": [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak"
      ]
    },
    "0b0": {
      "wood_type": "oak"
    },
    "0b1": {
      "wood_type": "spruce"
    },
    "0b10": {
      "wood_type": "birch"
    },
    "0b11": {
      "wood_type": "jungle"
    },
    "0b100": {
      "wood_type": "acacia"
    },
    "0b101": {
      "wood_type": "dark_oak"
    }
  },
  "minecraft:fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": true
    }
  },
  "minecraft:spruce_fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": true
    }
  },
  "minecraft:birch_fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": true
    }
  },
  "minecraft:jungle_fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": true
    }
  },
  "minecraft:acacia_fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": true
    }
  },
  "minecraft:dark_oak_fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": true
    }
  },
  "minecraft:crimson_fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": true
    }
  },
  "minecraft:warped_fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b1": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b10": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b11": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": false
    },
    "0b100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": false
    },
    "0b1000": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1001": {
      "direction": 1,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1010": {
      "direction": 2,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1011": {
      "direction": 3,
      "open_bit": false,
      "in_wall_bit": true
    },
    "0b1100": {
      "direction": 0,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1101": {
      "direction": 1,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1110": {
      "direction": 2,
      "open_bit": true,
      "in_wall_bit": true
    },
    "0b1111": {
      "direction": 3,
      "open_bit": true,
      "in_wall_bit": true
    }
  },
  "minecraft:fire": {
    "default": {
      "age": 0
    },
    "support_value": {
      "age": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "age": 0
    },
    "0b1": {
      "age": 1
    },
    "0b10": {
      "age": 2
    },
    "0b11": {
      "age": 3
    },
    "0b100": {
      "age": 4
    },
    "0b101": {
      "age": 5
    },
    "0b110": {
      "age": 6
    },
    "0b111": {
      "age": 7
    },
    "0b1000": {
      "age": 8
    },
    "0b1001": {
      "age": 9
    },
    "0b1010": {
      "age": 10
    },
    "0b1011": {
      "age": 11
    },
    "0b1100": {
      "age": 12
    },
    "0b1101": {
      "age": 13
    },
    "0b1110": {
      "age": 14
    },
    "0b1111": {
      "age": 15
    }
  },
  "minecraft:soul_fire": {
    "default": {
      "age": 0
    },
    "support_value": {
      "age": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "age": 0
    },
    "0b1": {
      "age": 1
    },
    "0b10": {
      "age": 2
    },
    "0b11": {
      "age": 3
    },
    "0b100": {
      "age": 4
    },
    "0b101": {
      "age": 5
    },
    "0b110": {
      "age": 6
    },
    "0b111": {
      "age": 7
    },
    "0b1000": {
      "age": 8
    },
    "0b1001": {
      "age": 9
    },
    "0b1010": {
      "age": 10
    },
    "0b1011": {
      "age": 11
    },
    "0b1100": {
      "age": 12
    },
    "0b1101": {
      "age": 13
    },
    "0b1110": {
      "age": 14
    },
    "0b1111": {
      "age": 15
    }
  },
  "minecraft:reeds": {
    "default": {
      "age": 0
    },
    "support_value": {
      "age": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "age": 0
    },
    "0b1": {
      "age": 1
    },
    "0b10": {
      "age": 2
    },
    "0b11": {
      "age": 3
    },
    "0b100": {
      "age": 4
    },
    "0b101": {
      "age": 5
    },
    "0b110": {
      "age": 6
    },
    "0b111": {
      "age": 7
    },
    "0b1000": {
      "age": 8
    },
    "0b1001": {
      "age": 9
    },
    "0b1010": {
      "age": 10
    },
    "0b1011": {
      "age": 11
    },
    "0b1100": {
      "age": 12
    },
    "0b1101": {
      "age": 13
    },
    "0b1110": {
      "age": 14
    },
    "0b1111": {
      "age": 15
    }
  },
  "minecraft:red_flower": {
    "default": {
      "flower_type": "poppy"
    },
    "support_value": {
      "flower_type": [
        "poppy",
        "orchid",
        "allium",
        "houstonia",
        "tulip_red",
        "tulip_orange",
        "tulip_white",
        "tulip_pink",
        "oxeye",
        "cornflower",
        "lily_of_the_valley"
      ]
    },
    "0b0": {
      "flower_type": "poppy"
    },
    "0b1": {
      "flower_type": "orchid"
    },
    "0b10": {
      "flower_type": "allium"
    },
    "0b11": {
      "flower_type": "houstonia"
    },
    "0b100": {
      "flower_type": "tulip_red"
    },
    "0b101": {
      "flower_type": "tulip_orange"
    },
    "0b110": {
      "flower_type": "tulip_white"
    },
    "0b111": {
      "flower_type": "tulip_pink"
    },
    "0b1000": {
      "flower_type": "oxeye"
    },
    "0b1001": {
      "flower_type": "cornflower"
    },
    "0b1010": {
      "flower_type": "lily_of_the_valley"
    }
  },
  "minecraft:double_plant": {
    "default": {
      "double_plant_type": "sunflower",
      "upper_block_bit": false
    },
    "support_value": {
      "double_plant_type": [
        "sunflower",
        "syringa",
        "grass",
        "fern",
        "rose",
        "paeonia"
      ],
      "upper_block_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "double_plant_type": "sunflower",
      "upper_block_bit": false
    },
    "0b1": {
      "double_plant_type": "syringa",
      "upper_block_bit": false
    },
    "0b10": {
      "double_plant_type": "grass",
      "upper_block_bit": false
    },
    "0b11": {
      "double_plant_type": "fern",
      "upper_block_bit": false
    },
    "0b100": {
      "double_plant_type": "rose",
      "upper_block_bit": false
    },
    "0b101": {
      "double_plant_type": "paeonia",
      "upper_block_bit": false
    },
    "0b1000": {
      "double_plant_type": "sunflower",
      "upper_block_bit": true
    },
    "0b1001": {
      "double_plant_type": "syringa",
      "upper_block_bit": true
    },
    "0b1010": {
      "double_plant_type": "grass",
      "upper_block_bit": true
    },
    "0b1011": {
      "double_plant_type": "fern",
      "upper_block_bit": true
    },
    "0b1100": {
      "double_plant_type": "rose",
      "upper_block_bit": true
    },
    "0b1101": {
      "double_plant_type": "paeonia",
      "upper_block_bit": true
    }
  },
  "minecraft:flower_pot": {
    "default": {
      "update_bit": false
    },
    "support_value": {
      "update_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "update_bit": false
    },
    "0b1": {
      "update_bit": true
    }
  },
  "minecraft:frosted_ice": {
    "default": {
      "age": 0
    },
    "support_value": {
      "age": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "age": 0
    },
    "0b1": {
      "age": 1
    },
    "0b10": {
      "age": 2
    },
    "0b11": {
      "age": 3
    }
  },
  "minecraft:nether_wart": {
    "default": {
      "age": 0
    },
    "support_value": {
      "age": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "age": 0
    },
    "0b1": {
      "age": 1
    },
    "0b10": {
      "age": 2
    },
    "0b11": {
      "age": 3
    }
  },
  "minecraft:furnace": {
    "default": {
      "facing_direction": 3
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:lit_furnace": {
    "default": {
      "facing_direction": 3
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:white_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:orange_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:magenta_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:light_blue_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:yellow_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:lime_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:pink_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:gray_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:light_gray_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:cyan_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:purple_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:blue_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:brown_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:green_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:red_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:black_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:silver_glazed_terracotta": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:glow_lichen": {
    "default": {
      "multi_face_direction_bits": 0
    },
    "support_value": {
      "multi_face_direction_bits": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63
      ]
    },
    "0b0": {
      "multi_face_direction_bits": 0
    },
    "0b1": {
      "multi_face_direction_bits": 1
    },
    "0b10": {
      "multi_face_direction_bits": 2
    },
    "0b11": {
      "multi_face_direction_bits": 3
    },
    "0b100": {
      "multi_face_direction_bits": 4
    },
    "0b101": {
      "multi_face_direction_bits": 5
    },
    "0b110": {
      "multi_face_direction_bits": 6
    },
    "0b111": {
      "multi_face_direction_bits": 7
    },
    "0b1000": {
      "multi_face_direction_bits": 8
    },
    "0b1001": {
      "multi_face_direction_bits": 9
    },
    "0b1010": {
      "multi_face_direction_bits": 10
    },
    "0b1011": {
      "multi_face_direction_bits": 11
    },
    "0b1100": {
      "multi_face_direction_bits": 12
    },
    "0b1101": {
      "multi_face_direction_bits": 13
    },
    "0b1110": {
      "multi_face_direction_bits": 14
    },
    "0b1111": {
      "multi_face_direction_bits": 15
    },
    "0b10000": {
      "multi_face_direction_bits": 16
    },
    "0b10001": {
      "multi_face_direction_bits": 17
    },
    "0b10010": {
      "multi_face_direction_bits": 18
    },
    "0b10011": {
      "multi_face_direction_bits": 19
    },
    "0b10100": {
      "multi_face_direction_bits": 20
    },
    "0b10101": {
      "multi_face_direction_bits": 21
    },
    "0b10110": {
      "multi_face_direction_bits": 22
    },
    "0b10111": {
      "multi_face_direction_bits": 23
    },
    "0b11000": {
      "multi_face_direction_bits": 24
    },
    "0b11001": {
      "multi_face_direction_bits": 25
    },
    "0b11010": {
      "multi_face_direction_bits": 26
    },
    "0b11011": {
      "multi_face_direction_bits": 27
    },
    "0b11100": {
      "multi_face_direction_bits": 28
    },
    "0b11101": {
      "multi_face_direction_bits": 29
    },
    "0b11110": {
      "multi_face_direction_bits": 30
    },
    "0b11111": {
      "multi_face_direction_bits": 31
    },
    "0b100000": {
      "multi_face_direction_bits": 32
    },
    "0b100001": {
      "multi_face_direction_bits": 33
    },
    "0b100010": {
      "multi_face_direction_bits": 34
    },
    "0b100011": {
      "multi_face_direction_bits": 35
    },
    "0b100100": {
      "multi_face_direction_bits": 36
    },
    "0b100101": {
      "multi_face_direction_bits": 37
    },
    "0b100110": {
      "multi_face_direction_bits": 38
    },
    "0b100111": {
      "multi_face_direction_bits": 39
    },
    "0b101000": {
      "multi_face_direction_bits": 40
    },
    "0b101001": {
      "multi_face_direction_bits": 41
    },
    "0b101010": {
      "multi_face_direction_bits": 42
    },
    "0b101011": {
      "multi_face_direction_bits": 43
    },
    "0b101100": {
      "multi_face_direction_bits": 44
    },
    "0b101101": {
      "multi_face_direction_bits": 45
    },
    "0b101110": {
      "multi_face_direction_bits": 46
    },
    "0b101111": {
      "multi_face_direction_bits": 47
    },
    "0b110000": {
      "multi_face_direction_bits": 48
    },
    "0b110001": {
      "multi_face_direction_bits": 49
    },
    "0b110010": {
      "multi_face_direction_bits": 50
    },
    "0b110011": {
      "multi_face_direction_bits": 51
    },
    "0b110100": {
      "multi_face_direction_bits": 52
    },
    "0b110101": {
      "multi_face_direction_bits": 53
    },
    "0b110110": {
      "multi_face_direction_bits": 54
    },
    "0b110111": {
      "multi_face_direction_bits": 55
    },
    "0b111000": {
      "multi_face_direction_bits": 56
    },
    "0b111001": {
      "multi_face_direction_bits": 57
    },
    "0b111010": {
      "multi_face_direction_bits": 58
    },
    "0b111011": {
      "multi_face_direction_bits": 59
    },
    "0b111100": {
      "multi_face_direction_bits": 60
    },
    "0b111101": {
      "multi_face_direction_bits": 61
    },
    "0b111110": {
      "multi_face_direction_bits": 62
    },
    "0b111111": {
      "multi_face_direction_bits": 63
    }
  },
  "minecraft:sculk_vein": {
    "default": {
      "multi_face_direction_bits": 0
    },
    "support_value": {
      "multi_face_direction_bits": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63
      ]
    },
    "0b0": {
      "multi_face_direction_bits": 0
    },
    "0b1": {
      "multi_face_direction_bits": 1
    },
    "0b10": {
      "multi_face_direction_bits": 2
    },
    "0b11": {
      "multi_face_direction_bits": 3
    },
    "0b100": {
      "multi_face_direction_bits": 4
    },
    "0b101": {
      "multi_face_direction_bits": 5
    },
    "0b110": {
      "multi_face_direction_bits": 6
    },
    "0b111": {
      "multi_face_direction_bits": 7
    },
    "0b1000": {
      "multi_face_direction_bits": 8
    },
    "0b1001": {
      "multi_face_direction_bits": 9
    },
    "0b1010": {
      "multi_face_direction_bits": 10
    },
    "0b1011": {
      "multi_face_direction_bits": 11
    },
    "0b1100": {
      "multi_face_direction_bits": 12
    },
    "0b1101": {
      "multi_face_direction_bits": 13
    },
    "0b1110": {
      "multi_face_direction_bits": 14
    },
    "0b1111": {
      "multi_face_direction_bits": 15
    },
    "0b10000": {
      "multi_face_direction_bits": 16
    },
    "0b10001": {
      "multi_face_direction_bits": 17
    },
    "0b10010": {
      "multi_face_direction_bits": 18
    },
    "0b10011": {
      "multi_face_direction_bits": 19
    },
    "0b10100": {
      "multi_face_direction_bits": 20
    },
    "0b10101": {
      "multi_face_direction_bits": 21
    },
    "0b10110": {
      "multi_face_direction_bits": 22
    },
    "0b10111": {
      "multi_face_direction_bits": 23
    },
    "0b11000": {
      "multi_face_direction_bits": 24
    },
    "0b11001": {
      "multi_face_direction_bits": 25
    },
    "0b11010": {
      "multi_face_direction_bits": 26
    },
    "0b11011": {
      "multi_face_direction_bits": 27
    },
    "0b11100": {
      "multi_face_direction_bits": 28
    },
    "0b11101": {
      "multi_face_direction_bits": 29
    },
    "0b11110": {
      "multi_face_direction_bits": 30
    },
    "0b11111": {
      "multi_face_direction_bits": 31
    },
    "0b100000": {
      "multi_face_direction_bits": 32
    },
    "0b100001": {
      "multi_face_direction_bits": 33
    },
    "0b100010": {
      "multi_face_direction_bits": 34
    },
    "0b100011": {
      "multi_face_direction_bits": 35
    },
    "0b100100": {
      "multi_face_direction_bits": 36
    },
    "0b100101": {
      "multi_face_direction_bits": 37
    },
    "0b100110": {
      "multi_face_direction_bits": 38
    },
    "0b100111": {
      "multi_face_direction_bits": 39
    },
    "0b101000": {
      "multi_face_direction_bits": 40
    },
    "0b101001": {
      "multi_face_direction_bits": 41
    },
    "0b101010": {
      "multi_face_direction_bits": 42
    },
    "0b101011": {
      "multi_face_direction_bits": 43
    },
    "0b101100": {
      "multi_face_direction_bits": 44
    },
    "0b101101": {
      "multi_face_direction_bits": 45
    },
    "0b101110": {
      "multi_face_direction_bits": 46
    },
    "0b101111": {
      "multi_face_direction_bits": 47
    },
    "0b110000": {
      "multi_face_direction_bits": 48
    },
    "0b110001": {
      "multi_face_direction_bits": 49
    },
    "0b110010": {
      "multi_face_direction_bits": 50
    },
    "0b110011": {
      "multi_face_direction_bits": 51
    },
    "0b110100": {
      "multi_face_direction_bits": 52
    },
    "0b110101": {
      "multi_face_direction_bits": 53
    },
    "0b110110": {
      "multi_face_direction_bits": 54
    },
    "0b110111": {
      "multi_face_direction_bits": 55
    },
    "0b111000": {
      "multi_face_direction_bits": 56
    },
    "0b111001": {
      "multi_face_direction_bits": 57
    },
    "0b111010": {
      "multi_face_direction_bits": 58
    },
    "0b111011": {
      "multi_face_direction_bits": 59
    },
    "0b111100": {
      "multi_face_direction_bits": 60
    },
    "0b111101": {
      "multi_face_direction_bits": 61
    },
    "0b111110": {
      "multi_face_direction_bits": 62
    },
    "0b111111": {
      "multi_face_direction_bits": 63
    }
  },
  "minecraft:grindstone": {
    "default": {
      "direction": 0,
      "attachment": "standing"
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "attachment": [
        "standing",
        "hanging",
        "side",
        "multiple"
      ]
    },
    "0b0": {
      "direction": 0,
      "attachment": "standing"
    },
    "0b1": {
      "direction": 1,
      "attachment": "standing"
    },
    "0b10": {
      "direction": 2,
      "attachment": "standing"
    },
    "0b11": {
      "direction": 3,
      "attachment": "standing"
    },
    "0b100": {
      "direction": 0,
      "attachment": "hanging"
    },
    "0b101": {
      "direction": 1,
      "attachment": "hanging"
    },
    "0b110": {
      "direction": 2,
      "attachment": "hanging"
    },
    "0b111": {
      "direction": 3,
      "attachment": "hanging"
    },
    "0b1000": {
      "direction": 0,
      "attachment": "side"
    },
    "0b1001": {
      "direction": 1,
      "attachment": "side"
    },
    "0b1010": {
      "direction": 2,
      "attachment": "side"
    },
    "0b1011": {
      "direction": 3,
      "attachment": "side"
    },
    "0b1100": {
      "direction": 0,
      "attachment": "multiple"
    },
    "0b1101": {
      "direction": 1,
      "attachment": "multiple"
    },
    "0b1110": {
      "direction": 2,
      "attachment": "multiple"
    },
    "0b1111": {
      "direction": 3,
      "attachment": "multiple"
    }
  },
  "minecraft:hay_block": {
    "default": {
      "deprecated": 0,
      "pillar_axis": "y"
    },
    "support_value": {
      "deprecated": [
        0,
        1,
        2,
        3
      ],
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "deprecated": 0,
      "pillar_axis": "y"
    },
    "0b1": {
      "deprecated": 1,
      "pillar_axis": "y"
    },
    "0b10": {
      "deprecated": 2,
      "pillar_axis": "y"
    },
    "0b11": {
      "deprecated": 3,
      "pillar_axis": "y"
    },
    "0b100": {
      "deprecated": 0,
      "pillar_axis": "x"
    },
    "0b101": {
      "deprecated": 1,
      "pillar_axis": "x"
    },
    "0b110": {
      "deprecated": 2,
      "pillar_axis": "x"
    },
    "0b111": {
      "deprecated": 3,
      "pillar_axis": "x"
    },
    "0b1000": {
      "deprecated": 0,
      "pillar_axis": "z"
    },
    "0b1001": {
      "deprecated": 1,
      "pillar_axis": "z"
    },
    "0b1010": {
      "deprecated": 2,
      "pillar_axis": "z"
    },
    "0b1011": {
      "deprecated": 3,
      "pillar_axis": "z"
    }
  },
  "minecraft:hopper": {
    "default": {
      "facing_direction": 0,
      "toggle_bit": false
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4
      ],
      "toggle_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "toggle_bit": false
    },
    "0b1": {
      "facing_direction": 1,
      "toggle_bit": false
    },
    "0b10": {
      "facing_direction": 2,
      "toggle_bit": false
    },
    "0b11": {
      "facing_direction": 3,
      "toggle_bit": false
    },
    "0b100": {
      "facing_direction": 4,
      "toggle_bit": false
    },
    "0b1000": {
      "facing_direction": 0,
      "toggle_bit": true
    },
    "0b1001": {
      "facing_direction": 1,
      "toggle_bit": true
    },
    "0b1010": {
      "facing_direction": 2,
      "toggle_bit": true
    },
    "0b1011": {
      "facing_direction": 3,
      "toggle_bit": true
    },
    "0b1100": {
      "facing_direction": 4,
      "toggle_bit": true
    }
  },
  "minecraft:monster_egg": {
    "default": {
      "monster_egg_stone_type": "stone"
    },
    "support_value": {
      "monster_egg_stone_type": [
        "stone",
        "cobblestone",
        "stone_brick",
        "mossy_stone_brick",
        "cracked_stone_brick",
        "chiseled_stone_brick"
      ]
    },
    "0b0": {
      "monster_egg_stone_type": "stone"
    },
    "0b1": {
      "monster_egg_stone_type": "cobblestone"
    },
    "0b10": {
      "monster_egg_stone_type": "stone_brick"
    },
    "0b11": {
      "monster_egg_stone_type": "mossy_stone_brick"
    },
    "0b100": {
      "monster_egg_stone_type": "cracked_stone_brick"
    },
    "0b101": {
      "monster_egg_stone_type": "chiseled_stone_brick"
    }
  },
  "minecraft:frame": {
    "default": {
      "facing_direction": 0,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        5,
        4,
        3,
        2
      ],
      "item_frame_map_bit": [
        false,
        true
      ],
      "item_frame_photo_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "facing_direction": 5,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b1": {
      "facing_direction": 4,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b10": {
      "facing_direction": 3,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b11": {
      "facing_direction": 2,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b100": {
      "facing_direction": 5,
      "item_frame_map_bit": true,
      "item_frame_photo_bit": false
    },
    "0b101": {
      "facing_direction": 4,
      "item_frame_map_bit": true,
      "item_frame_photo_bit": false
    },
    "0b110": {
      "facing_direction": 3,
      "item_frame_map_bit": true,
      "item_frame_photo_bit": false
    },
    "0b111": {
      "facing_direction": 2,
      "item_frame_map_bit": true,
      "item_frame_photo_bit": false
    }
  },
  "minecraft:glow_frame": {
    "default": {
      "facing_direction": 0,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        5,
        4,
        3,
        2
      ],
      "item_frame_map_bit": [
        false,
        true
      ],
      "item_frame_photo_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b1": {
      "facing_direction": 0,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b10": {
      "facing_direction": 0,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b11": {
      "facing_direction": 0,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b100": {
      "facing_direction": 0,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b101": {
      "facing_direction": 0,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b110": {
      "facing_direction": 0,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    },
    "0b111": {
      "facing_direction": 0,
      "item_frame_map_bit": false,
      "item_frame_photo_bit": false
    }
  },
  "minecraft:jigsaw": {
    "default": {
      "facing_direction": 0,
      "rotation": false
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        5,
        4,
        3,
        2
      ],
      "rotation": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "rotation": false
    }
  },
  "minecraft:lit_pumpkin": {
    "default": {
      "direction": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "direction": 0
    },
    "0b1": {
      "direction": 1
    },
    "0b10": {
      "direction": 2
    },
    "0b11": {
      "direction": 3
    }
  },
  "minecraft:pumpkin": {
    "default": {
      "direction": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "direction": 0
    },
    "0b1": {
      "direction": 1
    },
    "0b10": {
      "direction": 2
    },
    "0b11": {
      "direction": 3
    }
  },
  "minecraft:carved_pumpkin": {
    "default": {
      "direction": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "direction": 0
    },
    "0b1": {
      "direction": 1
    },
    "0b10": {
      "direction": 2
    },
    "0b11": {
      "direction": 3
    }
  },
  "minecraft:kelp": {
    "default": {
      "kelp_age": 0
    },
    "support_value": {
      "kelp_age": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
      ]
    },
    "0b0": {
      "kelp_age": 0
    },
    "0b1": {
      "kelp_age": 1
    },
    "0b10": {
      "kelp_age": 2
    },
    "0b11": {
      "kelp_age": 3
    },
    "0b100": {
      "kelp_age": 4
    },
    "0b101": {
      "kelp_age": 5
    },
    "0b110": {
      "kelp_age": 6
    },
    "0b111": {
      "kelp_age": 7
    },
    "0b1000": {
      "kelp_age": 8
    },
    "0b1001": {
      "kelp_age": 9
    },
    "0b1010": {
      "kelp_age": 10
    },
    "0b1011": {
      "kelp_age": 11
    },
    "0b1100": {
      "kelp_age": 12
    },
    "0b1101": {
      "kelp_age": 13
    },
    "0b1110": {
      "kelp_age": 14
    },
    "0b1111": {
      "kelp_age": 15
    }
  },
  "minecraft:lantern": {
    "default": {
      "hanging": false
    },
    "support_value": {
      "hanging": [
        false,
        true
      ]
    },
    "0b0": {
      "hanging": false
    },
    "0b1": {
      "hanging": true
    }
  },
  "minecraft:soul_lantern": {
    "default": {
      "hanging": false
    },
    "support_value": {
      "hanging": [
        false,
        true
      ]
    },
    "0b0": {
      "hanging": false
    },
    "0b1": {
      "hanging": true
    }
  },
  "minecraft:lava": {
    "default": {
      "liquid_depth": 0
    },
    "support_value": {
      "liquid_depth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "liquid_depth": 0
    },
    "0b1": {
      "liquid_depth": 1
    },
    "0b10": {
      "liquid_depth": 2
    },
    "0b11": {
      "liquid_depth": 3
    },
    "0b100": {
      "liquid_depth": 4
    },
    "0b101": {
      "liquid_depth": 5
    },
    "0b110": {
      "liquid_depth": 6
    },
    "0b111": {
      "liquid_depth": 7
    },
    "0b1000": {
      "liquid_depth": 8
    },
    "0b1001": {
      "liquid_depth": 9
    },
    "0b1010": {
      "liquid_depth": 10
    },
    "0b1011": {
      "liquid_depth": 11
    },
    "0b1100": {
      "liquid_depth": 12
    },
    "0b1101": {
      "liquid_depth": 13
    },
    "0b1110": {
      "liquid_depth": 14
    },
    "0b1111": {
      "liquid_depth": 15
    }
  },
  "minecraft:flowing_lava": {
    "default": {
      "liquid_depth": 0
    },
    "support_value": {
      "liquid_depth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "liquid_depth": 0
    },
    "0b1": {
      "liquid_depth": 1
    },
    "0b10": {
      "liquid_depth": 2
    },
    "0b11": {
      "liquid_depth": 3
    },
    "0b100": {
      "liquid_depth": 4
    },
    "0b101": {
      "liquid_depth": 5
    },
    "0b110": {
      "liquid_depth": 6
    },
    "0b111": {
      "liquid_depth": 7
    },
    "0b1000": {
      "liquid_depth": 8
    },
    "0b1001": {
      "liquid_depth": 9
    },
    "0b1010": {
      "liquid_depth": 10
    },
    "0b1011": {
      "liquid_depth": 11
    },
    "0b1100": {
      "liquid_depth": 12
    },
    "0b1101": {
      "liquid_depth": 13
    },
    "0b1110": {
      "liquid_depth": 14
    },
    "0b1111": {
      "liquid_depth": 15
    }
  },
  "minecraft:flowing_water": {
    "default": {
      "liquid_depth": 0
    },
    "support_value": {
      "liquid_depth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "liquid_depth": 0
    },
    "0b1": {
      "liquid_depth": 1
    },
    "0b10": {
      "liquid_depth": 2
    },
    "0b11": {
      "liquid_depth": 3
    },
    "0b100": {
      "liquid_depth": 4
    },
    "0b101": {
      "liquid_depth": 5
    },
    "0b110": {
      "liquid_depth": 6
    },
    "0b111": {
      "liquid_depth": 7
    },
    "0b1000": {
      "liquid_depth": 8
    },
    "0b1001": {
      "liquid_depth": 9
    },
    "0b1010": {
      "liquid_depth": 10
    },
    "0b1011": {
      "liquid_depth": 11
    },
    "0b1100": {
      "liquid_depth": 12
    },
    "0b1101": {
      "liquid_depth": 13
    },
    "0b1110": {
      "liquid_depth": 14
    },
    "0b1111": {
      "liquid_depth": 15
    }
  },
  "minecraft:water": {
    "default": {
      "liquid_depth": 0
    },
    "support_value": {
      "liquid_depth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "liquid_depth": 0
    },
    "0b1": {
      "liquid_depth": 1
    },
    "0b10": {
      "liquid_depth": 2
    },
    "0b11": {
      "liquid_depth": 3
    },
    "0b100": {
      "liquid_depth": 4
    },
    "0b101": {
      "liquid_depth": 5
    },
    "0b110": {
      "liquid_depth": 6
    },
    "0b111": {
      "liquid_depth": 7
    },
    "0b1000": {
      "liquid_depth": 8
    },
    "0b1001": {
      "liquid_depth": 9
    },
    "0b1010": {
      "liquid_depth": 10
    },
    "0b1011": {
      "liquid_depth": 11
    },
    "0b1100": {
      "liquid_depth": 12
    },
    "0b1101": {
      "liquid_depth": 13
    },
    "0b1110": {
      "liquid_depth": 14
    },
    "0b1111": {
      "liquid_depth": 15
    }
  },
  "minecraft:leaves": {
    "default": {
      "old_leaf_type": "oka",
      "update_bit": false,
      "persistent_bit": false
    },
    "support_value": {
      "old_leaf_type": [
        "oka",
        "spruce",
        "birch",
        "jungle"
      ],
      "update_bit": [
        false,
        true
      ],
      "persistent_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "old_leaf_type": "oka",
      "update_bit": false,
      "persistent_bit": false
    },
    "0b1": {
      "old_leaf_type": "spruce",
      "update_bit": false,
      "persistent_bit": false
    },
    "0b10": {
      "old_leaf_type": "birch",
      "update_bit": false,
      "persistent_bit": false
    },
    "0b11": {
      "old_leaf_type": "jungle",
      "update_bit": false,
      "persistent_bit": false
    },
    "0b100": {
      "old_leaf_type": "oka",
      "update_bit": true,
      "persistent_bit": false
    },
    "0b101": {
      "old_leaf_type": "spruce",
      "update_bit": true,
      "persistent_bit": false
    },
    "0b110": {
      "old_leaf_type": "birch",
      "update_bit": true,
      "persistent_bit": false
    },
    "0b111": {
      "old_leaf_type": "jungle",
      "update_bit": true,
      "persistent_bit": false
    },
    "0b1000": {
      "old_leaf_type": "oka",
      "update_bit": false,
      "persistent_bit": true
    },
    "0b1001": {
      "old_leaf_type": "spruce",
      "update_bit": false,
      "persistent_bit": true
    },
    "0b1010": {
      "old_leaf_type": "birch",
      "update_bit": false,
      "persistent_bit": true
    },
    "0b1011": {
      "old_leaf_type": "jungle",
      "update_bit": false,
      "persistent_bit": true
    },
    "0b1100": {
      "old_leaf_type": "oka",
      "update_bit": true,
      "persistent_bit": true
    },
    "0b1101": {
      "old_leaf_type": "spruce",
      "update_bit": true,
      "persistent_bit": true
    },
    "0b1110": {
      "old_leaf_type": "birch",
      "update_bit": true,
      "persistent_bit": true
    },
    "0b1111": {
      "old_leaf_type": "jungle",
      "update_bit": true,
      "persistent_bit": true
    }
  },
  "minecraft:leaves2": {
    "default": {
      "new_leaf_type": "acacia",
      "update_bit": false,
      "persistent_bit": false
    },
    "support_value": {
      "new_leaf_type": [
        "acacia",
        "dark_oak"
      ],
      "update_bit": [
        false,
        true
      ],
      "persistent_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "new_leaf_type": "acacia",
      "update_bit": false,
      "persistent_bit": false
    },
    "0b1": {
      "new_leaf_type": "dark_oak",
      "update_bit": false,
      "persistent_bit": false
    },
    "0b10": {
      "new_leaf_type": "acacia",
      "update_bit": true,
      "persistent_bit": false
    },
    "0b11": {
      "new_leaf_type": "dark_oak",
      "update_bit": true,
      "persistent_bit": false
    },
    "0b100": {
      "new_leaf_type": "acacia",
      "update_bit": false,
      "persistent_bit": true
    },
    "0b101": {
      "new_leaf_type": "dark_oak",
      "update_bit": false,
      "persistent_bit": true
    },
    "0b110": {
      "new_leaf_type": "acacia",
      "update_bit": true,
      "persistent_bit": true
    },
    "0b111": {
      "new_leaf_type": "dark_oak",
      "update_bit": true,
      "persistent_bit": true
    },
    "0b1000": {
      "new_leaf_type": "acacia",
      "update_bit": false,
      "persistent_bit": false
    },
    "0b1001": {
      "new_leaf_type": "dark_oak",
      "update_bit": false,
      "persistent_bit": false
    },
    "0b1010": {
      "new_leaf_type": "acacia",
      "update_bit": true,
      "persistent_bit": false
    },
    "0b1011": {
      "new_leaf_type": "dark_oak",
      "update_bit": true,
      "persistent_bit": false
    },
    "0b1100": {
      "new_leaf_type": "acacia",
      "update_bit": false,
      "persistent_bit": true
    },
    "0b1101": {
      "new_leaf_type": "dark_oak",
      "update_bit": false,
      "persistent_bit": true
    },
    "0b1110": {
      "new_leaf_type": "acacia",
      "update_bit": true,
      "persistent_bit": true
    },
    "0b1111": {
      "new_leaf_type": "dark_oak",
      "update_bit": true,
      "persistent_bit": true
    }
  },
  "minecraft:azalea_leaves_flowered": {
    "default": {
      "update_bit": false,
      "persistent_bit": false
    },
    "support_value": {
      "update_bit": [
        false,
        true
      ],
      "persistent_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "update_bit": false,
      "persistent_bit": false
    }
  },
  "minecraft:azalea_leaves": {
    "default": {
      "update_bit": false,
      "persistent_bit": false
    },
    "support_value": {
      "update_bit": [
        false,
        true
      ],
      "persistent_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "update_bit": false,
      "persistent_bit": false
    }
  },
  "minecraft:lectern": {
    "default": {
      "direction": 0,
      "powered_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "powered_bit": false
    },
    "0b1": {
      "direction": 1,
      "powered_bit": false
    },
    "0b10": {
      "direction": 2,
      "powered_bit": false
    },
    "0b11": {
      "direction": 3,
      "powered_bit": false
    },
    "0b100": {
      "direction": 0,
      "powered_bit": true
    },
    "0b101": {
      "direction": 1,
      "powered_bit": true
    },
    "0b110": {
      "direction": 2,
      "powered_bit": true
    },
    "0b111": {
      "direction": 3,
      "powered_bit": true
    }
  },
  "minecraft:lever": {
    "default": {
      "lever_direction": "down_east_west",
      "open_bit": false
    },
    "support_value": {
      "lever_direction": [
        "down_east_west",
        "east",
        "west",
        "south",
        "north",
        "up_north_south",
        "up_east_west",
        "down_north_south"
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "lever_direction": "down_east_west",
      "open_bit": false
    },
    "0b1": {
      "lever_direction": "east",
      "open_bit": false
    },
    "0b10": {
      "lever_direction": "west",
      "open_bit": false
    },
    "0b11": {
      "lever_direction": "south",
      "open_bit": false
    },
    "0b100": {
      "lever_direction": "north",
      "open_bit": false
    },
    "0b101": {
      "lever_direction": "up_north_south",
      "open_bit": false
    },
    "0b110": {
      "lever_direction": "up_east_west",
      "open_bit": false
    },
    "0b111": {
      "lever_direction": "down_north_south",
      "open_bit": false
    },
    "0b1000": {
      "lever_direction": "down_east_west",
      "open_bit": true
    },
    "0b1001": {
      "lever_direction": "east",
      "open_bit": true
    },
    "0b1010": {
      "lever_direction": "west",
      "open_bit": true
    },
    "0b1011": {
      "lever_direction": "south",
      "open_bit": true
    },
    "0b1100": {
      "lever_direction": "north",
      "open_bit": true
    },
    "0b1101": {
      "lever_direction": "up_north_south",
      "open_bit": true
    },
    "0b1110": {
      "lever_direction": "up_east_west",
      "open_bit": true
    },
    "0b1111": {
      "lever_direction": "down_north_south",
      "open_bit": true
    }
  },
  "minecraft:light_block": {
    "default": {
      "block_light_level": 0
    },
    "support_value": {
      "block_light_level": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "block_light_level": 0
    },
    "0b1": {
      "block_light_level": 1
    },
    "0b10": {
      "block_light_level": 2
    },
    "0b11": {
      "block_light_level": 3
    },
    "0b100": {
      "block_light_level": 4
    },
    "0b101": {
      "block_light_level": 5
    },
    "0b110": {
      "block_light_level": 6
    },
    "0b111": {
      "block_light_level": 7
    },
    "0b1000": {
      "block_light_level": 8
    },
    "0b1001": {
      "block_light_level": 9
    },
    "0b1010": {
      "block_light_level": 10
    },
    "0b1011": {
      "block_light_level": 11
    },
    "0b1100": {
      "block_light_level": 12
    },
    "0b1101": {
      "block_light_level": 13
    },
    "0b1110": {
      "block_light_level": 14
    },
    "0b1111": {
      "block_light_level": 15
    }
  },
  "minecraft:lightning_rod": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 0
    },
    "0b10": {
      "facing_direction": 0
    },
    "0b11": {
      "facing_direction": 0
    },
    "0b100": {
      "facing_direction": 0
    },
    "0b101": {
      "facing_direction": 0
    }
  },
  "minecraft:ladder": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:log": {
    "default": {
      "old_log_type": "jungle",
      "pillar_axis": "y"
    },
    "support_value": {
      "old_log_type": [
        "oak",
        "spruce",
        "birch",
        "jungle"
      ],
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "old_log_type": "oak",
      "pillar_axis": "y"
    },
    "0b1": {
      "old_log_type": "spruce",
      "pillar_axis": "y"
    },
    "0b10": {
      "old_log_type": "birch",
      "pillar_axis": "y"
    },
    "0b11": {
      "old_log_type": "jungle",
      "pillar_axis": "y"
    },
    "0b100": {
      "old_log_type": "oak",
      "pillar_axis": "x"
    },
    "0b101": {
      "old_log_type": "spruce",
      "pillar_axis": "x"
    },
    "0b110": {
      "old_log_type": "birch",
      "pillar_axis": "x"
    },
    "0b111": {
      "old_log_type": "jungle",
      "pillar_axis": "x"
    },
    "0b1000": {
      "old_log_type": "oak",
      "pillar_axis": "z"
    },
    "0b1001": {
      "old_log_type": "spruce",
      "pillar_axis": "z"
    },
    "0b1010": {
      "old_log_type": "birch",
      "pillar_axis": "z"
    },
    "0b1011": {
      "old_log_type": "jungle",
      "pillar_axis": "z"
    }
  },
  "minecraft:log2": {
    "default": {
      "new_log_type": "acacia",
      "pillar_axis": "y"
    },
    "support_value": {
      "new_log_type": [
        "acacia",
        "dark_oak"
      ],
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "new_log_type": "acacia",
      "pillar_axis": "y"
    },
    "0b1": {
      "new_log_type": "dark_oak",
      "pillar_axis": "y"
    },
    "0b10": {
      "new_log_type": "acacia",
      "pillar_axis": "x"
    },
    "0b11": {
      "new_log_type": "dark_oak",
      "pillar_axis": "x"
    },
    "0b100": {
      "new_log_type": "acacia",
      "pillar_axis": "z"
    },
    "0b101": {
      "new_log_type": "dark_oak",
      "pillar_axis": "z"
    }
  },
  "minecraft:muddy_mangrove_roots": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:crimson_stem": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:warped_stem": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:stripped_spruce_log": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:stripped_birch_log": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:stripped_jungle_log": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:stripped_acacia_log": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:stripped_dark_oak_log": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:stripped_oak_log": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:stripped_crimson_stem": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:stripped_warped_stem": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    },
    "0b1": {
      "pillar_axis": "x"
    },
    "0b10": {
      "pillar_axis": "z"
    }
  },
  "minecraft:loom": {
    "default": {
      "direction": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "direction": 0
    },
    "0b1": {
      "direction": 1
    },
    "0b10": {
      "direction": 2
    },
    "0b11": {
      "direction": 3
    }
  },
  "minecraft:melon_stem": {
    "default": {
      "growth": 0,
      "facing_direction": 0
    },
    "support_value": {
      "growth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "growth": 0,
      "facing_direction": 0
    },
    "0b1": {
      "growth": 1,
      "facing_direction": 0
    },
    "0b10": {
      "growth": 2,
      "facing_direction": 0
    },
    "0b11": {
      "growth": 3,
      "facing_direction": 0
    },
    "0b100": {
      "growth": 4,
      "facing_direction": 0
    },
    "0b101": {
      "growth": 5,
      "facing_direction": 0
    },
    "0b110": {
      "growth": 6,
      "facing_direction": 0
    },
    "0b111": {
      "growth": 7,
      "facing_direction": 0
    }
  },
  "minecraft:skull": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:brown_mushroom_block": {
    "default": {
      "huge_mushroom_bits": 0
    },
    "support_value": {
      "huge_mushroom_bits": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "huge_mushroom_bits": 0
    },
    "0b1": {
      "huge_mushroom_bits": 1
    },
    "0b10": {
      "huge_mushroom_bits": 2
    },
    "0b11": {
      "huge_mushroom_bits": 3
    },
    "0b100": {
      "huge_mushroom_bits": 4
    },
    "0b101": {
      "huge_mushroom_bits": 5
    },
    "0b110": {
      "huge_mushroom_bits": 6
    },
    "0b111": {
      "huge_mushroom_bits": 7
    },
    "0b1000": {
      "huge_mushroom_bits": 8
    },
    "0b1001": {
      "huge_mushroom_bits": 9
    },
    "0b1010": {
      "huge_mushroom_bits": 10
    },
    "0b1011": {
      "huge_mushroom_bits": 11
    },
    "0b1100": {
      "huge_mushroom_bits": 12
    },
    "0b1101": {
      "huge_mushroom_bits": 13
    },
    "0b1110": {
      "huge_mushroom_bits": 14
    },
    "0b1111": {
      "huge_mushroom_bits": 15
    }
  },
  "minecraft:red_mushroom_block": {
    "default": {
      "huge_mushroom_bits": 0
    },
    "support_value": {
      "huge_mushroom_bits": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "huge_mushroom_bits": 0
    },
    "0b1": {
      "huge_mushroom_bits": 1
    },
    "0b10": {
      "huge_mushroom_bits": 2
    },
    "0b11": {
      "huge_mushroom_bits": 3
    },
    "0b100": {
      "huge_mushroom_bits": 4
    },
    "0b101": {
      "huge_mushroom_bits": 5
    },
    "0b110": {
      "huge_mushroom_bits": 6
    },
    "0b111": {
      "huge_mushroom_bits": 7
    },
    "0b1000": {
      "huge_mushroom_bits": 8
    },
    "0b1001": {
      "huge_mushroom_bits": 9
    },
    "0b1010": {
      "huge_mushroom_bits": 10
    },
    "0b1011": {
      "huge_mushroom_bits": 11
    },
    "0b1100": {
      "huge_mushroom_bits": 12
    },
    "0b1101": {
      "huge_mushroom_bits": 13
    },
    "0b1110": {
      "huge_mushroom_bits": 14
    },
    "0b1111": {
      "huge_mushroom_bits": 15
    }
  },
  "minecraft:portal": {
    "default": {
      "portal_axis": "x"
    },
    "support_value": {
      "portal_axis": [
        "unknown",
        "x",
        "z"
      ]
    },
    "0b0": {
      "portal_axis": "unknown"
    },
    "0b1": {
      "portal_axis": "x"
    },
    "0b10": {
      "portal_axis": "z"
    }
  },
  "minecraft:observer": {
    "default": {
      "direction": 0,
      "powered_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "powered_bit": false
    },
    "0b1": {
      "direction": 1,
      "powered_bit": false
    },
    "0b10": {
      "direction": 2,
      "powered_bit": false
    },
    "0b11": {
      "direction": 3,
      "powered_bit": false
    },
    "0b100": {
      "direction": 4,
      "powered_bit": false
    },
    "0b101": {
      "direction": 5,
      "powered_bit": false
    },
    "0b1000": {
      "direction": 0,
      "powered_bit": true
    },
    "0b1001": {
      "direction": 1,
      "powered_bit": true
    },
    "0b1010": {
      "direction": 2,
      "powered_bit": true
    },
    "0b1011": {
      "direction": 3,
      "powered_bit": true
    },
    "0b1100": {
      "direction": 4,
      "powered_bit": true
    },
    "0b1101": {
      "direction": 5,
      "powered_bit": true
    }
  },
  "minecraft:piston": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:sticky_piston": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:piston_arm_collision": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:sticky_piston_arm_collision": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:planks": {
    "default": {
      "wood_type": "oak"
    },
    "support_value": {
      "wood_type": [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak"
      ]
    },
    "0b0": {
      "wood_type": "oak"
    },
    "0b1": {
      "wood_type": "spruce"
    },
    "0b10": {
      "wood_type": "birch"
    },
    "0b11": {
      "wood_type": "jungle"
    },
    "0b100": {
      "wood_type": "acacia"
    },
    "0b101": {
      "wood_type": "dark_oak"
    }
  },
  "minecraft:pointed_dripstone": {
    "default": {
      "dripstone_thickness": "tip",
      "hanging": true
    },
    "support_value": {
      "dripstone_thickness": [
        "tip",
        "merge",
        "frustum",
        "middle",
        "base"
      ],
      "hanging": [
        false,
        true
      ]
    },
    "0b0": {
      "dripstone_thickness": "tip",
      "hanging": true
    }
  },
  "minecraft:redstone_wire": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    },
    "0b10": {
      "redstone_signal": 2
    },
    "0b11": {
      "redstone_signal": 3
    },
    "0b100": {
      "redstone_signal": 4
    },
    "0b101": {
      "redstone_signal": 5
    },
    "0b110": {
      "redstone_signal": 6
    },
    "0b111": {
      "redstone_signal": 7
    },
    "0b1000": {
      "redstone_signal": 8
    },
    "0b1001": {
      "redstone_signal": 9
    },
    "0b1010": {
      "redstone_signal": 10
    },
    "0b1011": {
      "redstone_signal": 11
    },
    "0b1100": {
      "redstone_signal": 12
    },
    "0b1101": {
      "redstone_signal": 13
    },
    "0b1110": {
      "redstone_signal": 14
    },
    "0b1111": {
      "redstone_signal": 15
    }
  },
  "minecraft:light_weighted_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    },
    "0b10": {
      "redstone_signal": 2
    },
    "0b11": {
      "redstone_signal": 3
    },
    "0b100": {
      "redstone_signal": 4
    },
    "0b101": {
      "redstone_signal": 5
    },
    "0b110": {
      "redstone_signal": 6
    },
    "0b111": {
      "redstone_signal": 7
    },
    "0b1000": {
      "redstone_signal": 8
    },
    "0b1001": {
      "redstone_signal": 9
    },
    "0b1010": {
      "redstone_signal": 10
    },
    "0b1011": {
      "redstone_signal": 11
    },
    "0b1100": {
      "redstone_signal": 12
    },
    "0b1101": {
      "redstone_signal": 13
    },
    "0b1110": {
      "redstone_signal": 14
    },
    "0b1111": {
      "redstone_signal": 15
    }
  },
  "minecraft:heavy_weighted_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    },
    "0b10": {
      "redstone_signal": 2
    },
    "0b11": {
      "redstone_signal": 3
    },
    "0b100": {
      "redstone_signal": 4
    },
    "0b101": {
      "redstone_signal": 5
    },
    "0b110": {
      "redstone_signal": 6
    },
    "0b111": {
      "redstone_signal": 7
    },
    "0b1000": {
      "redstone_signal": 8
    },
    "0b1001": {
      "redstone_signal": 9
    },
    "0b1010": {
      "redstone_signal": 10
    },
    "0b1011": {
      "redstone_signal": 11
    },
    "0b1100": {
      "redstone_signal": 12
    },
    "0b1101": {
      "redstone_signal": 13
    },
    "0b1110": {
      "redstone_signal": 14
    },
    "0b1111": {
      "redstone_signal": 15
    }
  },
  "minecraft:stone_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:polished_blackstone_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:wooden_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:spruce_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:birch_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:jungle_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:acacia_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:dark_oak_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:mangrove_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:crimson_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:warped_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    },
    "0b1": {
      "redstone_signal": 1
    }
  },
  "minecraft:prismarine": {
    "default": {
      "prismarine_block_type": "default"
    },
    "support_value": {
      "prismarine_block_type": [
        "default",
        "dark",
        "bricks"
      ]
    },
    "0b0": {
      "prismarine_block_type": "default"
    },
    "0b1": {
      "prismarine_block_type": "dark"
    },
    "0b10": {
      "prismarine_block_type": "bricks"
    }
  },
  "minecraft:pumpkin_stem": {
    "default": {
      "growth": 0,
      "facing_direction": 0
    },
    "support_value": {
      "growth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "growth": 0,
      "facing_direction": 0
    },
    "0b1": {
      "growth": 1,
      "facing_direction": 0
    },
    "0b10": {
      "growth": 2,
      "facing_direction": 0
    },
    "0b11": {
      "growth": 3,
      "facing_direction": 0
    },
    "0b100": {
      "growth": 4,
      "facing_direction": 0
    },
    "0b101": {
      "growth": 5,
      "facing_direction": 0
    },
    "0b110": {
      "growth": 6,
      "facing_direction": 0
    },
    "0b111": {
      "growth": 7,
      "facing_direction": 0
    }
  },
  "minecraft:purpur_block": {
    "default": {
      "chisel_type": "default",
      "pillar_axis": "y"
    },
    "support_value": {
      "chisel_type": [
        "default",
        "chiseled",
        "lines",
        "smooth"
      ],
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "chisel_type": "default",
      "pillar_axis": "y"
    },
    "0b1": {
      "chisel_type": "chiseled",
      "pillar_axis": "y"
    },
    "0b10": {
      "chisel_type": "lines",
      "pillar_axis": "y"
    },
    "0b11": {
      "chisel_type": "smooth",
      "pillar_axis": "y"
    },
    "0b100": {
      "chisel_type": "default",
      "pillar_axis": "x"
    },
    "0b101": {
      "chisel_type": "chiseled",
      "pillar_axis": "x"
    },
    "0b110": {
      "chisel_type": "lines",
      "pillar_axis": "x"
    },
    "0b111": {
      "chisel_type": "smooth",
      "pillar_axis": "x"
    },
    "0b1000": {
      "chisel_type": "default",
      "pillar_axis": "z"
    },
    "0b1001": {
      "chisel_type": "chiseled",
      "pillar_axis": "z"
    },
    "0b1010": {
      "chisel_type": "lines",
      "pillar_axis": "z"
    },
    "0b1011": {
      "chisel_type": "smooth",
      "pillar_axis": "z"
    }
  },
  "minecraft:quartz_block": {
    "default": {
      "chisel_type": "default",
      "pillar_axis": "y"
    },
    "support_value": {
      "chisel_type": [
        "default",
        "chiseled",
        "lines",
        "smooth"
      ],
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "chisel_type": "default",
      "pillar_axis": "y"
    },
    "0b1": {
      "chisel_type": "chiseled",
      "pillar_axis": "y"
    },
    "0b10": {
      "chisel_type": "lines",
      "pillar_axis": "y"
    },
    "0b11": {
      "chisel_type": "smooth",
      "pillar_axis": "y"
    },
    "0b100": {
      "chisel_type": "default",
      "pillar_axis": "x"
    },
    "0b101": {
      "chisel_type": "chiseled",
      "pillar_axis": "x"
    },
    "0b110": {
      "chisel_type": "lines",
      "pillar_axis": "x"
    },
    "0b111": {
      "chisel_type": "smooth",
      "pillar_axis": "x"
    },
    "0b1000": {
      "chisel_type": "default",
      "pillar_axis": "z"
    },
    "0b1001": {
      "chisel_type": "chiseled",
      "pillar_axis": "z"
    },
    "0b1010": {
      "chisel_type": "lines",
      "pillar_axis": "z"
    },
    "0b1011": {
      "chisel_type": "smooth",
      "pillar_axis": "z"
    }
  },
  "minecraft:quartz_bricks": {
    "default": {
      "chisel_type": "default",
      "pillar_axis": "y"
    },
    "support_value": {
      "chisel_type": [
        "default",
        "chiseled",
        "lines",
        "smooth"
      ],
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "chisel_type": "default",
      "pillar_axis": "y"
    },
    "0b1": {
      "chisel_type": "chiseled",
      "pillar_axis": "y"
    },
    "0b10": {
      "chisel_type": "lines",
      "pillar_axis": "y"
    },
    "0b11": {
      "chisel_type": "smooth",
      "pillar_axis": "y"
    },
    "0b100": {
      "chisel_type": "default",
      "pillar_axis": "x"
    },
    "0b101": {
      "chisel_type": "chiseled",
      "pillar_axis": "x"
    },
    "0b110": {
      "chisel_type": "lines",
      "pillar_axis": "x"
    },
    "0b111": {
      "chisel_type": "smooth",
      "pillar_axis": "x"
    },
    "0b1000": {
      "chisel_type": "default",
      "pillar_axis": "z"
    },
    "0b1001": {
      "chisel_type": "chiseled",
      "pillar_axis": "z"
    },
    "0b1010": {
      "chisel_type": "lines",
      "pillar_axis": "z"
    },
    "0b1011": {
      "chisel_type": "smooth",
      "pillar_axis": "z"
    }
  },
  "minecraft:rail": {
    "default": {
      "rail_direction": 0
    },
    "support_value": {
      "rail_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    "0b0": {
      "rail_direction": 0
    },
    "0b1": {
      "rail_direction": 1
    },
    "0b10": {
      "rail_direction": 2
    },
    "0b11": {
      "rail_direction": 3
    },
    "0b100": {
      "rail_direction": 4
    },
    "0b101": {
      "rail_direction": 5
    },
    "0b110": {
      "rail_direction": 6
    },
    "0b111": {
      "rail_direction": 7
    },
    "0b1000": {
      "rail_direction": 8
    },
    "0b1001": {
      "rail_direction": 9
    }
  },
  "minecraft:activator_rail": {
    "default": {
      "rail_direction": 0,
      "rail_data_bit": false
    },
    "support_value": {
      "rail_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "rail_data_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "rail_direction": 0,
      "rail_data_bit": false
    },
    "0b1": {
      "rail_direction": 1,
      "rail_data_bit": false
    },
    "0b10": {
      "rail_direction": 2,
      "rail_data_bit": false
    },
    "0b11": {
      "rail_direction": 3,
      "rail_data_bit": false
    },
    "0b100": {
      "rail_direction": 4,
      "rail_data_bit": false
    },
    "0b101": {
      "rail_direction": 5,
      "rail_data_bit": false
    },
    "0b1000": {
      "rail_direction": 0,
      "rail_data_bit": true
    },
    "0b1001": {
      "rail_direction": 1,
      "rail_data_bit": true
    },
    "0b1010": {
      "rail_direction": 2,
      "rail_data_bit": true
    },
    "0b1011": {
      "rail_direction": 3,
      "rail_data_bit": true
    },
    "0b1100": {
      "rail_direction": 4,
      "rail_data_bit": true
    },
    "0b1101": {
      "rail_direction": 5,
      "rail_data_bit": true
    }
  },
  "minecraft:detector_rail": {
    "default": {
      "rail_direction": 0,
      "rail_data_bit": false
    },
    "support_value": {
      "rail_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "rail_data_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "rail_direction": 0,
      "rail_data_bit": false
    },
    "0b1": {
      "rail_direction": 1,
      "rail_data_bit": false
    },
    "0b10": {
      "rail_direction": 2,
      "rail_data_bit": false
    },
    "0b11": {
      "rail_direction": 3,
      "rail_data_bit": false
    },
    "0b100": {
      "rail_direction": 4,
      "rail_data_bit": false
    },
    "0b101": {
      "rail_direction": 5,
      "rail_data_bit": false
    },
    "0b1000": {
      "rail_direction": 0,
      "rail_data_bit": true
    },
    "0b1001": {
      "rail_direction": 1,
      "rail_data_bit": true
    },
    "0b1010": {
      "rail_direction": 2,
      "rail_data_bit": true
    },
    "0b1011": {
      "rail_direction": 3,
      "rail_data_bit": true
    },
    "0b1100": {
      "rail_direction": 4,
      "rail_data_bit": true
    },
    "0b1101": {
      "rail_direction": 5,
      "rail_data_bit": true
    }
  },
  "minecraft:golden_rail": {
    "default": {
      "rail_direction": 0,
      "rail_data_bit": false
    },
    "support_value": {
      "rail_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "rail_data_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "rail_direction": 0,
      "rail_data_bit": false
    },
    "0b1": {
      "rail_direction": 1,
      "rail_data_bit": false
    },
    "0b10": {
      "rail_direction": 2,
      "rail_data_bit": false
    },
    "0b11": {
      "rail_direction": 3,
      "rail_data_bit": false
    },
    "0b100": {
      "rail_direction": 4,
      "rail_data_bit": false
    },
    "0b101": {
      "rail_direction": 5,
      "rail_data_bit": false
    },
    "0b1000": {
      "rail_direction": 0,
      "rail_data_bit": true
    },
    "0b1001": {
      "rail_direction": 1,
      "rail_data_bit": true
    },
    "0b1010": {
      "rail_direction": 2,
      "rail_data_bit": true
    },
    "0b1011": {
      "rail_direction": 3,
      "rail_data_bit": true
    },
    "0b1100": {
      "rail_direction": 4,
      "rail_data_bit": true
    },
    "0b1101": {
      "rail_direction": 5,
      "rail_data_bit": true
    }
  },
  "minecraft:unpowered_comparator": {
    "default": {
      "direction": 0,
      "output_subtract_bit": false,
      "output_lit_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "output_subtract_bit": [
        false,
        true
      ],
      "output_lit_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "output_subtract_bit": false,
      "output_lit_bit": false
    },
    "0b1": {
      "direction": 1,
      "output_subtract_bit": false,
      "output_lit_bit": false
    },
    "0b10": {
      "direction": 2,
      "output_subtract_bit": false,
      "output_lit_bit": false
    },
    "0b11": {
      "direction": 3,
      "output_subtract_bit": false,
      "output_lit_bit": false
    },
    "0b100": {
      "direction": 0,
      "output_subtract_bit": true,
      "output_lit_bit": false
    },
    "0b101": {
      "direction": 1,
      "output_subtract_bit": true,
      "output_lit_bit": false
    },
    "0b110": {
      "direction": 2,
      "output_subtract_bit": true,
      "output_lit_bit": false
    },
    "0b111": {
      "direction": 3,
      "output_subtract_bit": true,
      "output_lit_bit": false
    },
    "0b1000": {
      "direction": 0,
      "output_subtract_bit": false,
      "output_lit_bit": true
    },
    "0b1001": {
      "direction": 1,
      "output_subtract_bit": false,
      "output_lit_bit": true
    },
    "0b1010": {
      "direction": 2,
      "output_subtract_bit": false,
      "output_lit_bit": true
    },
    "0b1011": {
      "direction": 3,
      "output_subtract_bit": false,
      "output_lit_bit": true
    },
    "0b1100": {
      "direction": 0,
      "output_subtract_bit": true,
      "output_lit_bit": true
    },
    "0b1101": {
      "direction": 1,
      "output_subtract_bit": true,
      "output_lit_bit": true
    },
    "0b1110": {
      "direction": 2,
      "output_subtract_bit": true,
      "output_lit_bit": true
    },
    "0b1111": {
      "direction": 3,
      "output_subtract_bit": true,
      "output_lit_bit": true
    }
  },
  "minecraft:powered_comparator": {
    "default": {
      "direction": 0,
      "output_subtract_bit": false,
      "output_lit_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "output_subtract_bit": [
        false,
        true
      ],
      "output_lit_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "output_subtract_bit": false,
      "output_lit_bit": false
    },
    "0b1": {
      "direction": 1,
      "output_subtract_bit": false,
      "output_lit_bit": false
    },
    "0b10": {
      "direction": 2,
      "output_subtract_bit": false,
      "output_lit_bit": false
    },
    "0b11": {
      "direction": 3,
      "output_subtract_bit": false,
      "output_lit_bit": false
    },
    "0b100": {
      "direction": 0,
      "output_subtract_bit": true,
      "output_lit_bit": false
    },
    "0b101": {
      "direction": 1,
      "output_subtract_bit": true,
      "output_lit_bit": false
    },
    "0b110": {
      "direction": 2,
      "output_subtract_bit": true,
      "output_lit_bit": false
    },
    "0b111": {
      "direction": 3,
      "output_subtract_bit": true,
      "output_lit_bit": false
    },
    "0b1000": {
      "direction": 0,
      "output_subtract_bit": false,
      "output_lit_bit": true
    },
    "0b1001": {
      "direction": 1,
      "output_subtract_bit": false,
      "output_lit_bit": true
    },
    "0b1010": {
      "direction": 2,
      "output_subtract_bit": false,
      "output_lit_bit": true
    },
    "0b1011": {
      "direction": 3,
      "output_subtract_bit": false,
      "output_lit_bit": true
    },
    "0b1100": {
      "direction": 0,
      "output_subtract_bit": true,
      "output_lit_bit": true
    },
    "0b1101": {
      "direction": 1,
      "output_subtract_bit": true,
      "output_lit_bit": true
    },
    "0b1110": {
      "direction": 2,
      "output_subtract_bit": true,
      "output_lit_bit": true
    },
    "0b1111": {
      "direction": 3,
      "output_subtract_bit": true,
      "output_lit_bit": true
    }
  },
  "minecraft:unpowered_repeater": {
    "default": {
      "direction": 0,
      "repeater_delay": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "repeater_delay": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "direction": 0,
      "repeater_delay": 0
    },
    "0b1": {
      "direction": 1,
      "repeater_delay": 0
    },
    "0b10": {
      "direction": 2,
      "repeater_delay": 0
    },
    "0b11": {
      "direction": 3,
      "repeater_delay": 0
    },
    "0b100": {
      "direction": 0,
      "repeater_delay": 1
    },
    "0b101": {
      "direction": 1,
      "repeater_delay": 1
    },
    "0b110": {
      "direction": 2,
      "repeater_delay": 1
    },
    "0b111": {
      "direction": 3,
      "repeater_delay": 1
    },
    "0b1000": {
      "direction": 0,
      "repeater_delay": 2
    },
    "0b1001": {
      "direction": 1,
      "repeater_delay": 2
    },
    "0b1010": {
      "direction": 2,
      "repeater_delay": 2
    },
    "0b1011": {
      "direction": 3,
      "repeater_delay": 2
    },
    "0b1100": {
      "direction": 0,
      "repeater_delay": 3
    },
    "0b1101": {
      "direction": 1,
      "repeater_delay": 3
    },
    "0b1110": {
      "direction": 2,
      "repeater_delay": 3
    },
    "0b1111": {
      "direction": 3,
      "repeater_delay": 3
    }
  },
  "minecraft:powered_repeater": {
    "default": {
      "direction": 0,
      "repeater_delay": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "repeater_delay": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "direction": 0,
      "repeater_delay": 0
    },
    "0b1": {
      "direction": 1,
      "repeater_delay": 0
    },
    "0b10": {
      "direction": 2,
      "repeater_delay": 0
    },
    "0b11": {
      "direction": 3,
      "repeater_delay": 0
    },
    "0b100": {
      "direction": 0,
      "repeater_delay": 1
    },
    "0b101": {
      "direction": 1,
      "repeater_delay": 1
    },
    "0b110": {
      "direction": 2,
      "repeater_delay": 1
    },
    "0b111": {
      "direction": 3,
      "repeater_delay": 1
    },
    "0b1000": {
      "direction": 0,
      "repeater_delay": 2
    },
    "0b1001": {
      "direction": 1,
      "repeater_delay": 2
    },
    "0b1010": {
      "direction": 2,
      "repeater_delay": 2
    },
    "0b1011": {
      "direction": 3,
      "repeater_delay": 2
    },
    "0b1100": {
      "direction": 0,
      "repeater_delay": 3
    },
    "0b1101": {
      "direction": 1,
      "repeater_delay": 3
    },
    "0b1110": {
      "direction": 2,
      "repeater_delay": 3
    },
    "0b1111": {
      "direction": 3,
      "repeater_delay": 3
    }
  },
  "minecraft:respawn_anchor": {
    "default": {
      "respawn_anchor_charge": 0
    },
    "support_value": {
      "respawn_anchor_charge": [
        0,
        1,
        2,
        3,
        4
      ]
    },
    "0b0": {
      "respawn_anchor_charge": 0
    },
    "0b1": {
      "respawn_anchor_charge": 1
    },
    "0b10": {
      "respawn_anchor_charge": 2
    },
    "0b11": {
      "respawn_anchor_charge": 3
    },
    "0b100": {
      "respawn_anchor_charge": 4
    }
  },
  "minecraft:sand": {
    "default": {
      "sand_type": "normal"
    },
    "support_value": {
      "sand_type": [
        "normal",
        "red"
      ]
    },
    "0b0": {
      "sand_type": "normal"
    },
    "0b1": {
      "sand_type": "red"
    }
  },
  "minecraft:sandstone": {
    "default": {
      "sand_stone_type": "default"
    },
    "support_value": {
      "sand_stone_type": [
        "default",
        "heiroglyphs",
        "cut",
        "smooth"
      ]
    },
    "0b0": {
      "sand_stone_type": "default"
    },
    "0b1": {
      "sand_stone_type": "heiroglyphs"
    },
    "0b10": {
      "sand_stone_type": "cut"
    },
    "0b11": {
      "sand_stone_type": "smooth"
    }
  },
  "minecraft:red_sandstone": {
    "default": {
      "sand_stone_type": "default"
    },
    "support_value": {
      "sand_stone_type": [
        "default",
        "heiroglyphs",
        "cut",
        "smooth"
      ]
    },
    "0b0": {
      "sand_stone_type": "default"
    },
    "0b1": {
      "sand_stone_type": "heiroglyphs"
    },
    "0b10": {
      "sand_stone_type": "cut"
    },
    "0b11": {
      "sand_stone_type": "smooth"
    }
  },
  "minecraft:sapling": {
    "default": {
      "sapling_type": "oak",
      "age_bit": false
    },
    "support_value": {
      "sapling_type": [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak"
      ],
      "age_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "sapling_type": "oak",
      "age_bit": false
    },
    "0b1": {
      "sapling_type": "spruce",
      "age_bit": false
    },
    "0b10": {
      "sapling_type": "birch",
      "age_bit": false
    },
    "0b11": {
      "sapling_type": "jungle",
      "age_bit": false
    },
    "0b100": {
      "sapling_type": "acacia",
      "age_bit": false
    },
    "0b101": {
      "sapling_type": "dark_oak",
      "age_bit": false
    },
    "0b1000": {
      "sapling_type": "oak",
      "age_bit": true
    },
    "0b1001": {
      "sapling_type": "spruce",
      "age_bit": true
    },
    "0b1010": {
      "sapling_type": "birch",
      "age_bit": true
    },
    "0b1011": {
      "sapling_type": "jungle",
      "age_bit": true
    },
    "0b1100": {
      "sapling_type": "acacia",
      "age_bit": true
    },
    "0b1101": {
      "sapling_type": "dark_oak",
      "age_bit": true
    }
  },
  "minecraft:scaffolding": {
    "default": {
      "stability_check": false,
      "stability": 7
    },
    "support_value": {
      "stability_check": [
        false,
        true
      ],
      "stability": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    },
    "0b0": {
      "stability_check": false,
      "stability": 0
    },
    "0b1": {
      "stability_check": false,
      "stability": 1
    },
    "0b10": {
      "stability_check": false,
      "stability": 2
    },
    "0b11": {
      "stability_check": false,
      "stability": 3
    },
    "0b100": {
      "stability_check": false,
      "stability": 4
    },
    "0b101": {
      "stability_check": false,
      "stability": 5
    },
    "0b110": {
      "stability_check": false,
      "stability": 6
    },
    "0b111": {
      "stability_check": false,
      "stability": 7
    },
    "0b1000": {
      "stability_check": true,
      "stability": 0
    },
    "0b1001": {
      "stability_check": true,
      "stability": 1
    },
    "0b1010": {
      "stability_check": true,
      "stability": 2
    },
    "0b1011": {
      "stability_check": true,
      "stability": 3
    },
    "0b1100": {
      "stability_check": true,
      "stability": 4
    },
    "0b1101": {
      "stability_check": true,
      "stability": 5
    },
    "0b1110": {
      "stability_check": true,
      "stability": 6
    },
    "0b1111": {
      "stability_check": true,
      "stability": 7
    }
  },
  "minecraft:sculk_catalyst": {
    "default": {
      "bloom": 0
    },
    "support_value": {
      "bloom": [
        0,
        1
      ]
    },
    "0b0": {
      "bloom": 0
    },
    "0b1": {
      "bloom": 1
    }
  },
  "minecraft:sculk_sensor": {
    "default": {
      "powered_bit": false
    },
    "support_value": {
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "powered_bit": false
    }
  },
  "minecraft:sculk_shrieker": {
    "default": {
      "active": 0,
      "can_summon": false
    },
    "support_value": {
      "active": [
        0,
        1
      ],
      "can_summon": [
        false,
        true
      ]
    },
    "0b0": {
      "active": 0,
      "can_summon": false
    }
  },
  "minecraft:sea_pickle": {
    "default": {
      "cluster_count": 0,
      "dead_bit": false
    },
    "support_value": {
      "cluster_count": [
        0,
        1,
        2,
        3
      ],
      "dead_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "cluster_count": 0,
      "dead_bit": false
    },
    "0b1": {
      "cluster_count": 1,
      "dead_bit": false
    },
    "0b10": {
      "cluster_count": 2,
      "dead_bit": false
    },
    "0b11": {
      "cluster_count": 3,
      "dead_bit": false
    },
    "0b100": {
      "cluster_count": 0,
      "dead_bit": true
    },
    "0b101": {
      "cluster_count": 1,
      "dead_bit": true
    },
    "0b110": {
      "cluster_count": 2,
      "dead_bit": true
    },
    "0b111": {
      "cluster_count": 3,
      "dead_bit": true
    }
  },
  "minecraft:wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:spruce_wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:birch_wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:jungle_wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:acacia_wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:darkoak_wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:crimson_wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:warped_wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:mangrove_wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    },
    "0b1": {
      "ground_sign_direction": 1
    },
    "0b10": {
      "ground_sign_direction": 2
    },
    "0b11": {
      "ground_sign_direction": 3
    },
    "0b100": {
      "ground_sign_direction": 4
    },
    "0b101": {
      "ground_sign_direction": 5
    },
    "0b110": {
      "ground_sign_direction": 6
    },
    "0b111": {
      "ground_sign_direction": 7
    },
    "0b1000": {
      "ground_sign_direction": 8
    },
    "0b1001": {
      "ground_sign_direction": 9
    },
    "0b1010": {
      "ground_sign_direction": 10
    },
    "0b1011": {
      "ground_sign_direction": 11
    },
    "0b1100": {
      "ground_sign_direction": 12
    },
    "0b1101": {
      "ground_sign_direction": 13
    },
    "0b1110": {
      "ground_sign_direction": 14
    },
    "0b1111": {
      "ground_sign_direction": 15
    }
  },
  "minecraft:spruce_standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    },
    "0b1": {
      "ground_sign_direction": 1
    },
    "0b10": {
      "ground_sign_direction": 2
    },
    "0b11": {
      "ground_sign_direction": 3
    },
    "0b100": {
      "ground_sign_direction": 4
    },
    "0b101": {
      "ground_sign_direction": 5
    },
    "0b110": {
      "ground_sign_direction": 6
    },
    "0b111": {
      "ground_sign_direction": 7
    },
    "0b1000": {
      "ground_sign_direction": 8
    },
    "0b1001": {
      "ground_sign_direction": 9
    },
    "0b1010": {
      "ground_sign_direction": 10
    },
    "0b1011": {
      "ground_sign_direction": 11
    },
    "0b1100": {
      "ground_sign_direction": 12
    },
    "0b1101": {
      "ground_sign_direction": 13
    },
    "0b1110": {
      "ground_sign_direction": 14
    },
    "0b1111": {
      "ground_sign_direction": 15
    }
  },
  "minecraft:birch_standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    },
    "0b1": {
      "ground_sign_direction": 1
    },
    "0b10": {
      "ground_sign_direction": 2
    },
    "0b11": {
      "ground_sign_direction": 3
    },
    "0b100": {
      "ground_sign_direction": 4
    },
    "0b101": {
      "ground_sign_direction": 5
    },
    "0b110": {
      "ground_sign_direction": 6
    },
    "0b111": {
      "ground_sign_direction": 7
    },
    "0b1000": {
      "ground_sign_direction": 8
    },
    "0b1001": {
      "ground_sign_direction": 9
    },
    "0b1010": {
      "ground_sign_direction": 10
    },
    "0b1011": {
      "ground_sign_direction": 11
    },
    "0b1100": {
      "ground_sign_direction": 12
    },
    "0b1101": {
      "ground_sign_direction": 13
    },
    "0b1110": {
      "ground_sign_direction": 14
    },
    "0b1111": {
      "ground_sign_direction": 15
    }
  },
  "minecraft:jungle_standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    },
    "0b1": {
      "ground_sign_direction": 1
    },
    "0b10": {
      "ground_sign_direction": 2
    },
    "0b11": {
      "ground_sign_direction": 3
    },
    "0b100": {
      "ground_sign_direction": 4
    },
    "0b101": {
      "ground_sign_direction": 5
    },
    "0b110": {
      "ground_sign_direction": 6
    },
    "0b111": {
      "ground_sign_direction": 7
    },
    "0b1000": {
      "ground_sign_direction": 8
    },
    "0b1001": {
      "ground_sign_direction": 9
    },
    "0b1010": {
      "ground_sign_direction": 10
    },
    "0b1011": {
      "ground_sign_direction": 11
    },
    "0b1100": {
      "ground_sign_direction": 12
    },
    "0b1101": {
      "ground_sign_direction": 13
    },
    "0b1110": {
      "ground_sign_direction": 14
    },
    "0b1111": {
      "ground_sign_direction": 15
    }
  },
  "minecraft:acacia_standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    },
    "0b1": {
      "ground_sign_direction": 1
    },
    "0b10": {
      "ground_sign_direction": 2
    },
    "0b11": {
      "ground_sign_direction": 3
    },
    "0b100": {
      "ground_sign_direction": 4
    },
    "0b101": {
      "ground_sign_direction": 5
    },
    "0b110": {
      "ground_sign_direction": 6
    },
    "0b111": {
      "ground_sign_direction": 7
    },
    "0b1000": {
      "ground_sign_direction": 8
    },
    "0b1001": {
      "ground_sign_direction": 9
    },
    "0b1010": {
      "ground_sign_direction": 10
    },
    "0b1011": {
      "ground_sign_direction": 11
    },
    "0b1100": {
      "ground_sign_direction": 12
    },
    "0b1101": {
      "ground_sign_direction": 13
    },
    "0b1110": {
      "ground_sign_direction": 14
    },
    "0b1111": {
      "ground_sign_direction": 15
    }
  },
  "minecraft:darkoak_standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    },
    "0b1": {
      "ground_sign_direction": 1
    },
    "0b10": {
      "ground_sign_direction": 2
    },
    "0b11": {
      "ground_sign_direction": 3
    },
    "0b100": {
      "ground_sign_direction": 4
    },
    "0b101": {
      "ground_sign_direction": 5
    },
    "0b110": {
      "ground_sign_direction": 6
    },
    "0b111": {
      "ground_sign_direction": 7
    },
    "0b1000": {
      "ground_sign_direction": 8
    },
    "0b1001": {
      "ground_sign_direction": 9
    },
    "0b1010": {
      "ground_sign_direction": 10
    },
    "0b1011": {
      "ground_sign_direction": 11
    },
    "0b1100": {
      "ground_sign_direction": 12
    },
    "0b1101": {
      "ground_sign_direction": 13
    },
    "0b1110": {
      "ground_sign_direction": 14
    },
    "0b1111": {
      "ground_sign_direction": 15
    }
  },
  "minecraft:crimson_standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    },
    "0b1": {
      "ground_sign_direction": 1
    },
    "0b10": {
      "ground_sign_direction": 2
    },
    "0b11": {
      "ground_sign_direction": 3
    },
    "0b100": {
      "ground_sign_direction": 4
    },
    "0b101": {
      "ground_sign_direction": 5
    },
    "0b110": {
      "ground_sign_direction": 6
    },
    "0b111": {
      "ground_sign_direction": 7
    },
    "0b1000": {
      "ground_sign_direction": 8
    },
    "0b1001": {
      "ground_sign_direction": 9
    },
    "0b1010": {
      "ground_sign_direction": 10
    },
    "0b1011": {
      "ground_sign_direction": 11
    },
    "0b1100": {
      "ground_sign_direction": 12
    },
    "0b1101": {
      "ground_sign_direction": 13
    },
    "0b1110": {
      "ground_sign_direction": 14
    },
    "0b1111": {
      "ground_sign_direction": 15
    }
  },
  "minecraft:warped_standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    },
    "0b1": {
      "ground_sign_direction": 1
    },
    "0b10": {
      "ground_sign_direction": 2
    },
    "0b11": {
      "ground_sign_direction": 3
    },
    "0b100": {
      "ground_sign_direction": 4
    },
    "0b101": {
      "ground_sign_direction": 5
    },
    "0b110": {
      "ground_sign_direction": 6
    },
    "0b111": {
      "ground_sign_direction": 7
    },
    "0b1000": {
      "ground_sign_direction": 8
    },
    "0b1001": {
      "ground_sign_direction": 9
    },
    "0b1010": {
      "ground_sign_direction": 10
    },
    "0b1011": {
      "ground_sign_direction": 11
    },
    "0b1100": {
      "ground_sign_direction": 12
    },
    "0b1101": {
      "ground_sign_direction": 13
    },
    "0b1110": {
      "ground_sign_direction": 14
    },
    "0b1111": {
      "ground_sign_direction": 15
    }
  },
  "minecraft:mangrove_standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    },
    "0b1": {
      "ground_sign_direction": 1
    },
    "0b10": {
      "ground_sign_direction": 2
    },
    "0b11": {
      "ground_sign_direction": 3
    },
    "0b100": {
      "ground_sign_direction": 4
    },
    "0b101": {
      "ground_sign_direction": 5
    },
    "0b110": {
      "ground_sign_direction": 6
    },
    "0b111": {
      "ground_sign_direction": 7
    },
    "0b1000": {
      "ground_sign_direction": 8
    },
    "0b1001": {
      "ground_sign_direction": 9
    },
    "0b1010": {
      "ground_sign_direction": 10
    },
    "0b1011": {
      "ground_sign_direction": 11
    },
    "0b1100": {
      "ground_sign_direction": 12
    },
    "0b1101": {
      "ground_sign_direction": 13
    },
    "0b1110": {
      "ground_sign_direction": 14
    },
    "0b1111": {
      "ground_sign_direction": 15
    }
  },
  "minecraft:double_stone_block_slab": {
    "default": {
      "stone_slab_type": "smooth_stone",
      "top_slot_bit": false
    },
    "support_value": {
      "stone_slab_type": [
        "smooth_stone",
        "sandstone",
        "wood",
        "cobblestone",
        "brick",
        "stone_brick",
        "quartz",
        "nether_brick"
      ],
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "stone_slab_type": "smooth_stone",
      "top_slot_bit": false
    },
    "0b1": {
      "stone_slab_type": "sandstone",
      "top_slot_bit": false
    },
    "0b10": {
      "stone_slab_type": "wood",
      "top_slot_bit": false
    },
    "0b11": {
      "stone_slab_type": "cobblestone",
      "top_slot_bit": false
    },
    "0b100": {
      "stone_slab_type": "brick",
      "top_slot_bit": false
    },
    "0b101": {
      "stone_slab_type": "stone_brick",
      "top_slot_bit": false
    },
    "0b110": {
      "stone_slab_type": "quartz",
      "top_slot_bit": false
    },
    "0b111": {
      "stone_slab_type": "nether_brick",
      "top_slot_bit": false
    },
    "0b1000": {
      "stone_slab_type": "smooth_stone",
      "top_slot_bit": true
    },
    "0b1001": {
      "stone_slab_type": "sandstone",
      "top_slot_bit": true
    },
    "0b1010": {
      "stone_slab_type": "wood",
      "top_slot_bit": true
    },
    "0b1011": {
      "stone_slab_type": "cobblestone",
      "top_slot_bit": true
    },
    "0b1100": {
      "stone_slab_type": "brick",
      "top_slot_bit": true
    },
    "0b1101": {
      "stone_slab_type": "stone_brick",
      "top_slot_bit": true
    },
    "0b1110": {
      "stone_slab_type": "quartz",
      "top_slot_bit": true
    },
    "0b1111": {
      "stone_slab_type": "nether_brick",
      "top_slot_bit": true
    }
  },
  "minecraft:stone_block_slab": {
    "default": {
      "stone_slab_type": "smooth_stone",
      "top_slot_bit": false
    },
    "support_value": {
      "stone_slab_type": [
        "smooth_stone",
        "sandstone",
        "wood",
        "cobblestone",
        "brick",
        "stone_brick",
        "quartz",
        "nether_brick"
      ],
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "stone_slab_type": "smooth_stone",
      "top_slot_bit": false
    },
    "0b1": {
      "stone_slab_type": "sandstone",
      "top_slot_bit": false
    },
    "0b10": {
      "stone_slab_type": "wood",
      "top_slot_bit": false
    },
    "0b11": {
      "stone_slab_type": "cobblestone",
      "top_slot_bit": false
    },
    "0b100": {
      "stone_slab_type": "brick",
      "top_slot_bit": false
    },
    "0b101": {
      "stone_slab_type": "stone_brick",
      "top_slot_bit": false
    },
    "0b110": {
      "stone_slab_type": "quartz",
      "top_slot_bit": false
    },
    "0b111": {
      "stone_slab_type": "nether_brick",
      "top_slot_bit": false
    },
    "0b1000": {
      "stone_slab_type": "smooth_stone",
      "top_slot_bit": true
    },
    "0b1001": {
      "stone_slab_type": "sandstone",
      "top_slot_bit": true
    },
    "0b1010": {
      "stone_slab_type": "wood",
      "top_slot_bit": true
    },
    "0b1011": {
      "stone_slab_type": "cobblestone",
      "top_slot_bit": true
    },
    "0b1100": {
      "stone_slab_type": "brick",
      "top_slot_bit": true
    },
    "0b1101": {
      "stone_slab_type": "stone_brick",
      "top_slot_bit": true
    },
    "0b1110": {
      "stone_slab_type": "quartz",
      "top_slot_bit": true
    },
    "0b1111": {
      "stone_slab_type": "nether_brick",
      "top_slot_bit": true
    }
  },
  "minecraft:double_wooden_slab": {
    "default": {
      "wood_type": "oak",
      "top_slot_bit": false
    },
    "support_value": {
      "wood_type": [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak"
      ],
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "wood_type": "oak",
      "top_slot_bit": false
    },
    "0b1": {
      "wood_type": "spruce",
      "top_slot_bit": false
    },
    "0b10": {
      "wood_type": "birch",
      "top_slot_bit": false
    },
    "0b11": {
      "wood_type": "jungle",
      "top_slot_bit": false
    },
    "0b100": {
      "wood_type": "acacia",
      "top_slot_bit": false
    },
    "0b101": {
      "wood_type": "dark_oak",
      "top_slot_bit": false
    },
    "0b1000": {
      "wood_type": "oak",
      "top_slot_bit": true
    },
    "0b1001": {
      "wood_type": "spruce",
      "top_slot_bit": true
    },
    "0b1010": {
      "wood_type": "birch",
      "top_slot_bit": true
    },
    "0b1011": {
      "wood_type": "jungle",
      "top_slot_bit": true
    },
    "0b1100": {
      "wood_type": "acacia",
      "top_slot_bit": true
    },
    "0b1101": {
      "wood_type": "dark_oak",
      "top_slot_bit": true
    }
  },
  "minecraft:wooden_slab": {
    "default": {
      "wood_type": "oak",
      "top_slot_bit": false
    },
    "support_value": {
      "wood_type": [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak"
      ],
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "wood_type": "oak",
      "top_slot_bit": false
    },
    "0b1": {
      "wood_type": "spruce",
      "top_slot_bit": false
    },
    "0b10": {
      "wood_type": "birch",
      "top_slot_bit": false
    },
    "0b11": {
      "wood_type": "jungle",
      "top_slot_bit": false
    },
    "0b100": {
      "wood_type": "acacia",
      "top_slot_bit": false
    },
    "0b101": {
      "wood_type": "dark_oak",
      "top_slot_bit": false
    },
    "0b1000": {
      "wood_type": "oak",
      "top_slot_bit": true
    },
    "0b1001": {
      "wood_type": "spruce",
      "top_slot_bit": true
    },
    "0b1010": {
      "wood_type": "birch",
      "top_slot_bit": true
    },
    "0b1011": {
      "wood_type": "jungle",
      "top_slot_bit": true
    },
    "0b1100": {
      "wood_type": "acacia",
      "top_slot_bit": true
    },
    "0b1101": {
      "wood_type": "dark_oak",
      "top_slot_bit": true
    }
  },
  "minecraft:double_stone_block_slab2": {
    "default": {
      "stone_slab_type_2": "red_sandstone",
      "top_slot_bit": false
    },
    "support_value": {
      "stone_slab_type_2": [
        "red_sandstone",
        "purpur",
        "prismarine_rough",
        "prismarine_dark",
        "prismarine_brick",
        "mossy_cobblestone",
        "smooth_sandstone",
        "red_nether_brick"
      ],
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "stone_slab_type_2": "red_sandstone",
      "top_slot_bit": false
    },
    "0b1": {
      "stone_slab_type_2": "purpur",
      "top_slot_bit": false
    },
    "0b10": {
      "stone_slab_type_2": "prismarine_rough",
      "top_slot_bit": false
    },
    "0b11": {
      "stone_slab_type_2": "prismarine_dark",
      "top_slot_bit": false
    },
    "0b100": {
      "stone_slab_type_2": "prismarine_brick",
      "top_slot_bit": false
    },
    "0b101": {
      "stone_slab_type_2": "mossy_cobblestone",
      "top_slot_bit": false
    },
    "0b110": {
      "stone_slab_type_2": "smooth_sandstone",
      "top_slot_bit": false
    },
    "0b111": {
      "stone_slab_type_2": "red_nether_brick",
      "top_slot_bit": false
    },
    "0b1000": {
      "stone_slab_type_2": "red_sandstone",
      "top_slot_bit": true
    },
    "0b1001": {
      "stone_slab_type_2": "purpur",
      "top_slot_bit": true
    },
    "0b1010": {
      "stone_slab_type_2": "prismarine_rough",
      "top_slot_bit": true
    },
    "0b1011": {
      "stone_slab_type_2": "prismarine_dark",
      "top_slot_bit": true
    },
    "0b1100": {
      "stone_slab_type_2": "prismarine_brick",
      "top_slot_bit": true
    },
    "0b1101": {
      "stone_slab_type_2": "mossy_cobblestone",
      "top_slot_bit": true
    },
    "0b1110": {
      "stone_slab_type_2": "smooth_sandstone",
      "top_slot_bit": true
    },
    "0b1111": {
      "stone_slab_type_2": "red_nether_brick",
      "top_slot_bit": true
    }
  },
  "minecraft:stone_block_slab2": {
    "default": {
      "stone_slab_type_2": "red_sandstone",
      "top_slot_bit": false
    },
    "support_value": {
      "stone_slab_type_2": [
        "red_sandstone",
        "purpur",
        "prismarine_rough",
        "prismarine_dark",
        "prismarine_brick",
        "mossy_cobblestone",
        "smooth_sandstone",
        "red_nether_brick"
      ],
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "stone_slab_type_2": "red_sandstone",
      "top_slot_bit": false
    },
    "0b1": {
      "stone_slab_type_2": "purpur",
      "top_slot_bit": false
    },
    "0b10": {
      "stone_slab_type_2": "prismarine_rough",
      "top_slot_bit": false
    },
    "0b11": {
      "stone_slab_type_2": "prismarine_dark",
      "top_slot_bit": false
    },
    "0b100": {
      "stone_slab_type_2": "prismarine_brick",
      "top_slot_bit": false
    },
    "0b101": {
      "stone_slab_type_2": "mossy_cobblestone",
      "top_slot_bit": false
    },
    "0b110": {
      "stone_slab_type_2": "smooth_sandstone",
      "top_slot_bit": false
    },
    "0b111": {
      "stone_slab_type_2": "red_nether_brick",
      "top_slot_bit": false
    },
    "0b1000": {
      "stone_slab_type_2": "red_sandstone",
      "top_slot_bit": true
    },
    "0b1001": {
      "stone_slab_type_2": "purpur",
      "top_slot_bit": true
    },
    "0b1010": {
      "stone_slab_type_2": "prismarine_rough",
      "top_slot_bit": true
    },
    "0b1011": {
      "stone_slab_type_2": "prismarine_dark",
      "top_slot_bit": true
    },
    "0b1100": {
      "stone_slab_type_2": "prismarine_brick",
      "top_slot_bit": true
    },
    "0b1101": {
      "stone_slab_type_2": "mossy_cobblestone",
      "top_slot_bit": true
    },
    "0b1110": {
      "stone_slab_type_2": "smooth_sandstone",
      "top_slot_bit": true
    },
    "0b1111": {
      "stone_slab_type_2": "red_nether_brick",
      "top_slot_bit": true
    }
  },
  "minecraft:double_stone_block_slab3": {
    "default": {
      "stone_slab_type_3": "end_stone_brick",
      "top_slot_bit": false
    },
    "support_value": {
      "stone_slab_type_3": [
        "end_stone_brick",
        "smooth_red_sandstone",
        "polished_andesite",
        "andesite",
        "diorite",
        "polished_diorite",
        "granite",
        "polished_granite"
      ],
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "stone_slab_type_3": "end_stone_brick",
      "top_slot_bit": false
    },
    "0b1": {
      "stone_slab_type_3": "smooth_red_sandstone",
      "top_slot_bit": false
    },
    "0b10": {
      "stone_slab_type_3": "polished_andesite",
      "top_slot_bit": false
    },
    "0b11": {
      "stone_slab_type_3": "andesite",
      "top_slot_bit": false
    },
    "0b100": {
      "stone_slab_type_3": "diorite",
      "top_slot_bit": false
    },
    "0b101": {
      "stone_slab_type_3": "polished_diorite",
      "top_slot_bit": false
    },
    "0b110": {
      "stone_slab_type_3": "granite",
      "top_slot_bit": false
    },
    "0b111": {
      "stone_slab_type_3": "polished_granite",
      "top_slot_bit": false
    },
    "0b1000": {
      "stone_slab_type_3": "end_stone_brick",
      "top_slot_bit": true
    },
    "0b1001": {
      "stone_slab_type_3": "smooth_red_sandstone",
      "top_slot_bit": true
    },
    "0b1010": {
      "stone_slab_type_3": "polished_andesite",
      "top_slot_bit": true
    },
    "0b1011": {
      "stone_slab_type_3": "andesite",
      "top_slot_bit": true
    },
    "0b1100": {
      "stone_slab_type_3": "diorite",
      "top_slot_bit": true
    },
    "0b1101": {
      "stone_slab_type_3": "polished_diorite",
      "top_slot_bit": true
    },
    "0b1110": {
      "stone_slab_type_3": "granite",
      "top_slot_bit": true
    },
    "0b1111": {
      "stone_slab_type_3": "polished_granite",
      "top_slot_bit": true
    }
  },
  "minecraft:stone_block_slab3": {
    "default": {
      "stone_slab_type_3": "end_stone_brick",
      "top_slot_bit": false
    },
    "support_value": {
      "stone_slab_type_3": [
        "end_stone_brick",
        "smooth_red_sandstone",
        "polished_andesite",
        "andesite",
        "diorite",
        "polished_diorite",
        "granite",
        "polished_granite"
      ],
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "stone_slab_type_3": "end_stone_brick",
      "top_slot_bit": false
    },
    "0b1": {
      "stone_slab_type_3": "smooth_red_sandstone",
      "top_slot_bit": false
    },
    "0b10": {
      "stone_slab_type_3": "polished_andesite",
      "top_slot_bit": false
    },
    "0b11": {
      "stone_slab_type_3": "andesite",
      "top_slot_bit": false
    },
    "0b100": {
      "stone_slab_type_3": "diorite",
      "top_slot_bit": false
    },
    "0b101": {
      "stone_slab_type_3": "polished_diorite",
      "top_slot_bit": false
    },
    "0b110": {
      "stone_slab_type_3": "granite",
      "top_slot_bit": false
    },
    "0b111": {
      "stone_slab_type_3": "polished_granite",
      "top_slot_bit": false
    },
    "0b1000": {
      "stone_slab_type_3": "end_stone_brick",
      "top_slot_bit": true
    },
    "0b1001": {
      "stone_slab_type_3": "smooth_red_sandstone",
      "top_slot_bit": true
    },
    "0b1010": {
      "stone_slab_type_3": "polished_andesite",
      "top_slot_bit": true
    },
    "0b1011": {
      "stone_slab_type_3": "andesite",
      "top_slot_bit": true
    },
    "0b1100": {
      "stone_slab_type_3": "diorite",
      "top_slot_bit": true
    },
    "0b1101": {
      "stone_slab_type_3": "polished_diorite",
      "top_slot_bit": true
    },
    "0b1110": {
      "stone_slab_type_3": "granite",
      "top_slot_bit": true
    },
    "0b1111": {
      "stone_slab_type_3": "polished_granite",
      "top_slot_bit": true
    }
  },
  "minecraft:double_stone_block_slab4": {
    "default": {
      "stone_slab_type_4": "mossy_stone_brick",
      "top_slot_bit": false
    },
    "support_value": {
      "stone_slab_type_4": [
        "mossy_stone_brick",
        "smooth_quartz",
        "stone",
        "cut_sandstone",
        "cut_red_sandstone"
      ],
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "stone_slab_type_4": "mossy_stone_brick",
      "top_slot_bit": false
    },
    "0b1": {
      "stone_slab_type_4": "smooth_quartz",
      "top_slot_bit": false
    },
    "0b10": {
      "stone_slab_type_4": "stone",
      "top_slot_bit": false
    },
    "0b11": {
      "stone_slab_type_4": "cut_sandstone",
      "top_slot_bit": false
    },
    "0b100": {
      "stone_slab_type_4": "cut_red_sandstone",
      "top_slot_bit": false
    },
    "0b1000": {
      "stone_slab_type_4": "mossy_stone_brick",
      "top_slot_bit": true
    },
    "0b1001": {
      "stone_slab_type_4": "smooth_quartz",
      "top_slot_bit": true
    },
    "0b1010": {
      "stone_slab_type_4": "stone",
      "top_slot_bit": true
    },
    "0b1011": {
      "stone_slab_type_4": "cut_sandstone",
      "top_slot_bit": true
    },
    "0b1100": {
      "stone_slab_type_4": "cut_red_sandstone",
      "top_slot_bit": true
    }
  },
  "minecraft:stone_block_slab4": {
    "default": {
      "stone_slab_type_4": "mossy_stone_brick",
      "top_slot_bit": false
    },
    "support_value": {
      "stone_slab_type_4": [
        "mossy_stone_brick",
        "smooth_quartz",
        "stone",
        "cut_sandstone",
        "cut_red_sandstone"
      ],
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "stone_slab_type_4": "mossy_stone_brick",
      "top_slot_bit": false
    },
    "0b1": {
      "stone_slab_type_4": "smooth_quartz",
      "top_slot_bit": false
    },
    "0b10": {
      "stone_slab_type_4": "stone",
      "top_slot_bit": false
    },
    "0b11": {
      "stone_slab_type_4": "cut_sandstone",
      "top_slot_bit": false
    },
    "0b100": {
      "stone_slab_type_4": "cut_red_sandstone",
      "top_slot_bit": false
    },
    "0b1000": {
      "stone_slab_type_4": "mossy_stone_brick",
      "top_slot_bit": true
    },
    "0b1001": {
      "stone_slab_type_4": "smooth_quartz",
      "top_slot_bit": true
    },
    "0b1010": {
      "stone_slab_type_4": "stone",
      "top_slot_bit": true
    },
    "0b1011": {
      "stone_slab_type_4": "cut_sandstone",
      "top_slot_bit": true
    },
    "0b1100": {
      "stone_slab_type_4": "cut_red_sandstone",
      "top_slot_bit": true
    }
  },
  "minecraft:crimson_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:crimson_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:warped_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:warped_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:blackstone_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:blackstone_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:polished_blackstone_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:polished_blackstone_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:polished_blackstone_brick_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:polished_blackstone_brick_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:double_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:exposed_double_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:exposed_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:weathered_double_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:weathered_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:oxidized_double_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:oxidized_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:waxed_double_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:waxed_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:waxed_exposed_double_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:waxed_exposed_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:waxed_weathered_double_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:waxed_weathered_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:waxed_oxidized_double_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:waxed_oxidized_cut_copper_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:cobbled_deepslate_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:cobbled_deepslate_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:polished_deepslate_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:polished_deepslate_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:deepslate_brick_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:deepslate_brick_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:deepslate_tile_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:deepslate_tile_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    },
    "0b1": {
      "top_slot_bit": true
    }
  },
  "minecraft:small_dripleaf_block": {
    "default": {
      "direction": 0,
      "upper_block_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upper_block_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upper_block_bit": false
    },
    "0b1": {
      "direction": 0,
      "upper_block_bit": false
    },
    "0b10": {
      "direction": 0,
      "upper_block_bit": false
    },
    "0b11": {
      "direction": 0,
      "upper_block_bit": false
    },
    "0b100": {
      "direction": 0,
      "upper_block_bit": false
    },
    "0b101": {
      "direction": 0,
      "upper_block_bit": false
    },
    "0b110": {
      "direction": 0,
      "upper_block_bit": false
    },
    "0b111": {
      "direction": 0,
      "upper_block_bit": false
    }
  },
  "minecraft:lit_smoker": {
    "default": {
      "facing_direction": 3
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:smoker": {
    "default": {
      "facing_direction": 3
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:snow_layer": {
    "default": {
      "height": 0,
      "covered_bit": false
    },
    "support_value": {
      "height": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "covered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "height": 0,
      "covered_bit": false
    },
    "0b1": {
      "height": 1,
      "covered_bit": false
    },
    "0b10": {
      "height": 2,
      "covered_bit": false
    },
    "0b11": {
      "height": 3,
      "covered_bit": false
    },
    "0b100": {
      "height": 4,
      "covered_bit": false
    },
    "0b101": {
      "height": 5,
      "covered_bit": false
    },
    "0b110": {
      "height": 6,
      "covered_bit": false
    },
    "0b111": {
      "height": 7,
      "covered_bit": false
    },
    "0b1000": {
      "height": 0,
      "covered_bit": true
    },
    "0b1001": {
      "height": 1,
      "covered_bit": true
    },
    "0b1010": {
      "height": 2,
      "covered_bit": true
    },
    "0b1011": {
      "height": 3,
      "covered_bit": true
    },
    "0b1100": {
      "height": 4,
      "covered_bit": true
    },
    "0b1101": {
      "height": 5,
      "covered_bit": true
    },
    "0b1110": {
      "height": 6,
      "covered_bit": true
    },
    "0b1111": {
      "height": 7,
      "covered_bit": true
    }
  },
  "minecraft:sponge": {
    "default": {
      "sponge_type": 0
    },
    "support_value": {
      "sponge_type": [
        "dry",
        "wet"
      ]
    },
    "0b0": {
      "sponge_type": "dry"
    },
    "0b1": {
      "sponge_type": "wet"
    }
  },
  "minecraft:oak_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:spruce_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:birch_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:jungle_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:acacia_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:dark_oak_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:crimson_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:warped_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:normal_stone_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:granite_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:polished_granite_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:diorite_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:polished_diorite_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:andesite_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:polished_andesite_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:stone_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:mossy_cobblestone_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:stone_brick_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:mossy_stone_brick_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:brick_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:end_brick_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:nether_brick_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:red_nether_brick_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:sandstone_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:smooth_sandstone_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:red_sandstone_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:smooth_red_sandstone_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:quartz_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:smooth_quartz_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:purpur_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:prismarine_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:prismarine_bricks_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:dark_prismarine_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:blackstone_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:polished_blackstone_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:polished_blackstone_brick_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:cut_copper_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:exposed_cut_copper_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:weathered_cut_copper_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:oxidized_cut_copper_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:waxed_cut_copper_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:waxed_exposed_cut_copper_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:waxed_weathered_cut_copper_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:waxed_oxidized_cut_copper_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:cobbled_deepslate_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:polished_deepslate_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:deepslate_brick_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:deepslate_tile_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "0b1": {
      "weirdo_direction": 1,
      "upside_down_bit": false
    },
    "0b10": {
      "weirdo_direction": 2,
      "upside_down_bit": false
    },
    "0b11": {
      "weirdo_direction": 3,
      "upside_down_bit": false
    },
    "0b100": {
      "weirdo_direction": 0,
      "upside_down_bit": true
    },
    "0b101": {
      "weirdo_direction": 1,
      "upside_down_bit": true
    },
    "0b110": {
      "weirdo_direction": 2,
      "upside_down_bit": true
    },
    "0b111": {
      "weirdo_direction": 3,
      "upside_down_bit": true
    }
  },
  "minecraft:stone": {
    "default": {
      "stone_type": "stone"
    },
    "support_value": {
      "stone_type": [
        "stone",
        "granite",
        "granite_smooth",
        "diorite",
        "diorite_smooth",
        "andesite",
        "andesite_smooth"
      ]
    },
    "0b0": {
      "stone_type": "stone"
    },
    "0b1": {
      "stone_type": "granite"
    },
    "0b10": {
      "stone_type": "granite_smooth"
    },
    "0b11": {
      "stone_type": "diorite"
    },
    "0b100": {
      "stone_type": "diorite_smooth"
    },
    "0b101": {
      "stone_type": "andesite"
    },
    "0b110": {
      "stone_type": "andesite_smooth"
    }
  },
  "minecraft:stonebrick": {
    "default": {
      "stone_brick_type": "default"
    },
    "support_value": {
      "stone_brick_type": [
        "chiseled",
        "cracked",
        "default",
        "mossy",
        "smooth"
      ]
    },
    "0b0": {
      "stone_brick_type": "default"
    },
    "0b1": {
      "stone_brick_type": "mossy"
    },
    "0b10": {
      "stone_brick_type": "cracked"
    },
    "0b11": {
      "stone_brick_type": "chiseled"
    },
    "0b100": {
      "stone_brick_type": "smooth"
    }
  },
  "minecraft:stonecutter_block": {
    "default": {
      "facing_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    },
    "0b1": {
      "facing_direction": 1
    },
    "0b10": {
      "facing_direction": 2
    },
    "0b11": {
      "facing_direction": 3
    },
    "0b100": {
      "facing_direction": 4
    },
    "0b101": {
      "facing_direction": 5
    }
  },
  "minecraft:structure_block": {
    "default": {
      "structure_block_type": "data"
    },
    "support_value": {
      "structure_block_type": [
        "data",
        "save",
        "load",
        "corner",
        "invalid",
        "export"
      ]
    },
    "0b0": {
      "structure_block_type": "data"
    },
    "0b1": {
      "structure_block_type": "save"
    },
    "0b10": {
      "structure_block_type": "load"
    },
    "0b11": {
      "structure_block_type": "corner"
    },
    "0b100": {
      "structure_block_type": "invalid"
    },
    "0b101": {
      "structure_block_type": "export"
    }
  },
  "minecraft:structure_void": {
    "default": {
      "structure_void_type": "void"
    },
    "support_value": {
      "structure_void_type": [
        "void",
        "air"
      ]
    },
    "0b0": {
      "structure_void_type": "void"
    },
    "0b1": {
      "structure_void_type": "air"
    }
  },
  "minecraft:tallgrass": {
    "default": {
      "tall_grass_type": "default"
    },
    "support_value": {
      "tall_grass_type": [
        "default",
        "tall",
        "fern",
        "snow"
      ]
    },
    "0b0": {
      "tall_grass_type": "default"
    },
    "0b1": {
      "tall_grass_type": "tall"
    },
    "0b10": {
      "tall_grass_type": "fern"
    },
    "0b11": {
      "tall_grass_type": "snow"
    }
  },
  "minecraft:seagrass": {
    "default": {
      "sea_grass_type": "default"
    },
    "support_value": {
      "sea_grass_type": [
        "default",
        "double_bot",
        "double_top"
      ]
    },
    "0b0": {
      "sea_grass_type": "default"
    }
  },
  "minecraft:tnt": {
    "default": {
      "explode_bit": false,
      "allow_underwater_bit": false
    },
    "support_value": {
      "explode_bit": [
        false,
        true
      ],
      "allow_underwater_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "explode_bit": false,
      "allow_underwater_bit": false
    },
    "0b1": {
      "explode_bit": true,
      "allow_underwater_bit": false
    },
    "0b10": {
      "explode_bit": false,
      "allow_underwater_bit": true
    },
    "0b11": {
      "explode_bit": true,
      "allow_underwater_bit": true
    }
  },
  "minecraft:torch": {
    "default": {
      "torch_facing_direction": "west"
    },
    "support_value": {
      "torch_facing_direction": [
        "unknown",
        "west",
        "east",
        "north",
        "south",
        "top"
      ]
    },
    "0b0": {
      "torch_facing_direction": "unknown"
    },
    "0b1": {
      "torch_facing_direction": "west"
    },
    "0b10": {
      "torch_facing_direction": "east"
    },
    "0b11": {
      "torch_facing_direction": "north"
    },
    "0b100": {
      "torch_facing_direction": "south"
    },
    "0b101": {
      "torch_facing_direction": "top"
    }
  },
  "minecraft:redstone_torch": {
    "default": {
      "torch_facing_direction": "west"
    },
    "support_value": {
      "torch_facing_direction": [
        "unknown",
        "west",
        "east",
        "north",
        "south",
        "top"
      ]
    },
    "0b0": {
      "torch_facing_direction": "unknown"
    },
    "0b1": {
      "torch_facing_direction": "west"
    },
    "0b10": {
      "torch_facing_direction": "east"
    },
    "0b11": {
      "torch_facing_direction": "north"
    },
    "0b100": {
      "torch_facing_direction": "south"
    },
    "0b101": {
      "torch_facing_direction": "top"
    }
  },
  "minecraft:soul_torch": {
    "default": {
      "torch_facing_direction": "west"
    },
    "support_value": {
      "torch_facing_direction": [
        "unknown",
        "west",
        "east",
        "north",
        "south",
        "top"
      ]
    },
    "0b0": {
      "torch_facing_direction": "unknown"
    },
    "0b1": {
      "torch_facing_direction": "west"
    },
    "0b10": {
      "torch_facing_direction": "east"
    },
    "0b11": {
      "torch_facing_direction": "north"
    },
    "0b100": {
      "torch_facing_direction": "south"
    },
    "0b101": {
      "torch_facing_direction": "top"
    }
  },
  "minecraft:unlit_redstone_torch": {
    "default": {
      "torch_facing_direction": "west"
    },
    "support_value": {
      "torch_facing_direction": [
        "unknown",
        "west",
        "east",
        "north",
        "south",
        "top"
      ]
    },
    "0b0": {
      "torch_facing_direction": "unknown"
    },
    "0b10": {
      "torch_facing_direction": "east"
    },
    "0b11": {
      "torch_facing_direction": "north"
    },
    "0b100": {
      "torch_facing_direction": "south"
    },
    "0b101": {
      "torch_facing_direction": "top"
    }
  },
  "minecraft:iron_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b1": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b10": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b11": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b1000": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1001": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1010": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1011": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": true
    }
  },
  "minecraft:trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b1": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b10": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b11": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b1000": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1001": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1010": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1011": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": true
    }
  },
  "minecraft:spruce_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b1": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b10": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b11": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b1000": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1001": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1010": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1011": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": true
    }
  },
  "minecraft:birch_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b1": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b10": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b11": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b1000": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1001": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1010": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1011": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": true
    }
  },
  "minecraft:jungle_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b1": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b10": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b11": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b1000": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1001": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1010": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1011": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": true
    }
  },
  "minecraft:acacia_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b1": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b10": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b11": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b1000": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1001": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1010": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1011": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": true
    }
  },
  "minecraft:dark_oak_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b1": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b10": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b11": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b1000": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1001": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1010": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1011": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": true
    }
  },
  "minecraft:crimson_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b1": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b10": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b11": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b1000": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1001": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1010": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1011": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": true
    }
  },
  "minecraft:warped_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b1": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b10": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b11": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b1000": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1001": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1010": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1011": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": true
    }
  },
  "minecraft:mangrove_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b1": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b10": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b11": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": false
    },
    "0b100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": false
    },
    "0b1000": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1001": {
      "direction": 1,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1010": {
      "direction": 2,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1011": {
      "direction": 3,
      "upside_down_bit": false,
      "open_bit": true
    },
    "0b1100": {
      "direction": 0,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1101": {
      "direction": 1,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1110": {
      "direction": 2,
      "upside_down_bit": true,
      "open_bit": true
    },
    "0b1111": {
      "direction": 3,
      "upside_down_bit": true,
      "open_bit": true
    }
  },
  "minecraft:trip_wire": {
    "default": {
      "powered_bit": false,
      "suspended_bit": false,
      "attached_bit": false,
      "disarmed_bit": false
    },
    "support_value": {
      "powered_bit": [
        false,
        true
      ],
      "suspended_bit": [
        false,
        true
      ],
      "attached_bit": [
        false,
        true
      ],
      "disarmed_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "powered_bit": false,
      "suspended_bit": false,
      "attached_bit": false,
      "disarmed_bit": false
    },
    "0b1": {
      "powered_bit": true,
      "suspended_bit": false,
      "attached_bit": false,
      "disarmed_bit": false
    },
    "0b10": {
      "powered_bit": false,
      "suspended_bit": true,
      "attached_bit": false,
      "disarmed_bit": false
    },
    "0b11": {
      "powered_bit": true,
      "suspended_bit": true,
      "attached_bit": false,
      "disarmed_bit": false
    },
    "0b100": {
      "powered_bit": false,
      "suspended_bit": false,
      "attached_bit": true,
      "disarmed_bit": false
    },
    "0b101": {
      "powered_bit": true,
      "suspended_bit": false,
      "attached_bit": true,
      "disarmed_bit": false
    },
    "0b110": {
      "powered_bit": false,
      "suspended_bit": true,
      "attached_bit": true,
      "disarmed_bit": false
    },
    "0b111": {
      "powered_bit": true,
      "suspended_bit": true,
      "attached_bit": true,
      "disarmed_bit": false
    },
    "0b1000": {
      "powered_bit": false,
      "suspended_bit": false,
      "attached_bit": false,
      "disarmed_bit": true
    },
    "0b1001": {
      "powered_bit": true,
      "suspended_bit": false,
      "attached_bit": false,
      "disarmed_bit": true
    },
    "0b1010": {
      "powered_bit": false,
      "suspended_bit": true,
      "attached_bit": false,
      "disarmed_bit": true
    },
    "0b1011": {
      "powered_bit": true,
      "suspended_bit": true,
      "attached_bit": false,
      "disarmed_bit": true
    },
    "0b1100": {
      "powered_bit": false,
      "suspended_bit": false,
      "attached_bit": true,
      "disarmed_bit": true
    },
    "0b1101": {
      "powered_bit": true,
      "suspended_bit": false,
      "attached_bit": true,
      "disarmed_bit": true
    },
    "0b1110": {
      "powered_bit": false,
      "suspended_bit": true,
      "attached_bit": true,
      "disarmed_bit": true
    },
    "0b1111": {
      "powered_bit": true,
      "suspended_bit": true,
      "attached_bit": true,
      "disarmed_bit": true
    }
  },
  "minecraft:tripwire_hook": {
    "default": {
      "direction": 0,
      "attached_bit": false,
      "powered_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "attached_bit": [
        false,
        true
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "attached_bit": false,
      "powered_bit": false
    },
    "0b1": {
      "direction": 1,
      "attached_bit": false,
      "powered_bit": false
    },
    "0b10": {
      "direction": 2,
      "attached_bit": false,
      "powered_bit": false
    },
    "0b11": {
      "direction": 3,
      "attached_bit": false,
      "powered_bit": false
    },
    "0b100": {
      "direction": 0,
      "attached_bit": true,
      "powered_bit": false
    },
    "0b101": {
      "direction": 1,
      "attached_bit": true,
      "powered_bit": false
    },
    "0b110": {
      "direction": 2,
      "attached_bit": true,
      "powered_bit": false
    },
    "0b111": {
      "direction": 3,
      "attached_bit": true,
      "powered_bit": false
    },
    "0b1000": {
      "direction": 0,
      "attached_bit": false,
      "powered_bit": true
    },
    "0b1001": {
      "direction": 1,
      "attached_bit": false,
      "powered_bit": true
    },
    "0b1010": {
      "direction": 2,
      "attached_bit": false,
      "powered_bit": true
    },
    "0b1011": {
      "direction": 3,
      "attached_bit": false,
      "powered_bit": true
    },
    "0b1100": {
      "direction": 0,
      "attached_bit": true,
      "powered_bit": true
    },
    "0b1101": {
      "direction": 1,
      "attached_bit": true,
      "powered_bit": true
    },
    "0b1110": {
      "direction": 2,
      "attached_bit": true,
      "powered_bit": true
    },
    "0b1111": {
      "direction": 3,
      "attached_bit": true,
      "powered_bit": true
    }
  },
  "minecraft:turtle_egg": {
    "default": {
      "turtle_egg_count": "one_egg",
      "cracked_state": "no_cracks"
    },
    "support_value": {
      "turtle_egg_count": [
        "one_egg",
        "two_egg",
        "three_egg",
        "four_egg"
      ],
      "cracked_state": [
        "no_cracks",
        "cracked",
        "max_cracked"
      ]
    },
    "0b0": {
      "turtle_egg_count": "one_egg",
      "cracked_state": "no_cracks"
    },
    "0b1": {
      "turtle_egg_count": "two_egg",
      "cracked_state": "no_cracks"
    },
    "0b10": {
      "turtle_egg_count": "three_egg",
      "cracked_state": "no_cracks"
    },
    "0b11": {
      "turtle_egg_count": "four_egg",
      "cracked_state": "no_cracks"
    },
    "0b100": {
      "turtle_egg_count": "one_egg",
      "cracked_state": "cracked"
    },
    "0b101": {
      "turtle_egg_count": "two_egg",
      "cracked_state": "cracked"
    },
    "0b110": {
      "turtle_egg_count": "three_egg",
      "cracked_state": "cracked"
    },
    "0b111": {
      "turtle_egg_count": "four_egg",
      "cracked_state": "cracked"
    },
    "0b1000": {
      "turtle_egg_count": "one_egg",
      "cracked_state": "max_cracked"
    },
    "0b1001": {
      "turtle_egg_count": "two_egg",
      "cracked_state": "max_cracked"
    },
    "0b1010": {
      "turtle_egg_count": "three_egg",
      "cracked_state": "max_cracked"
    },
    "0b1011": {
      "turtle_egg_count": "four_egg",
      "cracked_state": "max_cracked"
    }
  },
  "minecraft:twisting_vines": {
    "default": {
      "twisting_vines_age": 0
    },
    "support_value": {
      "twisting_vines_age": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
      ]
    },
    "0b0": {
      "twisting_vines_age": 0
    },
    "0b1": {
      "twisting_vines_age": 1
    },
    "0b10": {
      "twisting_vines_age": 2
    },
    "0b11": {
      "twisting_vines_age": 3
    },
    "0b100": {
      "twisting_vines_age": 4
    },
    "0b101": {
      "twisting_vines_age": 5
    },
    "0b110": {
      "twisting_vines_age": 6
    },
    "0b111": {
      "twisting_vines_age": 7
    },
    "0b1000": {
      "twisting_vines_age": 8
    },
    "0b1001": {
      "twisting_vines_age": 9
    },
    "0b1010": {
      "twisting_vines_age": 10
    },
    "0b1011": {
      "twisting_vines_age": 11
    },
    "0b1100": {
      "twisting_vines_age": 12
    },
    "0b1101": {
      "twisting_vines_age": 13
    },
    "0b1110": {
      "twisting_vines_age": 14
    },
    "0b1111": {
      "twisting_vines_age": 15
    },
    "0b10000": {
      "twisting_vines_age": 16
    },
    "0b10001": {
      "twisting_vines_age": 17
    },
    "0b10010": {
      "twisting_vines_age": 18
    },
    "0b10011": {
      "twisting_vines_age": 19
    },
    "0b10100": {
      "twisting_vines_age": 20
    },
    "0b10101": {
      "twisting_vines_age": 21
    },
    "0b10110": {
      "twisting_vines_age": 22
    },
    "0b10111": {
      "twisting_vines_age": 23
    },
    "0b11000": {
      "twisting_vines_age": 24
    },
    "0b11001": {
      "twisting_vines_age": 25
    }
  },
  "minecraft:vine": {
    "default": {
      "vine_direction_bits": 0
    },
    "support_value": {
      "vine_direction_bits": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "vine_direction_bits": 0
    },
    "0b1": {
      "vine_direction_bits": 1
    },
    "0b10": {
      "vine_direction_bits": 2
    },
    "0b11": {
      "vine_direction_bits": 3
    },
    "0b100": {
      "vine_direction_bits": 4
    },
    "0b101": {
      "vine_direction_bits": 5
    },
    "0b110": {
      "vine_direction_bits": 6
    },
    "0b111": {
      "vine_direction_bits": 7
    },
    "0b1000": {
      "vine_direction_bits": 8
    },
    "0b1001": {
      "vine_direction_bits": 9
    },
    "0b1010": {
      "vine_direction_bits": 10
    },
    "0b1011": {
      "vine_direction_bits": 11
    },
    "0b1100": {
      "vine_direction_bits": 12
    },
    "0b1101": {
      "vine_direction_bits": 13
    },
    "0b1110": {
      "vine_direction_bits": 14
    },
    "0b1111": {
      "vine_direction_bits": 15
    }
  },
  "minecraft:cobblestone_wall": {
    "default": {
      "wall_block_type": "cobblestone",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_block_type": [
        "cobblestone",
        "mossy_cobblestone",
        "granite",
        "diorite",
        "andesite",
        "sandstone",
        "brick",
        "stone_brick",
        "mossy_stone_brick",
        "nether_brick",
        "end_brick",
        "prismarine",
        "red_sandstone",
        "red_nether_brick"
      ],
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_block_type": "cobblestone",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1": {
      "wall_block_type": "mossy_cobblestone",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b10": {
      "wall_block_type": "granite",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b11": {
      "wall_block_type": "diorite",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b100": {
      "wall_block_type": "andesite",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b101": {
      "wall_block_type": "sandstone",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b110": {
      "wall_block_type": "brick",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b111": {
      "wall_block_type": "stone_brick",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1000": {
      "wall_block_type": "mossy_stone_brick",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1001": {
      "wall_block_type": "nether_brick",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1010": {
      "wall_block_type": "end_brick",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1011": {
      "wall_block_type": "prismarine",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1100": {
      "wall_block_type": "red_sandstone",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1101": {
      "wall_block_type": "red_nether_brick",
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:blackstone_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b10": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b11": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1000": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1001": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1010": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1011": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:polished_blackstone_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b10": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b11": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1000": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1001": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1010": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1011": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:polished_blackstone_brick_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b10": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b11": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1000": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1001": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1010": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1011": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:cobbled_deepslate_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b10": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b11": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1000": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1001": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1010": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1011": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:polished_deepslate_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b10": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b11": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1000": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1001": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1010": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1011": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:deepslate_brick_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b10": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b11": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1000": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1001": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1010": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1011": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:deepslate_tile_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b10": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b11": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1000": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1001": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1010": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1011": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1100": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1101": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1110": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "0b1111": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:weeping_vines": {
    "default": {
      "weeping_vines_age": 0
    },
    "support_value": {
      "weeping_vines_age": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25
      ]
    },
    "0b0": {
      "weeping_vines_age": 0
    },
    "0b1": {
      "weeping_vines_age": 1
    },
    "0b10": {
      "weeping_vines_age": 2
    },
    "0b11": {
      "weeping_vines_age": 3
    },
    "0b100": {
      "weeping_vines_age": 4
    },
    "0b101": {
      "weeping_vines_age": 5
    },
    "0b110": {
      "weeping_vines_age": 6
    },
    "0b111": {
      "weeping_vines_age": 7
    },
    "0b1000": {
      "weeping_vines_age": 8
    },
    "0b1001": {
      "weeping_vines_age": 9
    },
    "0b1010": {
      "weeping_vines_age": 10
    },
    "0b1011": {
      "weeping_vines_age": 11
    },
    "0b1100": {
      "weeping_vines_age": 12
    },
    "0b1101": {
      "weeping_vines_age": 13
    },
    "0b1110": {
      "weeping_vines_age": 14
    },
    "0b1111": {
      "weeping_vines_age": 15
    },
    "0b10000": {
      "weeping_vines_age": 16
    },
    "0b10001": {
      "weeping_vines_age": 17
    },
    "0b10010": {
      "weeping_vines_age": 18
    },
    "0b10011": {
      "weeping_vines_age": 19
    },
    "0b10100": {
      "weeping_vines_age": 20
    },
    "0b10101": {
      "weeping_vines_age": 21
    },
    "0b10110": {
      "weeping_vines_age": 22
    },
    "0b10111": {
      "weeping_vines_age": 23
    },
    "0b11000": {
      "weeping_vines_age": 24
    },
    "0b11001": {
      "weeping_vines_age": 25
    }
  },
  "minecraft:wood": {
    "default": {
      "wood_type": "oak",
      "stripped_bit": false,
      "pillar_axis": "y"
    },
    "support_value": {
      "wood_type": [
        "oak",
        "spruce",
        "birch",
        "jungle",
        "acacia",
        "dark_oak"
      ],
      "stripped_bit": [
        false,
        true
      ],
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "wood_type": "oak",
      "stripped_bit": false,
      "pillar_axis": "y"
    },
    "0b1": {
      "wood_type": "spruce",
      "stripped_bit": false,
      "pillar_axis": "y"
    },
    "0b10": {
      "wood_type": "birch",
      "stripped_bit": false,
      "pillar_axis": "y"
    },
    "0b11": {
      "wood_type": "jungle",
      "stripped_bit": false,
      "pillar_axis": "y"
    },
    "0b100": {
      "wood_type": "acacia",
      "stripped_bit": false,
      "pillar_axis": "y"
    },
    "0b101": {
      "wood_type": "dark_oak",
      "stripped_bit": false,
      "pillar_axis": "y"
    },
    "0b1000": {
      "wood_type": "oak",
      "stripped_bit": true,
      "pillar_axis": "y"
    },
    "0b1001": {
      "wood_type": "spruce",
      "stripped_bit": true,
      "pillar_axis": "y"
    },
    "0b1010": {
      "wood_type": "birch",
      "stripped_bit": true,
      "pillar_axis": "y"
    },
    "0b1011": {
      "wood_type": "jungle",
      "stripped_bit": true,
      "pillar_axis": "y"
    },
    "0b1100": {
      "wood_type": "acacia",
      "stripped_bit": true,
      "pillar_axis": "y"
    },
    "0b1101": {
      "wood_type": "dark_oak",
      "stripped_bit": true,
      "pillar_axis": "y"
    }
  },
  "minecraft:bamboo_wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    }
  },
  "minecraft:bamboo_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    }
  },
  "minecraft:bamboo_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:bamboo_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:bamboo_fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    }
  },
  "minecraft:bamboo_mosaic_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:bamboo_mosaic_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:bamboo_mosaic_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    }
  },
  "minecraft:bamboo_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    }
  },
  "minecraft:bamboo_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    }
  },
  "minecraft:bamboo_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:bamboo_standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    }
  },
  "minecraft:bamboo_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    }
  },
  "minecraft:chiseled_bookshelf": {
    "default": {
      "direction": 0,
      "books_stored": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "books_stored": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32,
        33,
        34,
        35,
        36,
        37,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        46,
        47,
        48,
        49,
        50,
        51,
        52,
        53,
        54,
        55,
        56,
        57,
        58,
        59,
        60,
        61,
        62,
        63
      ]
    },
    "0b0": {
      "direction": 0,
      "books_stored": 0
    }
  },
  "minecraft:acacia_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:bamboo_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:birch_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:crimson_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:dark_oak_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:jungle_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:mangrove_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:oak_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:spruce_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:warped_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:bamboo_block": {
    "default": {
      "pillar_axis": "x"
    },
    "support_value": {
      "pillar_axis": [
        "x",
        "y",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "x"
    }
  },
  "minecraft:stripped_bamboo_block": {
    "default": {
      "pillar_axis": "x"
    },
    "support_value": {
      "pillar_axis": [
        "x",
        "y",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "x"
    }
  },
  "minecraft:decorated_pot": {
    "default": {
      "direction": 0
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "direction": 0
    }
  },
  "minecraft:suspicious_sand": {
    "default": {
      "hanging": false,
      "brushed_progress": 0
    },
    "support_value": {
      "hanging": [
        false,
        true
      ],
      "brushed_progress": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "hanging": false,
      "brushed_progress": 0
    }
  },
  "minecraft:torchflower_crop": {
    "default": {
      "growth": 0
    },
    "support_value": {
      "growth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ]
    },
    "0b0": {
      "growth": 0
    }
  },
  "minecraft:suspicious_gravel": {
    "default": {
      "hanging": false,
      "brushed_progress": 0
    },
    "support_value": {
      "hanging": [
        false,
        true
      ],
      "brushed_progress": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "hanging": false,
      "brushed_progress": 0
    }
  },
  "minecraft:mangrove_log": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    }
  },
  "minecraft:mangrove_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:mangrove_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:mangrove_fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    }
  },
  "minecraft:mangrove_leaves": {
    "default": {
      "update_bit": false,
      "persistent_bit": false
    },
    "support_value": {
      "update_bit": [
        false,
        true
      ],
      "persistent_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "update_bit": false,
      "persistent_bit": false
    }
  },
  "minecraft:mangrove_propagule": {
    "default": {
      "hanging": false,
      "propagule_stage": 0
    },
    "support_value": {
      "hanging": [
        false,
        true
      ],
      "propagule_stage": [
        0,
        1,
        2,
        3,
        4
      ]
    },
    "0b0": {
      "hanging": false,
      "propagule_stage": 0
    }
  },
  "minecraft:mangrove_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:mangrove_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    }
  },
  "minecraft:mangrove_wood": {
    "default": {
      "stripped_bit": false,
      "pillar_axis": "y"
    },
    "support_value": {
      "stripped_bit": [
        false,
        true
      ],
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "stripped_bit": false,
      "pillar_axis": "y"
    }
  },
  "minecraft:stripped_mangrove_log": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    }
  },
  "minecraft:stripped_mangrove_wood": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    }
  },
  "minecraft:mud_brick_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:mud_brick_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:mud_brick_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    }
  },
  "minecraft:mud_brick_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:cherry_button": {
    "default": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "support_value": {
      "button_pressed_bit": [
        false,
        true
      ],
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "button_pressed_bit": false,
      "facing_direction": 0
    },
    "0b1": {
      "button_pressed_bit": false,
      "facing_direction": 1
    },
    "0b10": {
      "button_pressed_bit": false,
      "facing_direction": 2
    },
    "0b11": {
      "button_pressed_bit": false,
      "facing_direction": 3
    },
    "0b100": {
      "button_pressed_bit": false,
      "facing_direction": 4
    },
    "0b101": {
      "button_pressed_bit": false,
      "facing_direction": 5
    },
    "0b1000": {
      "button_pressed_bit": true,
      "facing_direction": 0
    },
    "0b1001": {
      "button_pressed_bit": true,
      "facing_direction": 1
    },
    "0b1010": {
      "button_pressed_bit": true,
      "facing_direction": 2
    },
    "0b1011": {
      "button_pressed_bit": true,
      "facing_direction": 3
    },
    "0b1100": {
      "button_pressed_bit": true,
      "facing_direction": 4
    },
    "0b1101": {
      "button_pressed_bit": true,
      "facing_direction": 5
    }
  },
  "minecraft:cherry_log": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    }
  },
  "minecraft:cherry_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:cherry_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:cherry_fence_gate": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "in_wall_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "in_wall_bit": false
    }
  },
  "minecraft:cherry_leaves": {
    "default": {
      "update_bit": false,
      "persistent_bit": false
    },
    "support_value": {
      "update_bit": [
        false,
        true
      ],
      "persistent_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "update_bit": false,
      "persistent_bit": false
    }
  },
  "minecraft:cherry_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:cherry_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    }
  },
  "minecraft:cherry_wood": {
    "default": {
      "stripped_bit": false,
      "pillar_axis": "y"
    },
    "support_value": {
      "stripped_bit": [
        false,
        true
      ],
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "stripped_bit": false,
      "pillar_axis": "y"
    }
  },
  "minecraft:stripped_cherry_log": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    }
  },
  "minecraft:stripped_cherry_wood": {
    "default": {
      "pillar_axis": "y"
    },
    "support_value": {
      "pillar_axis": [
        "y",
        "x",
        "z"
      ]
    },
    "0b0": {
      "pillar_axis": "y"
    }
  },
  "minecraft:cherry_hanging_sign": {
    "default": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "attached_bit": [
        false,
        true
      ],
      "hanging": [
        false,
        true
      ],
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "facing_direction": 0,
      "attached_bit": false,
      "hanging": false,
      "ground_sign_direction": 0
    }
  },
  "minecraft:cherry_pressure_plate": {
    "default": {
      "redstone_signal": 0
    },
    "support_value": {
      "redstone_signal": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "redstone_signal": 0
    }
  },
  "minecraft:cherry_sapling": {
    "default": {
      "age_bit": false
    },
    "support_value": {
      "age_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "age_bit": false
    }
  },
  "minecraft:cherry_standing_sign": {
    "default": {
      "ground_sign_direction": 0
    },
    "support_value": {
      "ground_sign_direction": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15
      ]
    },
    "0b0": {
      "ground_sign_direction": 0
    }
  },
  "minecraft:cherry_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    }
  },
  "minecraft:cherry_wall_sign": {
    "default": {
      "facing_direction": 2
    },
    "support_value": {
      "facing_direction": [
        0,
        1,
        2,
        3,
        4,
        5
      ]
    },
    "0b0": {
      "facing_direction": 0
    }
  },
  "minecraft:pink_petals": {
    "default": {
      "growth": 0,
      "direction": 0
    },
    "support_value": {
      "growth": [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7
      ],
      "direction": [
        0,
        1,
        2,
        3
      ]
    },
    "0b0": {
      "growth": 0,
      "direction": 0
    }
  },
  "minecraft:calibrated_sculk_sensor": {
    "default": {
      "direction": 0,
      "powered_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "powered_bit": false
    }
  },
  "minecraft:crafter": {
    "default": {
      "crafting": false,
      "orientation": "down_east",
      "triggered_bit": false
    },
    "support_value": {
      "crafting": [
        false,
        true
      ],
      "direction": [
        "down_east",
        "down_north",
        "down_south",
        "down_west",
        "up_east",
        "up_north",
        "up_south",
        "up_west",
        "east_up",
        "north_up",
        "south_up",
        "west_up"
      ],
      "triggered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "crafting": false,
      "orientation": "down_east",
      "triggered_bit": false
    }
  },
  "minecraft:copper_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:exposed_copper_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:oxidized_copper_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:weathered_copper_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:waxed_copper_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:waxed_exposed_copper_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:waxed_oxidized_copper_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:waxed_weathered_copper_door": {
    "default": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "open_bit": [
        false,
        true
      ],
      "upper_block_bit": [
        false,
        true
      ],
      "door_hinge_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "open_bit": false,
      "upper_block_bit": false,
      "door_hinge_bit": false
    }
  },
  "minecraft:copper_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    }
  },
  "minecraft:exposed_copper_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    }
  },
  "minecraft:oxidized_copper_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    }
  },
  "minecraft:weathered_copper_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    }
  },
  "minecraft:waxed_copper_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    }
  },
  "minecraft:waxed_exposed_copper_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    }
  },
  "minecraft:waxed_oxidized_copper_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    }
  },
  "minecraft:waxed_weathered_copper_trapdoor": {
    "default": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    },
    "support_value": {
      "direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ],
      "open_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "direction": 0,
      "upside_down_bit": false,
      "open_bit": false
    }
  },
  "minecraft:copper_bulb": {
    "default": {
      "lit": false,
      "powered_bit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false,
      "powered_bit": false
    }
  },
  "minecraft:exposed_copper_bulb": {
    "default": {
      "lit": false,
      "powered_bit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false,
      "powered_bit": false
    }
  },
  "minecraft:oxidized_copper_bulb": {
    "default": {
      "lit": false,
      "powered_bit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false,
      "powered_bit": false
    }
  },
  "minecraft:weathered_copper_bulb": {
    "default": {
      "lit": false,
      "powered_bit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false,
      "powered_bit": false
    }
  },
  "minecraft:waxed_copper_bulb": {
    "default": {
      "lit": false,
      "powered_bit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false,
      "powered_bit": false
    }
  },
  "minecraft:waxed_exposed_copper_bulb": {
    "default": {
      "lit": false,
      "powered_bit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false,
      "powered_bit": false
    }
  },
  "minecraft:waxed_oxidized_copper_bulb": {
    "default": {
      "lit": false,
      "powered_bit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false,
      "powered_bit": false
    }
  },
  "minecraft:waxed_weathered_copper_bulb": {
    "default": {
      "lit": false,
      "powered_bit": false
    },
    "support_value": {
      "lit": [
        false,
        true
      ],
      "powered_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "lit": false,
      "powered_bit": false
    }
  },
  "minecraft:tuff_brick_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:tuff_brick_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:tuff_brick_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    }
  },
  "minecraft:tuff_brick_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:tuff_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:tuff_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:tuff_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    }
  },
  "minecraft:tuff_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:polished_tuff_stairs": {
    "default": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    },
    "support_value": {
      "weirdo_direction": [
        0,
        1,
        2,
        3
      ],
      "upside_down_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "weirdo_direction": 0,
      "upside_down_bit": false
    }
  },
  "minecraft:polished_tuff_double_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:polished_tuff_slab": {
    "default": {
      "top_slot_bit": false
    },
    "support_value": {
      "top_slot_bit": [
        false,
        true
      ]
    },
    "0b0": {
      "top_slot_bit": false
    }
  },
  "minecraft:polished_tuff_wall": {
    "default": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    },
    "support_value": {
      "wall_connection_type_east": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_north": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_south": [
        "none",
        "short",
        "tall"
      ],
      "wall_connection_type_west": [
        "none",
        "short",
        "tall"
      ],
      "wall_post_bit": [
        true,
        false
      ]
    },
    "0b0": {
      "wall_connection_type_east": "none",
      "wall_connection_type_north": "none",
      "wall_connection_type_south": "none",
      "wall_connection_type_west": "none",
      "wall_post_bit": true
    }
  },
  "minecraft:trial_spawner": {
    "default": {
      "trial_spawner_state": 0,
      "ominous": false
    },
    "support_value": {
      "trial_spawner_state": [
        0,
        1,
        2,
        3,
        4,
        5
      ],
      "ominous": [
        false,
        true
      ]
    },
    "0b0": {
      "trial_spawner_state": 0,
      "ominous": false
    }
  },
  "minecraft:vault": {
    "default": {
      "minecraft:cardinal_direction": "south",
      "vault_state": "unlocking",
      "ominous": false
    },
    "support_value": {
      "minecraft:cardinal_direction": [
        "south",
        "north",
        "east",
        "west"
      ],
      "vault_state": [
        "unlocking",
        "active",
        "ejecting",
        "inactive"
      ],
      "ominous": [
        false,
        true
      ]
    },
    "0b0": {
      "minecraft:cardinal_direction": "south",
      "vault_state": "unlocking",
      "ominous": false
    }
  }
};