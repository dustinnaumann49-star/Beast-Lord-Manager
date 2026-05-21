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
        "S3": {
            "Hyaenodon": {
                skill1: { type: "active", dmg_multiplier: 0.2, effect: "reduce_damage_taken", value: 0.2 },
                skill2: { type: "passive", effect: "increase_def", value: 0.60 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.60 },
                skill4: { type: "active", chance: 0.7, effect: "copy_third_row_alpha_skill" },
                skill5: { type: "passive", effect: "increase_hp", value: 0.26 },
                skill6: { type: "special", hp_bonus: 0.20, chance: 0.5, effect: "increase_def_on_skill", def_buff: 0.3, heal: 1.0, stackable: true }
            },
            "Smilodon": {
                skill1: { type: "active", chance: 0.8, effect: "double_attack", dmg_multiplier: 2.2, mark: "vulnerability", mark_value: 0.1, stackable: true },
                skill2: { type: "passive", effect: "increase_def", value: 0.60 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.60 },
                skill4: { type: "active", chance: 0.7, target: "all_rows", dmg_multiplier: 1.0 },
                skill5: { type: "passive", effect: "increase_atk", value: 0.60 },
                skill6: { type: "special", frequency: "once_per_round", effect: "increase_distance", dmg_bonus_per_distance: 0.08 }
            }
        }
    },
    "Allesfresser": {
        "S1": {
            "Geierschildkröte": {
                skill1: { type: "active", effect: "heal", heal_rate: 2.1 },
                skill2: { type: "passive", effect: "increase_def", value: 0.38 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.38 },
                skill4: { type: "active", chance: 0.5, effect: "reduce_enemy_atk_and_alpha_dmg", duration_rounds: 1 },
                skill5: { type: "passive", effect: "increase_hp", value: 0.15 },
                skill6: { type: "active", dmg_multiplier: 2.3, target: "front_row" }
            },
            "Klapperschlange": {
                skill1: { type: "active", chance: 0.6, effect: "poison", dmg_multiplier: 1.5, duration: 2 },
                skill2: { type: "passive", effect: "increase_def", value: 0.38 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.38 },
                skill4: { type: "active", chance: 0.8, prepare_rounds: 1, dmg_multiplier: 3.5, target: "two_random_rows", effect: "silence_if_poisoned" },
                skill5: { type: "passive", effect: "increase_hp", value: 0.15 },
                skill6: { type: "aura", rounds: 4, effect: "increase_all_alpha_dmg", value: 0.35 }
            },
            "Komodowaran": {
                skill1: { type: "active", chance: 0.8, dmg_multiplier: 2.8, effect: "increase_beast_atk", buff_duration: 2, buff_value: 0.5 },
                skill2: { type: "passive", effect: "increase_def", value: 0.38 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.38 },
                skill4: { type: "active", chance: 0.8, prepare_rounds: 1, dmg_multiplier: 2.0, target: "all_rows", effect: "poison", poison_dmg: 1.5, poison_duration: 1 },
                skill5: { type: "passive", effect: "increase_atk", value: 0.38 },
                skill6: { type: "active", chance: 0.5, dmg_multiplier: 1.3, target: "all_rows", bonus_dmg_if_poisoned: 0.5 }
            }
        },
        "S2": {
            "Höhlenbär": {
                skill1: { type: "aura", effect: "increase_all_beast_atk", value: 1.0 },
                skill2: { type: "passive", effect: "increase_def", value: 0.48 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.48 },
                skill4: { type: "passive", effect: "increase_dodge", value: 0.20 },
                skill5: { type: "passive", effect: "increase_hp", value: 0.20 },
                skill6: { type: "special", rounds: [2, 4, 6], chance: 0.5, effect: "buff_random_alpha_skill4_chance", target_count: 2, new_chance: 1.0 }
            },
            "Riesenbiber": {
                skill1: { type: "active", chance: 0.5, dmg_multiplier: 1.8, target: "two_random_rows", debuff: "reduce_atk_and_def", debuff_value: 0.3, duration: 2 },
                skill2: { type: "passive", effect: "increase_def", value: 0.48 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.48 },
                skill4: { type: "active", chance: 0.6, prepare_rounds: 1, dmg_multiplier: 2.5, target: "all_rows", effect: "heal", heal_rate: 3.0 },
                skill5: { type: "passive", effect: "increase_def", value: 0.48 },
                skill6: { type: "special", trigger: "on_damage_dealt", chance: 0.75, effect: "increase_atk_and_def", value: 0.3, stackable: true }
            }
        },
        "S3": {
            "Metridiochoerus": {
                skill1: { type: "aura", duration_rounds: 4, effect: "increase_dodge", value: 0.10, reduce_damage_taken: 0.20 },
                skill2: { type: "passive", effect: "increase_def", value: 0.60 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.60 },
                skill4: { type: "active", chance: 0.8, prepare_rounds: 1, dmg_multiplier: 3.5, target: "two_random_rows", effect: "silence", silence_chance: 0.5, silence_duration: 1 },
                skill5: { type: "passive", effect: "increase_def", value: 0.60 },
                skill6: { type: "special", rounds: [2, 4, 6, 8], dmg_multiplier: 2.7, target: "all_rows", effect: "bonus_dmg_on_dodge", bonus_val: 0.10, stackable: true }
            },
            "Dinopithecus": {
                skill1: { type: "active", chance: 0.7, dmg_multiplier: 2.8, target: "two_random_rows" },
                skill2: { type: "passive", effect: "increase_def", value: 0.60 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.60 },
                skill4: { type: "active", chance: 0.8, prepare_rounds: 1, dmg_multiplier: 3.4, target: "all_rows", debuff: "reduce_healing", debuff_value: 0.4, duration: 1 },
                skill5: { type: "passive", effect: "increase_atk", value: 0.60 },
                skill6: { type: "passive", effect: "increase_dodge", value: 0.10 }
            }
        }
    },
    "Pflanzenfresser": {
        "S1": {
            "Hebriden-Schaf": {
                skill1: { type: "special", trigger: "on_damage_taken", chance: 1.0, effect: "counter_attack", dmg_multiplier: 1.1, buff_beast_dmg: 0.3, stackable: true },
                skill2: { type: "passive", effect: "increase_def", value: 0.38 },
                skill3: { type: "passive", effect: "increase_atk", value: 0.38 },
                skill4: { type: "active", effect: "reduce_enemy_dmg", value: 0.25, heal_if_beast_count_below_50_pct: 5.5 },
                skill5: { type: "passive", effect: "increase_atk", value: 0.38 },
                skill6: { type: "aura", effect: "reduce_alpha_dmg", rounds: 3, value: 0.20, after_round_3_effect: "increase_beast_dmg", after_round_3_value: 0.30, end_round: 8 }
            }
        },
        "S2": {},
        "S3": {}
    }
};

export const beasts = {
    "Fleischfresser": {
        "Nordwestlicher Wolf": { atk: 120, def: 30, hp: 1000 }
    },
    "Allesfresser": {
        "Sumatra-Orang-Utan": { atk: 90, def: 60, hp: 1500 }
    },
    "Pflanzenfresser": {
        "Takin": { atk: 60, def: 120, hp: 2500 }
    }
};
