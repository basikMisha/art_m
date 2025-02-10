import { renderHook } from '@testing-library/react-hooks';
import { useDebounce } from '@/hooks/useDebounce';
import { describe, it, expect } from 'vitest';
describe('useDebounce', () => {
  it('should debounce the value correctly', async () => {
    const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
      initialProps: { value: 'test', delay: 500 },
    });

    expect(result.current).toBe('test');

    rerender({ value: 'newTest', delay: 500 });
    expect(result.current).toBe('test');

    await new Promise((resolve) => setTimeout(resolve, 600));
    expect(result.current).toBe('newTest');
  });
});
