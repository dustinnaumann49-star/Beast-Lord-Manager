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
            }
        },
        "S2": {},
        "S3": {},
        "S4": {}
    },
    "Allesfresser": {
        "S1": {},
        "S2": {},
        "S3": {},
        "S4": {}
    },
    "Pflanzenfresser": {
        "S1": {},
        "S2": {},
        "S3": {},
        "S4": {}
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
