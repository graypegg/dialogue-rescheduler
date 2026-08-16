import { LogInForm } from "../domains/auth/log-in-form.tsx";
import { Card } from "../ui/card/card.tsx";
import { Icon } from "../ui/icon/icon.tsx";
import { Heading } from "../ui/heading/heading.tsx";
import { Columns } from "../ui/columns/columns.tsx";

export function LogInPage() {
  return (
    <Columns layout="sidebar">
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
      <Card>
        <Heading level={2}>
          Hello!
          <Icon name="favorite" />
        </Heading>
        <p>
          All accounts are local to the dialogue-api application, but imagine it used some auth
          service within Dialogue.
        </p>
      </Card>
    </Columns>
  );
}
