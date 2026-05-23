// Wir nutzen das global geladene GameEngine Objekt
window.BattleManager = {
    
    // Initialisiert den Kampfzustand
    initializeBattleState: function(playerArmy, enemyArmy) {
        return {
            currentRound: 0,
            logs: [], // Hier speichern wir den Kampfverlauf
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

    // Die Hauptfunktion, die von der index.html aufgerufen wird
    runBattle: function(pArmy, eArmy) {
        const gameState = this.initializeBattleState(pArmy, eArmy);
        
        // 1. Passiv-Boni initial anwenden
        [...gameState.playerRows, ...gameState.enemyRows].forEach(row => {
            row.troopStats = window.GameEngine.applyPassiveBonuses(row.alphaId, row.troopStats);
        });

        // 2. Kampfschleife (maximal 8 Runden)
        while (gameState.currentRound < 8) {
            gameState.currentRound++;
            
            // Logik-Aufruf an GameEngine
            // Hier berechnet die Engine den Schaden pro Runde
            const roundResult = window.GameEngine.calculateRound(gameState);
            gameState.logs.push(`Runde ${gameState.currentRound}: ${roundResult.summary}`);
            
            // Prüfen ob Kampf vorbei ist
            const status = window.GameEngine.checkBattleEnd(gameState);
            if (status.finished) break;
        }

        // 3. Ergebnis zurückgeben
        const winner = window.GameEngine.determineWinner(gameState);
        return {
            winner: winner,
            logs: gameState.logs,
            finalState: gameState
        };
    }
};
