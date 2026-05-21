/**
 * Engine Datenkonfiguration: Alle Fleischfresser-Alphas (S1, S2 & S3)
 */

const Alphas = {
  // --- S1 Fleischfresser ---
  "Tibetdogge": {
    "id": "tibetdogge_01",
    "class": "Fleischfresser",
    "skills": {
      "skill1": { "name": "Hartnäckiger Kampf", "type": "passive_condition", "condition": { "position": "front_row" }, "effects": [{ "target": "self_row", "type": "dmg_reduction", "value": 0.30 }, { "target": "back_row", "type": "atk_buff_base", "value": 1.00 }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.38 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.38 }] },
      "skill4": { "name": "Leise Bedrohung", "type": "trigger", "trigger": "after_normal_attack", "chance": 0.70, "range": 2, "effects": [{ "target": "random_enemy_row", "type": "alpha_damage", "multiplier": 2.00 }, { "target": "random_enemy_row", "type": "debuff_reduce_skill_dmg", "value": 0.30 }] },
      "skill5": { "name": "Basis-LP", "type": "passive_stat", "effects": [{ "type": "hp_bonus", "value": 0.15 }] },
      "skill6": { "name": "Schutzinstinkt", "type": "active_round_start", "duration": 3, "range": 2, "effects": [{ "target": "two_random_friendly_rows", "type": "dmg_reduction", "value": 0.30 }, { "target": "self_row", "type": "heal_base_hp", "value": 4.50 }] }
    }
  },
  "Jaguarundi": {
    "id": "jaguarundi_01",
    "class": "Fleischfresser",
    "skills": {
      "skill1": { "name": "Geschicklichkeit", "type": "passive_start_of_battle", "effects": [{ "target": "self_row", "type": "speed_buff", "value": 100 }, { "target": "self_row", "type": "normal_atk_dmg_buff_base", "value": 0.80 }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.38 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.38 }] },
      "skill4": { "name": "Schwachstellenfang", "type": "trigger", "trigger": "after_normal_attack", "chance": 0.70, "range": 4, "effects": [{ "target": "enemy_front_row", "type": "alpha_damage", "multiplier": 2.50, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "enemy_front_row", "type": "debuff_increase_taken_skill_dmg", "value": 0.30, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] },
      "skill5": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.38 }] },
      "skill6": { "name": "Schneller Stoß", "type": "active_round_start", "chance": 0.60, "duration": 1, "range": 2, "effects": [{ "target": "two_random_friendly_rows", "type": "add_extra_normal_attack", "value": 1 }] }
    }
  },
  "WeisserLoewe": {
    "id": "weisser_loewe_01",
    "class": "Fleischfresser",
    "skills": {
      "skill1": { "name": "Heftiger Angriff", "type": "trigger", "trigger": "after_normal_attack", "chance": 0.60, "range": 5, "effects": [{ "target": "enemy_front_row", "type": "alpha_damage", "multiplier": 3.00, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.38 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.38 }] },
      "skill4": { "name": "Aggressiver Biss", "type": "trigger", "trigger": "after_normal_attack", "chance": 0.60, "range": 5, "effects": [{ "target": "two_random_enemy_rows", "type": "alpha_damage", "multiplier": 2.50, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] },
      "skill5": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.38 }] },
      "skill6": { "name": "Kampferprobt", "type": "passive_stat", "effects": [{ "type": "atk_dmg_buff_total", "value": 0.50 }, { "type": "skill_dmg_buff_total", "value": 0.50 }] }
    }
  },
  // --- S2 Fleischfresser ---
  "Titanis": {
    "id": "titanis_01",
    "class": "Fleischfresser",
    "skills": {
      "skill1": { "name": "Kraft des Raubvogels", "type": "pre_battle", "duration": 3, "effects": [{ "target": "all_friendly_flesh_eaters", "type": "atk_buff_percentage", "value": 0.80 }, { "target": "all_friendly_flesh_eaters", "type": "normal_atk_dmg_buff_percentage", "value": 1.00 }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.48 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.48 }] },
      "skill4": { "name": "Spritzen-Schlag", "type": "pre_battle", "duration": 3, "chance": 0.75, "effects": [{ "target": "all_friendly_flesh_eaters", "type": "apply_splash_damage", "multiplier": 1.00, "targets": 2 }] },
      "skill5": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.48 }] },
      "skill6": { "name": "Wütende Vergeltung", "type": "pre_battle", "duration": 3, "effects": [{ "target": "friendly_front_row", "type": "counter_attack", "chance": 1.00, "multiplier": 1.80, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] }
    }
  },
  "AmerikanischerLoewe": {
    "id": "amerik_loewe_01",
    "class": "Fleischfresser",
    "skills": {
      "skill1": { "name": "Instinkt der Bewahrung", "type": "active_combat", "chance": 0.70, "range": 2, "effects": [{ "target": "two_random_friendly_rows", "type": "cleanse_debuffs", "value": 1.00 }, { "target": "two_random_friendly_rows", "type": "stat_buff_def_hp", "value": 0.40, "duration": 2 }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.48 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.48 }] },
      "skill4": { "name": "Rasche Angriffe", "type": "pre_battle", "duration": 3, "range": 2, "effects": [{ "target": "two_random_friendly_rows", "type": "speed_buff", "value": 60 }, { "target": "two_random_friendly_rows", "type": "add_extra_normal_attack", "value": 1, "chance": 1.00 }] },
      "skill5": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.48 }] },
      "skill6": { "name": "Taktische Verfolgung", "type": "passive_trigger", "effects": [{ "target": "enemy_rows", "type": "debuff_increase_taken_damage", "value": 0.15, "stack_limit": 0.60 }] }
    }
  },
  // --- S3 Fleischfresser ---
  "Hyaenodon": {
    "id": "hyaenodon_01",
    "class": "Fleischfresser",
    "skills": {
      "skill1": { "name": "Siegesstrategie", "type": "pre_battle", "effects": [{ "target": "self_unit", "type": "conditional_buff", "condition": "first_attack", "value": 0.20, "buff_type": "damage_increase" }, { "target": "self_unit", "type": "conditional_buff", "condition": "second_attack", "value": 0.20, "buff_type": "damage_reduction" }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.60 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.60 }] },
      "skill4": { "name": "Meister der Nachahmung", "type": "combat_trigger", "chance": 0.70, "range": 5, "effects": [{ "target": "copy_from_back_row", "type": "trigger_skill_effect", "multiplier_bonus": 0.15 }] },
      "skill5": { "name": "Basis-LP", "type": "passive_stat", "effects": [{ "type": "hp_bonus", "value": 0.26 }] },
      "skill6": { "name": "Starke Heilung", "type": "active_combat", "range": 2, "effects": [{ "target": "all_friendly_rows", "type": "hp_buff", "value": 0.20 }, { "target": "self_row", "type": "def_buff_stackable", "value": 0.30, "chance": 0.50 }, { "target": "self_row", "type": "heal_base", "value": 1.00 }] }
    }
  },
  "Smilodon": {
    "id": "smilodon_01",
    "class": "Fleischfresser",
    "skills": {
      "skill1": { "name": "Tödlicher Comboschlag", "type": "active_combat", "chance": 0.80, "range": 6, "effects": [{ "target": "one_random_enemy_row", "type": "alpha_damage", "multiplier": 2.00, "attacks": 2 }, { "target": "one_random_enemy_row", "type": "apply_vulnerability_stack", "value": 0.10 }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.60 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.60 }] },
      "skill4": { "name": "Wilde Zähne", "type": "active_combat", "chance": 0.70, "range": 6, "effects": [{ "target": "three_random_enemy_rows", "type": "alpha_damage", "multiplier": 1.30, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] },
      "skill5": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.60 }] },
      "skill6": { "name": "Taktischer Fernschlag", "type": "pre_battle_per_round", "chance": 0.50, "effects": [{ "type": "increase_position_distance", "value": 1 }, { "type": "dmg_bonus_per_distance", "value": 0.08 }] }
    }
  }
};

export default Alphas;
