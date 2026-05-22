// index.js
import BattleManager from './engine/battleManager.js';

// Import deiner Truppendaten
import CarnivoreTroops from './data/troops/carnivore_troops.js';
import HerbivoreTroops from './data/troops/herbivore_troops.js';
import OmnivoreTroops from './data/troops/omnivore_troops.js';

/**
 * Konfiguration des Kampfes
 * Hier definierst du, welche Einheiten antreten.
 */
const playerArmy = [
    { 
        id: "Reihe_1", 
        alphaId: "dein_alpha_id", 
        troopStats: CarnivoreTroops["T10"]["Säbelzahnkatze"].stats, // Beispiel Zugriff
        count: 500 
    }
];

const enemyArmy = [
    { 
        id: "Gegner_1", 
        alphaId: "gegner_alpha_id", 
        troopStats: HerbivoreTroops["T1"]["Feldhase"].stats, // Beispiel Zugriff
        count: 500 
    }
];

// 1. Initialisierung des Spielfelds durch den BattleManager
const gameState = BattleManager.initializeBattleState(playerArmy, enemyArmy);

// 2. Start des Kampfes
console.log("Starte Kampf-Simulation...");
BattleManager.runBattle(gameState);
