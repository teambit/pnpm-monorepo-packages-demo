export const colors = {
  primary: '#6c5ce7',
  primaryDark: '#5946d1',
  surface: '#ffffff',
  surfaceMuted: '#f7f7fb',
  text: '#1a1d29',
  textMuted: '#6b7280',
  textOnPrimary: '#ffffff',
  border: '#e5e7eb',
  danger: '#e05260',
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '40px',
} as const;

export const radii = {
  sm: '6px',
  md: '10px',
  pill: '999px',
} as const;

export const font = {
  family: "'Inter', system-ui, -apple-system, sans-serif",
  sizeSm: '13px',
  sizeMd: '15px',
  sizeLg: '18px',
  weightRegular: 400,
  weightMedium: 500,
  weightBold: 700,
} as const;

export interface Theme {
  colors: typeof colors;
  spacing: typeof spacing;
  radii: typeof radii;
  font: typeof font;
}

export const theme: Theme = { colors, spacing, radii, font };
