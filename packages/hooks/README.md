# @evinova-demo/general.hooks

Reusable React hooks for the demo design system. React `>=18` is a peer dependency.

## Install

```bash
pnpm add @evinova-demo/general.hooks
```

## API

```tsx
import { useToggle, useDebounce } from '@evinova-demo/general.hooks';

const [open, toggleOpen] = useToggle();
const debouncedQuery = useDebounce(query, 300);
```
