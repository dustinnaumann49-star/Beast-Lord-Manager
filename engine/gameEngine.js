// gameEngine.js
import CarnivoreTroops from '../data/troops/carnivore_troops.js';
import HerbivoreTroops from '../data/troops/herbivore_troops.js';
import OmnivoreTroops from '../data/troops/omnivore_troops.js';

import CarnivoreAlphas from '../data/alphas/carnivores.js';
import HerbivoreAlphas from '../data/alphas/herbivores.js';
import OmnivoreAlphas from '../data/alphas/omnivores.js';

const GameEngine = {
    // Zentrale Alpha-Registry
    allAlphas: { ...CarnivoreAlphas, ...HerbivoreAlphas, ...OmnivoreAlphas },

    /**
     * PHASE: Pre-Combat (Statische Boni)
     * Verarbeitet alle Skill-Typen "passive_stat" (Skill 2, 3, 5)
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
     * Verarbeitet Skills 1, 4 und 6 basierend auf ihrem Typ
     */
    executeCombatSkill: function(alphaId, skillKey, gameState, currentRound) {
        const alpha = this.allAlphas[alphaId];
        const skill = alpha?.skills[skillKey];
        
        if (!skill || skill.type === 'passive_stat') return;

        // Prüfung: Vorbereitungsrunden (z.B. für Skill 4)
        if (skill.preparation_rounds && currentRound <= skill.preparation_rounds) return;

        // Ausführung der Effekte
        skill.effects.forEach(effect => {
            this.handleEffect(effect, gameState);
        });
    },

    handleEffect: function(effect, gameState) {
        // Hier wird die Logik für jeden Effekt-Typ zentral gesteuert
        switch (effect.type) {
            case 'alpha_damage':
                // Berechne Schaden basierend auf effect.value
                break;
            case 'debuff_atk_def':
                // Registriere Debuff im gameState
                break;
            case 'heal_percentage':
                // Führe Heilung aus
                break;
        }
    }
};

export default GameEngine;
