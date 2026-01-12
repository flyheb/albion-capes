/**
 * Validadores para entrada de pontos de facção
 */

import { ValidationResult } from '../models/capeCalculator';
import { VALIDATION_LIMITS } from '../constants/capeConstants';

/**
 * Valida se um valor de entrada é um número válido de pontos de facção
 *
 * Regras de validação:
 * - Não pode ser vazio/null/undefined
 * - Deve ser um número válido
 * - Deve ser não-negativo
 * - Deve ser um inteiro (sem casas decimais)
 *
 * @param value - Valor string a ser validado
 * @returns Resultado da validação com mensagem de erro se inválido
 */
export function validateFactionPoints(value: string): ValidationResult {
  // Validar se está vazio
  if (!value || value.trim() === '') {
    return {
      isValid: false,
      errorMessage: 'Por favor, insira a quantidade de pontos de facção',
    };
  }

  // Converter para número
  const numericValue = Number(value);

  // Validar se é um número válido
  if (isNaN(numericValue)) {
    return {
      isValid: false,
      errorMessage: 'Por favor, insira um número válido',
    };
  }

  // Validar se é inteiro
  if (!Number.isInteger(numericValue)) {
    return {
      isValid: false,
      errorMessage: 'Pontos de facção devem ser um número inteiro',
    };
  }

  // Validar se é não-negativo
  if (numericValue < VALIDATION_LIMITS.MIN_POINTS) {
    return {
      isValid: false,
      errorMessage: 'Pontos de facção não podem ser negativos',
    };
  }

  // Validar se está dentro do limite máximo seguro
  if (numericValue > VALIDATION_LIMITS.MAX_POINTS) {
    return {
      isValid: false,
      errorMessage: 'Valor muito grande. Por favor, insira um número menor',
    };
  }

  return { isValid: true };
}

/**
 * Valida e converte uma string para número de pontos de facção
 *
 * @param value - Valor string a ser convertido
 * @returns Número de pontos ou null se inválido
 */
export function parseAndValidateFactionPoints(value: string): number | null {
  const validation = validateFactionPoints(value);

  if (!validation.isValid) {
    return null;
  }

  return Number(value);
}
