/**
 * Allesfresser-Alphas
 */

const Omnivores = {
  // --- S1 Allesfresser ---
  "Geierschildkroete": {
    "id": "geierschildkroete_01",
    "class": "Allesfresser",
    "skills": {p
      "skill1": { "name": "Heilungsmoor", "type": "active_combat_per_round", "effects": [{ "target": "self_unit", "type": "heal_percentage", "value": 2.10, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.38 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.38 }] },
      "skill4": { "name": "Harte Schale", "type": "active_combat_trigger", "chance": 0.50, "effects": [{ "target": "self_unit", "type": "dmg_reduction_taken", "value": 0.50, "duration": 1, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] },
      "skill5": { "name": "Basis-LP", "type": "passive_stat", "effects": [{ "type": "hp_bonus", "value": 0.15 }] },
      "skill6": { "name": "Unnachgiebiger Biss", "type": "active_combat_per_round", "range": 2, "effects": [{ "target": "enemy_front_row", "type": "alpha_damage", "multiplier": 2.30, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] }
    }
  },
  "Klapperschlange": {
    "id": "klapperschlange_01",
    "class": "Allesfresser",
    "skills": {
      "skill1": { "name": "Vergiftungsinfusion", "type": "active_combat", "range": 4, "effects": [{ "target": "one_random_enemy_row", "type": "apply_poison", "chance": 0.60, "duration": 2, "damage_total": 1.50 }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.38 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.38 }] },
      "skill4": { "name": "Neurotoxin", "type": "active_combat", "range": 5, "preparation_rounds": 1, "effects": [{ "target": "two_random_enemy_units", "type": "alpha_damage", "chance": 0.80, "multiplier": 3.50, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "two_random_enemy_units", "type": "apply_silence_if_poisoned", "duration": 1 }] },
      "skill5": { "name": "Basis-LP", "type": "passive_stat", "effects": [{ "type": "hp_bonus", "value": 0.15 }] },
      "skill6": { "name": "Gruseliger Killer", "type": "combat_buff", "duration": 4, "effects": [{ "target": "all_friendly_omnivore_units", "type": "skill_dmg_buff", "value": 0.35, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] }
    }
  },
  "Komodowaran": {
    "id": "komodowaran_01",
    "class": "Allesfresser",
    "skills": {
      "skill1": { "name": "Blutrausch", "type": "active_combat", "range": 5, "effects": [{ "target": "one_random_enemy_unit", "type": "alpha_damage", "chance": 0.80, "multiplier": 2.80, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "self_unit", "type": "atk_buff", "value": 0.50, "duration": 2 }] },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.38 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.38 }] },
      "skill4": { "name": "Vergiftungsschlag", "type": "active_combat", "range": 5, "preparation_rounds": 1, "effects": [{ "target": "three_random_enemy_rows", "type": "alpha_damage", "chance": 0.80, "multiplier": 2.00, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "three_random_enemy_rows", "type": "apply_poison", "duration": 1, "damage_total": 1.50 }] },
      "skill5": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.38 }] },
      "skill6": { "name": "Gnadenlose Ernte", "type": "active_combat", "range": 5, "effects": [{ "target": "all_enemy_units_in_3_rows", "type": "alpha_damage", "chance": 0.50, "multiplier": 1.30, "scaling": { "type": "per_alpha_level", "value": 0.01 } }, { "target": "all_enemy_units_in_3_rows", "type": "bonus_skill_dmg_if_poisoned", "value": 0.50 }] }
    }
  },
  // --- S2 Allesfresser ---
  "Hoehlenbaer": {
    "id": "hoehlenbaer_01",
    "class": "Allesfresser",
    "skills": {
      "skill1": { "name": "Wütende Natur", "type": "pre_combat_buff" },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.48 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.48 }] },
      "skill4": { "name": "Instinkt des Ausweichens", "type": "pre_combat_buff" },
      "skill5": { "name": "Basis-LP", "type": "passive_stat", "effects": [{ "type": "hp_bonus", "value": 0.20 }] },
      "skill6": { "name": "Wilder Ansturm", "type": "pre_combat_buff" }
    }
  },
  "Riesenbiber": {
    "id": "riesenbiber_01",
    "class": "Allesfresser",
    "skills": {
      "skill1": { 
        "name": "Schwachstellenschlag", 
        "type": "active_combat", 
        "range": 4,
        "effects": [
          { "target": "two_random_enemy_rows", "type": "alpha_damage", "chance": 0.50, "multiplier": 1.80, "scaling": { "type": "per_alpha_level", "value": 0.01 } },
          { "target": "two_random_enemy_units", "type": "apply_debuff", "duration": 2, "value": 0.30, "stats": ["atk", "def"] }
        ] 
      },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.48 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.48 }] },
      "skill4": { 
        "name": "Umfassende Taktiken", 
        "type": "active_combat", 
        "preparation_rounds": 1,
        "effects": [
          { "target": "all_enemy_units", "type": "alpha_damage", "chance": 0.60, "multiplier": 2.50, "scaling": { "type": "per_alpha_level", "value": 0.02 } },
          { "target": "all_friendly_units", "type": "healing", "chance": 0.60, "multiplier": 3.00 }
        ] 
      },
      "skill5": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.48 }] },
      "skill6": { 
        "name": "Zündung des Kriegsfads", 
        "type": "pre_combat_buff", 
        "effects": [
          { "target": "all_friendly_units", "type": "atk_def_stackable_buff", "chance": 0.75, "value": 0.30 },
          { "target": "all_friendly_units", "type": "control_resistance", "value": 0.25, "duration": 2 }
        ] 
      }
    }
  }
};

export default Omnivores;
