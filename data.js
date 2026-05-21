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
            },
            "Weißer Löwe": {
                skill1: { type: "active", chance: 0.6, dmg_multiplier: 3.0, target: "front_row" },
                skill2: { type: "passive", effect: "increase_def", value: 0.38 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.38 },
                skill4: { type: "active", chance: 0.6, dmg_multiplier: 2.5, target: "two_random_rows" },
                skill5: { type: "passive", effect: "increase_atk", value: 0.38 },
                skill6: { type: "passive", effect: "increase_atk_and_alpha_dmg", atk_value: 0.5, alpha_dmg_value: 0.5 }
            }
        },
        "S2": {
            "Titanis": {
                skill1: { type: "aura", effect: "increase_all_rows_atk", value: 1.8, target: "all_rows" },
                skill2: { type: "passive", effect: "increase_def", value: 0.48 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.48 },
                skill4: { type: "active", rounds: 3, chance: 0.75, dmg_multiplier: 1.0, target: "two_random_rows" },
                skill5: { type: "passive", effect: "increase_hp", value: 0.20 },
                skill6: { type: "special", rounds: 3, chance: 1.0, trigger: "on_front_row_damage_taken", dmg_multiplier: 1.8 }
            },
            "Amerikanischer Löwe": {
                skill1: { type: "active", chance: 0.7, effect: "remove_debuffs", lp_bonus: 0.4 },
                skill2: { type: "passive", effect: "increase_def", value: 0.48 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.48 },
                skill4: { type: "special", rounds: 3, chance: 1.0, effect: "combo_attack" },
                skill5: { type: "passive", effect: "increase_def", value: 0.48 },
                skill6: { type: "special", trigger: "on_own_beast_damage_taken", effect: "reflect_damage", value: 0.15 }
            }
        },
        "S3": {},
        "S4": {}
    },
    // ...
};
