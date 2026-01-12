/**
 * Lógica de cálculo para determinar quantidade máxima de capas
 * que podem ser adquiridas com pontos de facção
 */

import {
  CapeTier,
  TierCalculationResult,
  CapeCalculationResult,
} from '../models/capeCalculator';
import { TIER_COSTS, AVAILABLE_TIERS } from '../constants/capeConstants';

/**
 * Calcula o custo total de uma capa para um tier específico
 *
 * Fórmula: Custo total = Custo ornamento + (Corações por capa × Custo do coração)
 *
 * Exemplos:
 * - Tier 4: 400 + (1 × 3000) = 3.400
 * - Tier 6: 3000 + (3 × 3000) = 12.000
 * - Tier 8: 15000 + (10 × 3000) = 45.000
 *
 * @param tier - Tier da capa (4, 5, 6, 7, ou 8)
 * @returns Custo total em pontos de facção por capa
 */
export function calculateTotalCostPerCape(tier: CapeTier): number {
  const tierCost = TIER_COSTS[tier];
  return tierCost.ornamentCost + tierCost.heartsPerCape * tierCost.heartCost;
}

/**
 * Calcula o máximo de capas possíveis para um tier específico
 *
 * Algoritmo:
 * 1. Calcular custo total por capa (ornamentos + corações)
 * 2. Dividir pontos disponíveis pelo custo total
 * 3. Arredondar para baixo (apenas capas completos)
 * 4. Calcular pontos restantes após compra máxima
 *
 * @param factionPoints - Total de pontos de facção disponíveis
 * @param tier - Tier da capa a calcular
 * @returns Resultado detalhado do cálculo para o tier
 */
export function calculateTierResult(
  factionPoints: number,
  tier: CapeTier
): TierCalculationResult {
  const tierCost = TIER_COSTS[tier];
  const totalCostPerCape = calculateTotalCostPerCape(tier);

  // Calcular quantidade máxima de capas (arredondar para baixo)
  const maxCapes = Math.floor(factionPoints / totalCostPerCape);

  // Calcular recursos totais necessários
  const totalOrnaments = maxCapes; // 1 ornamento por capa
  const totalHearts = maxCapes * tierCost.heartsPerCape;

  // Calcular pontos restantes
  const totalSpent = maxCapes * totalCostPerCape;
  const remainingPoints = factionPoints - totalSpent;

  return {
    tier,
    tierName: tierCost.tierName,
    maxCapes,
    totalOrnaments,
    totalHearts,
    remainingPoints,
    totalCostPerCape,
  };
}

/**
 * Calcula o resultado para todos os tiers disponíveis
 *
 * Importante: Cada tier é calculado independentemente com o total de pontos.
 * Não há redistribuição de pontos entre tiers.
 *
 * @param factionPoints - Total de pontos de facção disponíveis
 * @returns Resultado completo com cálculos para todos os tiers
 */
export function calculateAllTiers(factionPoints: number): CapeCalculationResult {
  // Validação básica
  if (factionPoints < 0 || !Number.isInteger(factionPoints)) {
    return {
      factionPoints: 0,
      tiers: [],
      isValid: false,
    };
  }

  // Calcular resultado para cada tier
  const tiers = AVAILABLE_TIERS.map((tier) =>
    calculateTierResult(factionPoints, tier)
  );

  return {
    factionPoints,
    tiers,
    isValid: true,
  };
}

/**
 * Formata número de pontos com separadores de milhar
 *
 * Usa localização pt-BR para formato correto em português
 * Exemplo: 15000 → "15.000"
 *
 * @param points - Número de pontos a formatar
 * @returns String formatada com separador de milhar
 */
export function formatPoints(points: number): string {
  return points.toLocaleString('pt-BR');
}
