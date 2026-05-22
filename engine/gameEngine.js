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
     * PHASE: Pre-Combat (Statische Boni)
     * Wird einmalig vor Kampfbeginn aufgerufen, um passive Boni (Skill 2, 3, 5) 
     * auf die Truppen-Stats zu addieren.
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
     * PHASE: In-Combat (Dynamische Skills)
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
                case 'heal_percentage':
                    // Heilungslogik hier ergänzen
                    break;
            }
        });
    },

    /**
     * Schadensberechnung: (ATK * Anzahl) * Multiplikator
     */
    handleDamage: function(effect, attackerRow, enemyRows) {
        // Chance prüfen
        if (effect.chance && Math.random() > effect.chance) return;

        const baseAtk = attackerRow.troopStats.atk;
        const troopCount = attackerRow.currentCount;
        const multiplier = effect.value || effect.multiplier;
        
        const rawDamage = (baseAtk * troopCount) * multiplier;

        // Targeting (Beispiel für eine zufällige Reihe)
        const target = enemyRows[Math.floor(Math.random() * enemyRows.length)];
        
        console.log(`Schaden an Reihe ${target.id}: ${rawDamage}`);
        // target.hp -= rawDamage; // Logik zur HP-Reduzierung
    },

    handleDebuff: function(effect, enemyRows) {
        // Logik zur Debuff-Registrierung im gameState
        console.log(`Debuff angewendet: ${effect.type} für ${effect.duration} Runden`);
    }
};

export default GameEngine;
