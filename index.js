// index.js
import BattleManager from './engine/battleManager.js';

// Import Truppen (Diese Pfade sind korrekt)
import CarnivoreTroops from './data/troops/carnivore_troops.js';
import HerbivoreTroops from './data/troops/herbivore_troops.js';
import OmnivoreTroops from './data/troops/omnivore_troops.js';

// Import Alphas (Hier war der Fehler: Die Dateien heißen nur carnivores.js etc.)
import CarnivoreAlphas from './data/alphas/carnivores.js';
import HerbivoreAlphas from './data/alphas/herbivores.js';
import OmnivoreAlphas from './data/alphas/omnivores.js';

/**
 * Armee-Konfiguration
 */
const playerArmy = [
    { id: "P_Reihe_1", alphaId: "alpha_1", troopStats: CarnivoreTroops["T10"]["BritishColumbiaWolf"].stats, count: 500 },
    { id: "P_Reihe_2", alphaId: "alpha_2", troopStats: CarnivoreTroops["T9"]["NordwestlicherWolf"].stats, count: 600 },
    { id: "P_Reihe_3", alphaId: "alpha_3", troopStats: CarnivoreTroops["T8"]["Polarwolf"].stats, count: 700 }
];

const enemyArmy = [
    { id: "E_Reihe_1", alphaId: "alpha_4", troopStats: HerbivoreTroops["T10"]["AmerikanischerBison"].stats, count: 200 },
    { id: "E_Reihe_2", alphaId: "alpha_5", troopStats: HerbivoreTroops["T9"]["Takin"].stats, count: 300 },
    { id: "E_Reihe_3", alphaId: "alpha_6", troopStats: HerbivoreTroops["T8"]["AfrikanischerBüffel"].stats, count: 400 }
];

// Start der Simulation
console.log("--- System bereit: Starte Kampf-Simulation ---");

try {
    const gameState = BattleManager.initializeBattleState(playerArmy, enemyArmy);
    BattleManager.runBattle(gameState);
    console.log("--- Kampf beendet ---");
} catch (error) {
    console.error("Fehler während der Simulation:", error);
}
