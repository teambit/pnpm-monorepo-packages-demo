# @evinova-demo/button

Themeable React button built on [`@evinova-demo/theme`](https://bit.cloud/evinova-demo) tokens.

## Install

```bash
pnpm add @evinova-demo/button
```

Internal dependencies (`@evinova-demo/theme`, `@evinova-demo/utils`) resolve automatically from the same bit.cloud registry.

## Usage

```tsx
import { Button } from '@evinova-demo/button';

<Button onClick={save}>Save</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="ghost" size="lg">Learn more</Button>
```
