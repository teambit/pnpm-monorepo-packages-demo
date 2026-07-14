import { Card } from '@evinova-demo/card';
import { Button } from '@evinova-demo/button';

export const WithTitle = () => (
  <Card title="Study overview">
    <p>Everything in this card inherits the shared design tokens.</p>
  </Card>
);

export const WithActions = () => (
  <Card title="Invite your team">
    <p>Compose packages together — this card renders the button package.</p>
    <Button size="sm">Send invites</Button>
  </Card>
);
