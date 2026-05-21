/**
 * Engine Datenkonfiguration für Alphas
 */

const Alphas = {
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
      "skill5": { "name": "Basis-LP", "type": "passive_stat", "effects": [{ "type": "hp_bonus", "value": 0.15 }] },
      "skill6": { "name": "Schneller Stoß", "type": "active_round_start", "chance": 0.60, "duration": 1, "range": 2, "effects": [{ "target": "two_random_friendly_rows", "type": "add_extra_normal_attack", "value": 1 }] }
    }
  }
};

export default Alphas;
