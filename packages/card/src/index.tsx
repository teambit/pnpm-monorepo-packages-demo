import { colors, font, radii, spacing } from '@evinova-demo/theme';
import { cx } from '@evinova-demo/utils';
import type { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function Card({ title, children, className, style, ...rest }: CardProps) {
  return (
    <div
      className={cx('evd-card', className)}
      style={{
        fontFamily: font.family,
        background: colors.surface,
        border: `1px solid ${colors.border}`,
        borderRadius: radii.md,
        padding: spacing.lg,
        color: colors.text,
        ...style,
      }}
      {...rest}
    >
      {title ? (
        <h3
          style={{
            margin: `0 0 ${spacing.sm}`,
            fontSize: font.sizeLg,
            fontWeight: font.weightBold,
          }}
        >
          {title}
        </h3>
      ) : null}
      {children}
    </div>
  );
}
