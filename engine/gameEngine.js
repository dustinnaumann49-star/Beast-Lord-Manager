// Keine Imports oben! (Daten müssen über die index.html geladen werden)

const GameEngine = {
    // Zentrale Alpha-Registry (wird in index.html befüllt)
    allAlphas: {}, 

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

    // ... (restliche Funktionen hier lassen, nur die 'export'-Zeile am Ende löschen)
    checkBattleEnd: function(gameState) { /* ... */ },
    determineWinner: function(gameState) { /* ... */ },
    handleDamage: function(effect, attackerRow, enemyRows) { /* ... */ },
    handleDebuff: function(effect, enemyRows) { /* ... */ },
    executeCombatSkill: function(alphaId, skillKey, attackerRow, enemyRows, currentRound) { /* ... */ }
};

// Global verfügbar machen
window.GameEngine = GameEngine;
