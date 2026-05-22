// Importe der Truppendaten
import CarnivoreTroops from '../data/troops/carnivore_troops.js';
import HerbivoreTroops from '../data/troops/herbivore_troops.js';
import OmnivoreTroops from '../data/troops/omnivore_troops.js';

// Importe der Alpha-Daten
import CarnivoreAlphas from '../data/alphas/carnivores.js';
import HerbivoreAlphas from '../data/alphas/herbivores.js';
import OmnivoreAlphas from '../data/omnivores.js';

const GameEngine = {
    // Zentrale Alpha-Registry
    allAlphas: { ...CarnivoreAlphas, ...HerbivoreAlphas, ...OmnivoreAlphas },

    /**
     * PHASE 1: Pre-Combat (Statische Boni)
     * Wird einmalig vor Kampfbeginn aufgerufen (Skill 2, 3, 5).
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
     * PHASE 2: In-Combat (Dynamische Skills)
     * Führt Skills (1, 4, 6) aus.
     */
    executeCombatSkill: function(alphaId, skillKey, attackerRow, enemyRows, currentRound) {
        const alpha = this.allAlphas[alphaId];
        const skill = alpha?.skills[skillKey];
        
        if (!skill || skill.type === 'passive_stat') return;

        // Vorbereitungsrunden-Prüfung
        if (skill.preparation_rounds && currentRound <= skill.preparation_rounds) return;

        // Effekte verarbeiten
        skill.effects.forEach(effect => {
            switch (effect.type) {
                case 'alpha_damage':
                    this.handleDamage(effect, attackerRow, enemyRows);
                    break;
                case 'debuff_atk_def':
                    this.handleDebuff(effect, enemyRows);
                    break;
            }
        });
    },

    /**
     * Schadensformel: (ATK * Anzahl) * Multiplikator
     */
    handleDamage: function(effect, attackerRow, enemyRows) {
        if (effect.chance && Math.random() > effect.chance) return;

        const baseAtk = attackerRow.troopStats.atk;
        const troopCount = attackerRow.currentCount;
        const multiplier = effect.value || effect.multiplier;
        
        const rawDamage = (baseAtk * troopCount) * multiplier;

        const target = enemyRows[Math.floor(Math.random() * enemyRows.length)];
        console.log(`Schaden an Reihe ${target.id}: ${rawDamage}`);
    },

    handleDebuff: function(effect, enemyRows) {
        console.log(`Debuff angewendet: ${effect.type} für ${effect.duration} Runden`);
    },

    /**
     * KAMPFENDE-LOGIK
     * Prüft, ob der Kampf nach 8 Runden oder durch Truppenverlust endet.
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

        if (playerTotal > enemyTotal) return 'Player';
        if (enemyTotal > playerTotal) return 'Enemy';
        return 'Draw';
    }
};

export default GameEngine;
