import { colors, font, radii, spacing } from '@evinova-demo/theme';
import { cx } from '@evinova-demo/utils';
import type { ButtonHTMLAttributes, CSSProperties } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base: CSSProperties = {
  fontFamily: font.family,
  fontWeight: font.weightMedium,
  borderRadius: radii.sm,
  border: '1px solid transparent',
  cursor: 'pointer',
  transition: 'background 120ms ease, border-color 120ms ease',
};

const variants: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: colors.primary,
    color: colors.textOnPrimary,
  },
  secondary: {
    background: colors.surface,
    color: colors.text,
    borderColor: colors.border,
  },
  ghost: {
    background: 'transparent',
    color: colors.primary,
  },
};

const sizes: Record<ButtonSize, CSSProperties> = {
  sm: { fontSize: font.sizeSm, padding: `${spacing.xs} ${spacing.sm}` },
  md: { fontSize: font.sizeMd, padding: `${spacing.sm} ${spacing.md}` },
  lg: { fontSize: font.sizeLg, padding: `${spacing.md} ${spacing.lg}` },
};

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  style,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cx('evd-button', `evd-button--${variant}`, className)}
      style={{ ...base, ...variants[variant], ...sizes[size], ...style }}
      {...rest}
    />
  );
}
