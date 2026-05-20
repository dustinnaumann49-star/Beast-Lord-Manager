// data.js

export const alphas = {
    "Fleischfresser": {
        "S1": {
            "Tibetdogge": {
                skill1: { type: "aura", effect: "reduce_enemy_atk", value: 0.25, reduce_enemy_alpha_dmg: 0.25, target_bonus: "third_row", bonus_value: 1.0 },
                skill2: { type: "passive", effect: "increase_def", value: 0.38 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.38 },
                skill4: { type: "active", chance: 0.7, dmg: 200, reduce_enemy_alpha_dmg: 0.3 },
                skill5: { type: "passive", effect: "increase_hp", value: 0.15 },
                skill6: { type: "special", rounds: 3, reduce_enemy_alpha_dmg: 0.3, heal: 4.6 }
            },
            "Jaguarundi": {
                skill1: { type: "passive", effect: "increase_atk", value: 0.8 },
                skill2: { type: "passive", effect: "increase_def", value: 0.38 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.38 },
                skill4: { type: "active", chance: 0.7, dmg_multiplier: 2.5, target: "front_row", debuff: "increase_alpha_dmg_taken", debuff_value: 0.3 },
                skill5: { type: "passive", effect: "increase_hp", value: 0.15 },
                skill6: { type: "special", chance: 0.6, effect: "double_attack", duration_rounds: 1 }
            }
        },
        "S2": {},
        "S3": {},
        "S4": {}
    },
    // ... restliche Struktur
};
