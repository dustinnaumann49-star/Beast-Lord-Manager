// data.js
export const alphas = {
    // Fleischfresser
    "Hyaenodon": { type: "Fleischfresser", skillRate: 0.5, skillVal: 0.1, skillType: "heal" },
    "Jaguarundi": { type: "Fleischfresser", skillRate: 0.6, skillVal: 0.3, skillType: "damage" },
    "Smilodon": { type: "Fleischfresser", skillRate: 0.7, skillVal: 0.2, skillType: "damage" },
    
    // Allesfresser
    "Geierschildkröte": { type: "Allesfresser", skillRate: 0.5, skillVal: 0.4, skillType: "damage" },
    "Klapperschlange": { type: "Allesfresser", skillRate: 0.6, skillVal: 0.4, skillType: "damage" },
    "Kodiakbär": { type: "Allesfresser", skillRate: 0.3, skillVal: 3.98, skillType: "damage" },

    // Pflanzenfresser
    // Hier kannst du künftig deine Pflanzenfresser-Alphas eintragen
};

export const beasts = {
    // Fleischfresser
    "Nordwestlicher Wolf": { type: "Fleischfresser", atk: 120, def: 30, hp: 1000 },
    
    // Allesfresser
    "Sumatra-Orang-Utan": { type: "Allesfresser", atk: 90, def: 60, hp: 1500 },
    
    // Pflanzenfresser
    "Takin": { type: "Pflanzenfresser", atk: 60, def: 120, hp: 2500 }
};
