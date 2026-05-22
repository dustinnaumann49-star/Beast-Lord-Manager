import GameEngine from './gameEngine.js';

const BattleManager = {
    /**
     * Bereitet den initialen Zustand des Kampfes vor
     */
    initializeBattleState: function(playerArmy, enemyArmy) {
        return {
            currentRound: 0,
            playerRows: playerArmy.map(row => ({
                id: row.id,
                alphaId: row.alphaId,
                troopStats: { ...row.troopStats },
                currentCount: row.count,
                activeDebuffs: []
            })),
            enemyRows: enemyArmy.map(row => ({
                id: row.id,
                alphaId: row.alphaId,
                troopStats: { ...row.troopStats },
                currentCount: row.count,
                activeDebuffs: []
            }))
        };
    },

    /**
     * Führt den gesamten Kampf durch
     */
    runBattle: function(gameState) {
        console.log("Kampf gestartet!");

        // 1. Passiv-Boni anwenden (Pre-Combat)
        [...gameState.playerRows, ...gameState.enemyRows].forEach(row => {
            row.troopStats = GameEngine.applyPassiveBonuses(row.alphaId, row.troopStats);
        });

        // 2. Kampf-Loop (maximal 8 Runden)
        while (gameState.currentRound < 8) {
            gameState.currentRound++;
            console.log(`--- Runde ${gameState.currentRound} ---`);

            // Hier würden wir pro Runde die Skills triggern
            // Beispiel: GameEngine.executeCombatSkill(...)

            // Kampfende prüfen
            const status = GameEngine.checkBattleEnd(gameState);
            if (status.finished) {
                console.log(`Kampf endet vorzeitig: ${status.reason}`);
                break;
            }
        }

        // 3. Ergebnis
        const winner = GameEngine.determineWinner(gameState);
        console.log(`Kampf beendet! Sieger: ${winner}`);
        return winner;
    }
};

export default BattleManager;
