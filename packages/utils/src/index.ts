/** Compose class names, dropping falsy values. */
export function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/** Truncate text to maxLength characters, ending with an ellipsis when cut. */
export function truncate(text: string, maxLength: number): string {
  if (maxLength < 1) {
    throw new RangeError(`maxLength must be >= 1, got ${maxLength}`);
  }
  return text.length <= maxLength ? text : `${text.slice(0, maxLength - 1)}…`;
}

/** Format a date like "Jul 14, 2026". */
export function formatDate(date: Date, locale = 'en-US'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}
