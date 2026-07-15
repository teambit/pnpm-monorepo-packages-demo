import { Card } from './dist/index.js';
import { Button } from '@evinova-demo/general.button';

export const WithTitle = () => (
  <Card title="Project overview">
    <p>Everything in this card inherits the shared design tokens.</p>
  </Card>
);

export const WithActions = () => (
  <Card title="Invite your team">
    <p>Compose packages together — this card renders the button package.</p>
    <Button size="sm">Send invites</Button>
  </Card>
);
