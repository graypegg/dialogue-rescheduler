import { LogInForm } from "../domains/auth/log-in-form.tsx";
import { Card } from "../ui/card/card.tsx";

export function LogInPage() {
  return (
    <Card title="Login">
      <LogInForm />
    </Card>
  );
}
