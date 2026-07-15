# @evinova-demo/utils

Tiny, framework-free utilities used across the demo design system.

## Install

```bash
pnpm add @evinova-demo/utils
```

## API

```ts
import { cx, truncate, formatDate } from '@evinova-demo/utils';

cx('btn', isActive && 'active');        // "btn active"
truncate('hello world', 8);             // "hello w…"
formatDate(new Date(2026, 6, 14));      // "Jul 14, 2026"
```
