import { describe, it, expect } from 'vitest';
import { getRandomPage } from '@/api';

describe('getRandomPage', () => {
  it('returns the number within min and max', () => {
    const min = 5;
    const max = 10;
    const result = getRandomPage(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('always returns an integer', () => {
    for (let i = 0; i < 100; i++) {
      const result = getRandomPage(1, 100);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it('returns correct bounds when min === max', () => {
    expect(getRandomPage(7, 7)).toBe(7);
  });

  it('works correctly for large ranges', () => {
    const min = 1000;
    const max = 2000;
    const result = getRandomPage(min, max);

    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
