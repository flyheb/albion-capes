/**
 * Tipos e interfaces para o domínio de cálculo de capas de facção
 */

/**
 * Tipos de tiers disponíveis (4 a 8)
 */
export type CapeTier = 4 | 5 | 6 | 7 | 8;

/**
 * Nomes dos tiers em português
 */
export type TierName = 'Adepto' | 'Perito' | 'Mestre' | 'Grão-mestre' | 'Ancião';

/**
 * Configuração de custos para um tier específico
 * Define ornament cost, hearts per cape, e heart cost
 */
export interface TierCost {
  tier: CapeTier;
  tierName: TierName;
  ornamentCost: number;
  heartsPerCape: number;
  heartCost: number;
}

/**
 * Resultado do cálculo para um único tier
 * Contém informações sobre quantidade máxima de capas
 * e recursos necessários
 */
export interface TierCalculationResult {
  tier: CapeTier;
  tierName: TierName;
  maxCapes: number;
  totalOrnaments: number;
  totalHearts: number;
  remainingPoints: number;
  totalCostPerCape: number;
}

/**
 * Resultado completo do cálculo para todos os tiers
 * Agrupa resultados individuais de cada tier
 */
export interface CapeCalculationResult {
  factionPoints: number;
  tiers: TierCalculationResult[];
  isValid: boolean;
}

/**
 * Resultado da validação de entrada de pontos de facção
 */
export interface ValidationResult {
  isValid: boolean;
  errorMessage?: string;
}
