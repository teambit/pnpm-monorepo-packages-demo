import { Button } from '@evinova-demo/button';

export const Primary = () => <Button>Save changes</Button>;
export const Secondary = () => <Button variant="secondary">Cancel</Button>;
export const Ghost = () => <Button variant="ghost">Learn more</Button>;
export const Sizes = () => (
  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);
