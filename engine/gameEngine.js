// gameEngine.js
import CarnivoreTroops from '../data/troops/carnivore_troops.js';
import HerbivoreTroops from '../data/troops/herbivore_troops.js';
import OmnivoreTroops from '../data/troops/omnivore_troops.js';

import CarnivoreAlphas from '../data/alphas/carnivores.js';
import HerbivoreAlphas from '../data/alphas/herbivores.js';
import OmnivoreAlphas from '../data/alphas/omnivores.js';

const GameEngine = {
    // 1. Zentrale Datenquelle für schnellen Zugriff
    allAlphas: { ...CarnivoreAlphas, ...HerbivoreAlphas, ...OmnivoreAlphas },

    /**
     * Phase: Vor dem Kampf
     * Wendet alle 'passive_stat' Effekte an (Skill 2, 3, 5)
     */
    applyPassiveBonuses: function(alphaId, troopStats) {
        const alpha = this.allAlphas[alphaId];
        if (!alpha) return troopStats;

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
            atk: troopStats.atk * (1 + bonusAtk),
            def: troopStats.def * (1 + bonusDef),
            hp: troopStats.hp * (1 + bonusHp)
        };
    },

    /**
     * Phase: Kampf-Logik
     * Hier werden die aktiven Skills (1, 4, 6) je nach Typ verarbeitet
     */
    processCombatSkills: function(alphaId, currentRound, gameState) {
        const alpha = this.allAlphas[alphaId];
        if (!alpha) return;

        Object.values(alpha.skills).forEach(skill => {
            // Wir ignorieren alles, was passiv ist
            if (skill.type === 'passive_stat') return;

            // Logik für Skill 1, 4, 6 (Active / Trigger)
            if (this.isSkillReady(skill, currentRound)) {
                this.executeSkillEffect(skill, gameState);
            }
        });
    },

    isSkillReady: function(skill, currentRound) {
        // Hier prüfen wir Vorbereitungsrunden und Runden-Trigger
        if (skill.preparation_rounds && currentRound <= skill.preparation_rounds) return false;
        return true; 
    },

    executeSkillEffect: function(skill, gameState) {
        // Hier schaltet die Engine basierend auf dem 'type' um
        skill.effects.forEach(effect => {
            switch(effect.type) {
                case 'alpha_damage':
                    // Logik: Schaden berechnen
                    break;
                case 'debuff_atk_def':
                    // Logik: Debuff für x Runden anwenden
                    break;
                case 'heal_percentage':
                    // Logik: Heilung
                    break;
            }
        });
    }
};

export default GameEngine;
