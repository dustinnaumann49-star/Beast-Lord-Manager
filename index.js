// index.js
import BattleManager from './engine/battleManager.js';

// Import Truppen
import CarnivoreTroops from './data/troops/carnivore_troops.js';
import HerbivoreTroops from './data/troops/herbivore_troops.js';
import OmnivoreTroops from './data/troops/omnivore_troops.js';

// Import Alphas
import CarnivoreAlphas from './data/alphas/carnivore_alphas.js';
import HerbivoreAlphas from './data/alphas/herbivore_alphas.js';
import OmnivoreAlphas from './data/alphas/omnivore_alphas.js';

/**
 * 3-Reihen-Konfiguration für beide Teams
 */
const playerArmy = [
    { id: "P_Reihe_1", alphaId: "alpha_01", troopStats: CarnivoreTroops["T10"]["Säbelzahnkatze"].stats, count: 500 },
    { id: "P_Reihe_2", alphaId: "alpha_02", troopStats: CarnivoreTroops["T9"]["Wolf"].stats, count: 600 },
    { id: "P_Reihe_3", alphaId: "alpha_03", troopStats: CarnivoreTroops["T8"]["Luchs"].stats, count: 700 }
];

const enemyArmy = [
    { id: "E_Reihe_1", alphaId: "enemy_01", troopStats: HerbivoreTroops["T10"]["Elefant"].stats, count: 200 },
    { id: "E_Reihe_2", alphaId: "enemy_02", troopStats: HerbivoreTroops["T9"]["Nashorn"].stats, count: 300 },
    { id: "E_Reihe_3", alphaId: "enemy_03", troopStats: HerbivoreTroops["T8"]["Bison"].stats, count: 400 }
];

// Initialisierung
console.log("Initialisiere Kampf mit 3 Reihen pro Seite...");
const gameState = BattleManager.initializeBattleState(playerArmy, enemyArmy);

// Start
BattleManager.runBattle(gameState);
