/**
 * Allesfresser-Alphas
 */

const Omnivores = {
  "Geierschildkroete": {
    "id": "geierschildkroete_01",
    "class": "Allesfresser",
    "skills": {
      "skill1": { 
        "name": "Heilungsmoor", 
        "type": "active_combat_per_round", 
        "effects": [{ "target": "self_unit", "type": "heal_percentage", "value": 2.10, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] 
      },
      "skill2": { "name": "Bestien-Verteidigung", "type": "passive_stat", "effects": [{ "type": "def_bonus", "value": 0.38 }] },
      "skill3": { "name": "Bestien-Angriff", "type": "passive_stat", "effects": [{ "type": "atk_bonus", "value": 0.38 }] },
      "skill4": { 
        "name": "Harte Schale", 
        "type": "active_combat_trigger", 
        "chance": 0.50,
        "effects": [{ "target": "self_unit", "type": "dmg_reduction_taken", "value": 0.50, "duration": 1, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] 
      },
      "skill5": { "name": "Basis-LP", "type": "passive_stat", "effects": [{ "type": "hp_bonus", "value": 0.15 }] },
      "skill6": { 
        "name": "Unnachgiebiger Biss", 
        "type": "active_combat_per_round", 
        "range": 2,
        "effects": [{ "target": "enemy_front_row", "type": "alpha_damage", "multiplier": 2.30, "scaling": { "type": "per_alpha_level", "value": 0.01 } }] 
      }
    }
  }
};

export default Omnivores;
