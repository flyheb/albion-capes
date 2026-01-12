import {
  validateFactionPoints,
  parseAndValidateFactionPoints,
} from '../factionPointsValidator';

describe('validateFactionPoints', () => {
  it('should accept valid positive integer', () => {
    const result = validateFactionPoints('12345');

    expect(result.isValid).toBe(true);
    expect(result.errorMessage).toBeUndefined();
  });

  it('should accept zero', () => {
    const result = validateFactionPoints('0');

    expect(result.isValid).toBe(true);
  });

  it('should reject empty string', () => {
    const result = validateFactionPoints('');

    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBe(
      'Por favor, insira a quantidade de pontos de facção'
    );
  });

  it('should reject whitespace only', () => {
    const result = validateFactionPoints('   ');

    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBe(
      'Por favor, insira a quantidade de pontos de facção'
    );
  });

  it('should reject non-numeric values', () => {
    const result = validateFactionPoints('abc');

    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBe('Por favor, insira um número válido');
  });

  it('should reject decimal numbers', () => {
    const result = validateFactionPoints('123.45');

    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBe(
      'Pontos de facção devem ser um número inteiro'
    );
  });

  it('should reject negative numbers', () => {
    const result = validateFactionPoints('-100');

    expect(result.isValid).toBe(false);
    expect(result.errorMessage).toBe('Pontos de facção não podem ser negativos');
  });

  it('should handle large numbers', () => {
    const result = validateFactionPoints('999999999');

    expect(result.isValid).toBe(true);
  });
});

describe('parseAndValidateFactionPoints', () => {
  it('should return number for valid input', () => {
    expect(parseAndValidateFactionPoints('12345')).toBe(12345);
  });

  it('should return null for invalid input', () => {
    expect(parseAndValidateFactionPoints('')).toBeNull();
    expect(parseAndValidateFactionPoints('abc')).toBeNull();
    expect(parseAndValidateFactionPoints('-100')).toBeNull();
  });

  it('should parse zero correctly', () => {
    expect(parseAndValidateFactionPoints('0')).toBe(0);
  });
});
