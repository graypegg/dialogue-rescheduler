import { LogInForm } from "../domains/auth/log-in-form.tsx";
import { Card } from "../ui/card/card.tsx";
import { Icon } from "../ui/icon/icon.tsx";

export function LogInPage() {
  return (
    <Card
      header={
        <>
          <Icon name="key" />
          Log In
        </>
      }
    >
      <LogInForm />
    </Card>
  );
}
