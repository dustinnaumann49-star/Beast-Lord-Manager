/**
 * GameEngine - Zentrale Logik
 * Hinweis: Daten werden über das window-Objekt aus den Alpha- und Truppen-Dateien bezogen.
 */

const GameEngine = {
    // Zentrale Registry für alle Alphas
    allAlphas: {},

    /**
     * Initialisierung der Engine: Führt alle globalen Alpha-Daten zusammen.
     * Dies sollte aufgerufen werden, nachdem alle Daten-Skripte geladen wurden.
     */
    init: function() {
        this.allAlphas = { 
            ...window.CarnivoreAlphas, 
            ...window.Herbivores, 
            ...window.Omnivores 
        };
        console.log("GameEngine initialisiert. Alphas geladen:", Object.keys(this.allAlphas).length);
    },

    /**
     * PHASE 1: Pre-Combat (Statische Boni)
     */
    applyPassiveBonuses: function(alphaId, baseStats) {
        const alpha = this.allAlphas[alphaId];
        if (!alpha) return baseStats;

        let bonusAtk = 0, bonusDef = 0, bonusHp = 0;

        Object.values(alpha.skills).forEach(skill => {
            if (skill.type === 'passive_stat') {
                skill.effects.forEach(eff => {
                    if (eff.type === 'atk_bonus') bonusAtk += eff.value;
                    if (eff.type === 'def_bonus') bonusDef += eff.value;
                    if (eff.type === 'hp_bonus') bonusHp += eff.value;
                });
            }
        });

        return {
            atk: baseStats.atk * (1 + bonusAtk),
            def: baseStats.def * (1 + bonusDef),
            hp: baseStats.hp * (1 + bonusHp)
        };
    },

    /**
     * KAMPFENDE-LOGIK
     */
    checkBattleEnd: function(gameState) {
        if (gameState.currentRound >= 8) return { finished: true, reason: 'round_limit' };
        
        const playerAlive = gameState.playerRows.some(r => r.currentCount > 0);
        const enemyAlive = gameState.enemyRows.some(r => r.currentCount > 0);
        
        if (!playerAlive || !enemyAlive) return { finished: true, reason: 'units_eliminated' };
        
        return { finished: false };
    },

    /**
     * Ermittelt Gewinner basierend auf Gesamtzahl der verbleibenden Truppen.
     */
    determineWinner: function(gameState) {
        const playerTotal = gameState.playerRows.reduce((sum, r) => sum + r.currentCount, 0);
        const enemyTotal = gameState.enemyRows.reduce((sum, r) => sum + r.currentCount, 0);

        return playerTotal > enemyTotal ? "player" : "enemy";
    },

    handleDamage: function(effect, attackerRow, enemyRows) {
        const baseAtk = attackerRow.unitStats.atk;
        const troopCount = attackerRow.currentCount;
        const multiplier = effect.value || effect.multiplier;
        
        const rawDamage = (baseAtk * troopCount) * multiplier;
        const target = enemyRows[Math.floor(Math.random() * enemyRows.length)];
        
        console.log(`Schaden an Reihe ${target.id}: ${rawDamage}`);
    },

    handleDebuff: function(effect, enemyRows) {
        console.log(`Debuff angewendet: ${effect.type} für ${effect.duration} Runden`);
    }
};
