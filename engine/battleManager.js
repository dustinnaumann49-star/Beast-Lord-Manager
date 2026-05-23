// Keine Imports oben!
// Wir nutzen window.GameEngine, die bereits global geladen ist.

window.BattleManager = {
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

    runBattle: function(pArmy, eArmy) {
        const gameState = this.initializeBattleState(pArmy, eArmy);
        
        // Passiv-Boni anwenden (Greift nun auf das globale GameEngine zu)
        [...gameState.playerRows, ...gameState.enemyRows].forEach(row => {
            row.troopStats = window.GameEngine.applyPassiveBonuses(row.alphaId, row.troopStats);
        });

        while (gameState.currentRound < 8) {
            gameState.currentRound++;
            const status = window.GameEngine.checkBattleEnd(gameState);
            if (status.finished) break;
        }

        return window.GameEngine.determineWinner(gameState);
    }
};
