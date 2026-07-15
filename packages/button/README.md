# @evinova-demo/general.button

Themeable React button built on [`@evinova-demo/general.theme`](https://bit.cloud/evinova-demo) tokens.

## Install

```bash
pnpm add @evinova-demo/general.button
```

Internal dependencies (`@evinova-demo/general.theme`, `@evinova-demo/general.utils`) resolve automatically from the same bit.cloud registry.

## Usage

```tsx
import { Button } from '@evinova-demo/general.button';

<Button onClick={save}>Save</Button>
<Button variant="secondary" size="sm">Cancel</Button>
<Button variant="ghost" size="lg">Learn more</Button>
```
