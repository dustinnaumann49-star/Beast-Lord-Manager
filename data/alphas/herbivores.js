const herbivores = {
  "Hebridenschaf": {
    "id": "hebridenschaf_01",
    "class": "Pflanzenfresser",
    "skills": {
      "skill1": { "name": "Mächtiger Gegenschlag", "type": "active_combat_reaction", "effects": [{ "target": "attacker", "type": "counter_damage", "chance": 1.0, "multiplier": 1.10, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "self_unit", "type": "atk_buff_stackable", "value": 0.30, "duration": "permanent" }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "def_buff", "value": 0.38 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "atk_buff", "value": 0.38 }] },
      "skill4": { "name": "Unbeugsamkeit", "type": "passive_combat_defensive", "effects": [{ "target": "self_unit", "type": "dmg_reduction_taken", "value": 0.25 }, { "target": "self_unit", "type": "emergency_heal", "trigger_hp_threshold": 0.50, "heal_multiplier": 5.50, "limit_per_battle": 1 }] },
      "skill5": { "name": "Bestien-Angriff", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "atk_buff", "value": 0.38 }] },
      "skill6": { "name": "Geschickte Wendung", "type": "active_combat_phase", "effects": [{ "target": "all_units", "type": "skill_dmg_reduction", "value": 0.20, "duration": 3, "rounds": [1, 2, 3] }, { "target": "friendly_herbivores", "type": "skill_dmg_buff", "value": 0.30, "duration": "until_end_of_battle", "trigger_round": 4 }] }
    }
  },
  "WeissesRentier": {
    "id": "weisses_rentier_01",
    "class": "Pflanzenfresser",
    "skills": {
      "skill1": { "name": "Heilungskraft", "type": "active_combat_heal", "range": 2, "effects": [{ "target": "two_random_friendly_rows", "type": "heal_percentage", "value": 1.50, "frequency": "each_round" }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "def_buff", "value": 0.38 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "atk_buff", "value": 0.38 }] },
      "skill4": { "name": "Tödliche Verführung", "type": "active_combat", "range": 4, "effects": [{ "target": "one_random_enemy_row", "type": "alpha_damage", "chance": 0.80, "multiplier": 2.10, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "one_random_enemy_row", "type": "disarm", "chance": 0.50, "duration": 1 }] },
      "skill5": { "name": "Lebenspunkte-Bonus", "type": "passive_attribute_buff", "effects": [{ "target": "self_unit", "type": "hp_buff", "value": 0.15 }] },
      "skill6": { "name": "Weißer Wächter", "type": "active_combat_phase", "effects": [{ "target": "friendly_herbivores", "type": "skill_dmg_reduction", "value": 0.30, "duration": 4, "rounds": [1, 2, 3, 4] }] }
    }
  },
  "Yak": {
    "id": "yak_01",
    "class": "Pflanzenfresser",
    "skills": {
      "skill1": { "name": "Combo-Stichangriffe", "type": "active_combat", "range": 5, "effects": [{ "target": "one_random_enemy_row", "type": "multi_hit_damage", "prep_rounds": 1, "chance": 0.80, "hits": [1.20, 2.40, 4.80] }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "def_buff", "value": 0.38 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "atk_buff", "value": 0.38 }] },
      "skill4": { "name": "Tapferkeit", "type": "passive_combat_stacking", "effects": [{ "target": "self_unit", "type": "skill_dmg_buff_stackable", "value_per_stack": 0.10, "frequency": "per_round", "max_stack": 0.80 }] },
      "skill5": { "name": "Bestien-Angriff", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "atk_buff", "value": 0.38 }] },
      "skill6": { "name": "Vorteilhafte Verfolgung", "type": "active_combat_buff_and_dot", "range": 5, "effects": [{ "target": "self_unit", "type": "herbivore_atk_buff", "value": 0.10 }, { "target": "two_random_enemy_units", "type": "dot_damage", "multiplier": 1.00, "scaling": { "type": "per_alpha_level", "value": 0.02 }, "frequency": "each_round" }] }
    }
  },
  "Doedicurus": {
    "id": "doedicurus_01",
    "class": "Pflanzenfresser",
    "skills": {
      "skill1": { "name": "Vollständige Verteidigung", "type": "pre_war_defensive", "range": 1, "effects": [{ "target": "self_unit", "type": "defense_stance", "duration": 3, "restriction": "cannot_normal_attack", "dmg_reduction": 0.50 }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "def_buff", "value": 0.48 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "atk_buff", "value": 0.48 }] },
      "skill4": { "name": "Lautloser Schlag", "type": "active_combat", "range": 3, "effects": [{ "target": "one_random_enemy_row", "type": "alpha_damage", "chance": 0.50, "multiplier": 2.20, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "one_random_enemy_row", "type": "silence", "chance": 0.50, "duration": 1 }] },
      "skill5": { "name": "Lebenspunkte-Bonus", "type": "passive_attribute_buff", "effects": [{ "target": "self_unit", "type": "hp_buff", "value": 0.20 }] },
      "skill6": { "name": "Gewaltiger Schwanz", "type": "active_combat_phase", "range": 3, "effects": [{ "target": "two_random_enemy_rows", "type": "phased_damage", "rounds": [2, 4, 6], "multiplier": 3.00, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "two_random_enemy_rows", "type": "dmg_taken_debuff_if_cc", "value": 0.30, "duration": 2 }] }
    }
  },
  "Wollnashorn": {
    "id": "wollnashorn_01",
    "class": "Pflanzenfresser",
    "skills": {
      "skill1": { "name": "Brutale Zerstörung", "type": "active_combat", "range": 5, "effects": [{ "target": "highest_strength_enemy_unit", "type": "alpha_damage", "chance": 0.50, "multiplier": 3.50, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "highest_strength_enemy_unit", "type": "suppress", "chance": 0.50, "duration": 1 }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "def_buff", "value": 0.48 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "atk_buff", "value": 0.48 }] },
      "skill4": { "name": "Rasendes Fegen", "type": "active_combat_phase", "range": 5, "effects": [{ "target": "all_enemy_units", "type": "phased_damage", "rounds": [1, 3, 5, 7], "chance": 0.60, "multiplier": 2.50, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] },
      "skill5": { "name": "Bestien-Angriff", "type": "passive_attribute_buff", "effects": [{ "target": "beast_units", "type": "atk_buff", "value": 0.48 }] },
      "skill6": { "name": "Impulsschlag", "type": "active_combat", "range": 5, "effects": [{ "target": "one_random_enemy_row", "type": "dot_damage", "multiplier": 2.50, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "one_random_enemy_row", "type": "bonus_damage_if_cc", "value": 3.50, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] }
    }
  }
};
