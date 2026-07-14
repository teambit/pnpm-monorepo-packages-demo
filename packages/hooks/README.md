# @evinova-demo/hooks

Reusable React hooks for the Evinova demo design system. React `>=18` is a peer dependency.

## Install

```bash
pnpm add @evinova-demo/hooks
```

## API

```tsx
import { useToggle, useDebounce } from '@evinova-demo/hooks';

const [open, toggleOpen] = useToggle();
const debouncedQuery = useDebounce(query, 300);
```
