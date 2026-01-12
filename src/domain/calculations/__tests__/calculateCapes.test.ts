import {
  calculateTotalCostPerCape,
  calculateTierResult,
  calculateAllTiers,
  formatPoints,
} from '../calculateCapes';

describe('calculateTotalCostPerCape', () => {
  it('should calculate correct cost for Tier 4', () => {
    expect(calculateTotalCostPerCape(4)).toBe(3400); // 400 + (1 * 3000)
  });

  it('should calculate correct cost for Tier 5', () => {
    expect(calculateTotalCostPerCape(5)).toBe(5250); // 2250 + (1 * 3000)
  });

  it('should calculate correct cost for Tier 6', () => {
    expect(calculateTotalCostPerCape(6)).toBe(12000); // 3000 + (3 * 3000)
  });

  it('should calculate correct cost for Tier 7', () => {
    expect(calculateTotalCostPerCape(7)).toBe(22500); // 7500 + (5 * 3000)
  });

  it('should calculate correct cost for Tier 8', () => {
    expect(calculateTotalCostPerCape(8)).toBe(45000); // 15000 + (10 * 3000)
  });
});

describe('calculateTierResult', () => {
  it('should calculate correct result for Tier 4 with 100,000 points', () => {
    const result = calculateTierResult(100000, 4);

    expect(result.tier).toBe(4);
    expect(result.tierName).toBe('Adepto');
    expect(result.maxCapes).toBe(29);
    expect(result.totalOrnaments).toBe(29);
    expect(result.totalHearts).toBe(29);
    expect(result.remainingPoints).toBe(1400);
    expect(result.totalCostPerCape).toBe(3400);
  });

  it('should calculate correct result for Tier 8 with 100,000 points', () => {
    const result = calculateTierResult(100000, 8);

    expect(result.tier).toBe(8);
    expect(result.tierName).toBe('Ancião');
    expect(result.maxCapes).toBe(2);
    expect(result.totalOrnaments).toBe(2);
    expect(result.totalHearts).toBe(20); // 2 * 10
    expect(result.remainingPoints).toBe(10000);
    expect(result.totalCostPerCape).toBe(45000);
  });

  it('should return 0 capes when points are insufficient', () => {
    const result = calculateTierResult(1000, 4);

    expect(result.maxCapes).toBe(0);
    expect(result.totalOrnaments).toBe(0);
    expect(result.totalHearts).toBe(0);
    expect(result.remainingPoints).toBe(1000);
  });

  it('should handle exact amount with no remainder', () => {
    const result = calculateTierResult(10200, 4); // 3 * 3400

    expect(result.maxCapes).toBe(3);
    expect(result.remainingPoints).toBe(0);
  });

  it('should handle zero points', () => {
    const result = calculateTierResult(0, 4);

    expect(result.maxCapes).toBe(0);
    expect(result.totalOrnaments).toBe(0);
    expect(result.totalHearts).toBe(0);
    expect(result.remainingPoints).toBe(0);
  });

  it('should handle Tier 6 with hearts per cape = 3', () => {
    const result = calculateTierResult(100000, 6);

    expect(result.maxCapes).toBe(8);
    expect(result.totalHearts).toBe(24); // 8 * 3
    expect(result.totalCostPerCape).toBe(12000);
  });
});

describe('calculateAllTiers', () => {
  it('should return results for all 5 tiers', () => {
    const result = calculateAllTiers(50000);

    expect(result.isValid).toBe(true);
    expect(result.factionPoints).toBe(50000);
    expect(result.tiers).toHaveLength(5);
    expect(result.tiers.map((t) => t.tier)).toEqual([4, 5, 6, 7, 8]);
  });

  it('should return invalid result for negative points', () => {
    const result = calculateAllTiers(-100);

    expect(result.isValid).toBe(false);
    expect(result.tiers).toHaveLength(0);
  });

  it('should return invalid result for non-integer points', () => {
    const result = calculateAllTiers(100.5);

    expect(result.isValid).toBe(false);
    expect(result.tiers).toHaveLength(0);
  });

  it('should handle zero points', () => {
    const result = calculateAllTiers(0);

    expect(result.isValid).toBe(true);
    expect(result.tiers).toHaveLength(5);
    result.tiers.forEach((tier) => {
      expect(tier.maxCapes).toBe(0);
    });
  });

  it('should calculate all tiers with 100,000 points correctly', () => {
    const result = calculateAllTiers(100000);

    expect(result.isValid).toBe(true);
    expect(result.tiers[0].maxCapes).toBe(29); // Tier 4
    expect(result.tiers[1].maxCapes).toBe(19); // Tier 5
    expect(result.tiers[2].maxCapes).toBe(8); // Tier 6
    expect(result.tiers[3].maxCapes).toBe(4); // Tier 7
    expect(result.tiers[4].maxCapes).toBe(2); // Tier 8
  });
});

describe('formatPoints', () => {
  it('should format points with thousand separators', () => {
    expect(formatPoints(1000)).toBe('1.000');
    expect(formatPoints(100000)).toBe('100.000');
    expect(formatPoints(1234567)).toBe('1.234.567');
  });

  it('should handle small numbers', () => {
    expect(formatPoints(100)).toBe('100');
    expect(formatPoints(0)).toBe('0');
  });

  it('should handle large numbers', () => {
    expect(formatPoints(999999999)).toBe('999.999.999');
  });
});
