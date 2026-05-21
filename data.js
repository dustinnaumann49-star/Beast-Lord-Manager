/**
 * Engine Datenkonfiguration für Alphas
 * Struktur: Basiswert-Skalierung, Reichweiten-Logik und Trigger-Events
 */

const Alphas = {
  "Tibetdogge": {
    "id": "tibetdogge_01",
    "class": "Fleischfresser",
    "skills": {
      "skill1": {
        "name": "Hartnäckiger Kampf",
        "type": "passive",
        "condition": { 
          "position": "front_row" 
        },
        "effects": [
          { "target": "self_row", "type": "dmg_reduction", "value": 0.30 },
          { "target": "back_row", "type": "atk_buff_base", "value": 1.00 }
        ]
      },
      "skill4": {
        "name": "Leise Bedrohung",
        "type": "trigger",
        "trigger": "after_normal_attack",
        "chance": 0.70,
        "range": 2,
        "effects": [
          { "target": "random_enemy_row", "type": "alpha_damage", "multiplier": 2.00 },
          { "target": "random_enemy_row", "type": "debuff_reduce_skill_dmg", "value": 0.30 }
        ]
      },
      "skill6": {
        "name": "Schutzinstinkt",
        "type": "active_round_start",
        "duration": 3,
        "range": 2,
        "effects": [
          { "target": "two_random_friendly_rows", "type": "dmg_reduction", "value": 0.30 },
          { "target": "self_row", "type": "heal_base_hp", "value": 4.50 }
        ]
      }
    }
  }
  // Hier werden weitere Alphas nach dem gleichen Schema ergänzt
};

// Export für die Engine-Nutzung
export default Alphas;
