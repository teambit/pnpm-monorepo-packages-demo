import { describe, expect, it } from 'vitest';
import { cx, formatDate, truncate } from './index';

describe('cx', () => {
  it('joins truthy class names with spaces', () => {
    expect(cx('btn', 'btn-primary')).toBe('btn btn-primary');
  });
  it('drops falsy values', () => {
    expect(cx('btn', false, null, undefined, 'active')).toBe('btn active');
  });
  it('returns empty string for no input', () => {
    expect(cx()).toBe('');
  });
});

describe('truncate', () => {
  it('returns short strings unchanged', () => {
    expect(truncate('hi', 10)).toBe('hi');
  });
  it('truncates long strings with an ellipsis within maxLength', () => {
    expect(truncate('hello world', 8)).toBe('hello w…');
    expect(truncate('hello world', 8)).toHaveLength(8);
  });
  it('throws on maxLength < 1', () => {
    expect(() => truncate('hi', 0)).toThrow(RangeError);
  });
});

describe('formatDate', () => {
  it('formats a date in en-US by default', () => {
    expect(formatDate(new Date(2026, 6, 14))).toBe('Jul 14, 2026');
  });
  it('respects the locale argument', () => {
    expect(formatDate(new Date(2026, 6, 14), 'de-DE')).toContain('2026');
  });
});
