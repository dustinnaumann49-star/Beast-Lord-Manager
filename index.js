// index.js
import BattleManager from './engine/battleManager.js';

// 1. Import der Truppen-Daten
import CarnivoreTroops from './data/troops/carnivore_troops.js';
import HerbivoreTroops from './data/troops/herbivore_troops.js';
import OmnivoreTroops from './data/troops/omnivore_troops.js';

// 2. Import der Alpha-Daten (Pfade anpassen, falls Dateinamen abweichen)
import CarnivoreAlphas from './data/alphas/carnivore_alphas.js';
import HerbivoreAlphas from './data/alphas/herbivore_alphas.js';
import OmnivoreAlphas from './data/alphas/omnivore_alphas.js';

/**
 * Kampf-Konfiguration
 * Hier kannst du nun über die importierten Objekte auf alle deine Daten zugreifen.
 */
const playerArmy = [
    { 
        id: "Reihe_1", 
        alphaId: "dein_alpha_id", // Hier die ID des Alphas eintragen
        troopStats: CarnivoreTroops["T10"]["Säbelzahnkatze"].stats, 
        count: 500 
    }
];

const enemyArmy = [
    { 
        id: "Gegner_1", 
        alphaId: "gegner_alpha_id", 
        troopStats: HerbivoreTroops["T1"]["Feldhase"].stats, 
        count: 500 
    }
];

// 3. Initialisierung und Start
console.log("System initialisiert. Starte Kampf...");
const gameState = BattleManager.initializeBattleState(playerArmy, enemyArmy);
BattleManager.runBattle(gameState);
