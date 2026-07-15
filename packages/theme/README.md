# @evinova-demo/theme

Design tokens for the demo design system — colors, spacing, radii and typography as plain typed constants. Framework-free.

## Install

```bash
pnpm add @evinova-demo/theme
```

> Requires the bit.cloud registry configured for the `@evinova-demo` scope — see [Configuring .npmrc](https://bit.cloud/docs/packages/configuring-npmrc).

## Usage

```ts
import { colors, spacing, theme } from '@evinova-demo/theme';

const style = {
  background: colors.primary,
  padding: spacing.md,
};
```

Every token group is `as const`, so values autocomplete and narrow to literal types.
