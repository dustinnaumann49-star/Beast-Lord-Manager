import BattleManager from './engine/battleManager.js';

// 1. Hier definieren wir Testdaten, damit wir sehen, ob die Engine läuft
const playerArmy = [
    { id: "Reihe_1", alphaId: "dein_alpha_id", troopStats: { atk: 100, def: 50 }, count: 100 }
];

const enemyArmy = [
    { id: "Gegner_1", alphaId: "gegner_alpha_id", troopStats: { atk: 90, def: 40 }, count: 80 }
];

// 2. Wir initialisieren den Kampf-Zustand
const gameState = BattleManager.initializeBattleState(playerArmy, enemyArmy);

// 3. Wir starten den Kampf
BattleManager.runBattle(gameState);
