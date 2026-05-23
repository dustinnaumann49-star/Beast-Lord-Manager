window.BattleManager = {
    /**
     * Bereitet den initialen Zustand vor. 
     * Erwartet pArmy und eArmy als Arrays mit {alphaId, troopStats, count}
     */
    initializeBattleState: function(playerArmy, enemyArmy) {
        return {
            currentRound: 0,
            playerRows: playerArmy.map((row, index) => ({
                id: 'p' + index,
                alphaId: row.alphaId,
                troopStats: { ...row.troopStats },
                currentCount: row.count,
                activeDebuffs: []
            })),
            enemyRows: enemyArmy.map((row, index) => ({
                id: 'e' + index,
                alphaId: row.alphaId,
                troopStats: { ...row.troopStats },
                currentCount: row.count,
                activeDebuffs: []
            }))
        };
    },

    /**
     * Führt den Kampf aus
     */
    runBattle: function(pArmy, eArmy) {
        // Zustand erstellen
        const gameState = this.initializeBattleState(pArmy, eArmy);
        
        console.log("Kampf gestartet!");

        // 1. Passiv-Boni anwenden
        [...gameState.playerRows, ...gameState.enemyRows].forEach(row => {
            // Falls GameEngine lokal verfügbar ist, sonst ignorieren oder manuell setzen
            if (typeof GameEngine !== 'undefined') {
                row.troopStats = GameEngine.applyPassiveBonuses(row.alphaId, row.troopStats);
            }
        });

        // 2. Kampf-Loop
        while (gameState.currentRound < 8) {
            gameState.currentRound++;
            
            // Kampf-Logik (Hier werden deine Skills berechnet)
            // ...

            // Ende prüfen
            if (gameState.playerRows.every(r => r.currentCount <= 0) || 
                gameState.enemyRows.every(r => r.currentCount <= 0)) {
                break;
            }
        }

        // 3. Ergebnis
        return "Kampf beendet nach Runde " + gameState.currentRound;
    }
};
