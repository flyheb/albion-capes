/**
 * Constantes para cálculo de capas de facção
 * Define custos por tier e configurações do jogo
 */

import { CapeTier, TierCost, TierName } from '../models/capeCalculator';

/**
 * Custo fixo de um coração de facção em pontos de facção
 * Independe do tier
 */
export const FACTION_HEART_COST = 3000;

/**
 * Mapeamento de tier para nome em português
 */
export const TIER_NAMES: Record<CapeTier, TierName> = {
  4: 'Adepto',
  5: 'Perito',
  6: 'Mestre',
  7: 'Grão-mestre',
  8: 'Ancião',
} as const;

/**
 * Configuração de custos para cada tier de capa
 * Define custo de ornamento e quantidade de corações necessários
 */
export const TIER_COSTS: Record<CapeTier, TierCost> = {
  4: {
    tier: 4,
    tierName: 'Adepto',
    ornamentCost: 400,
    heartsPerCape: 1,
    heartCost: FACTION_HEART_COST,
  },
  5: {
    tier: 5,
    tierName: 'Perito',
    ornamentCost: 2250,
    heartsPerCape: 1,
    heartCost: FACTION_HEART_COST,
  },
  6: {
    tier: 6,
    tierName: 'Mestre',
    ornamentCost: 3000,
    heartsPerCape: 3,
    heartCost: FACTION_HEART_COST,
  },
  7: {
    tier: 7,
    tierName: 'Grão-mestre',
    ornamentCost: 7500,
    heartsPerCape: 5,
    heartCost: FACTION_HEART_COST,
  },
  8: {
    tier: 8,
    tierName: 'Ancião',
    ornamentCost: 15000,
    heartsPerCape: 10,
    heartCost: FACTION_HEART_COST,
  },
} as const;

/**
 * Array de todos os tiers disponíveis, ordenados
 */
export const AVAILABLE_TIERS: CapeTier[] = [4, 5, 6, 7, 8];

/**
 * Limites de validação para pontos de facção
 */
export const VALIDATION_LIMITS = {
  MIN_POINTS: 0,
  MAX_POINTS: Number.MAX_SAFE_INTEGER,
} as const;
