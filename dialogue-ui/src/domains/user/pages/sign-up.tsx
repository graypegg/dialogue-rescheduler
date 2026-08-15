import { UserForm } from "../user-form.tsx";
import { useCreateUser } from "../api/create-user.ts";
import { Card } from "../../../ui/card/card.tsx";

export function SignUpPage() {
  const createUser = useCreateUser();

  return (
    <Card title="Sign up">
      <UserForm user={null} onSubmit={createUser.mutate} />
    </Card>
  );
}
