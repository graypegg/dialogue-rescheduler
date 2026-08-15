import { LoginForm } from "../login-form.tsx";
import { Card } from "../../../ui/card/card.tsx";

export function LoginPage() {
  return (
    <Card title="Login">
      <LoginForm />
    </Card>
  );
}
