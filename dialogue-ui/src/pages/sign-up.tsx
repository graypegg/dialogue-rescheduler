import { UserForm } from "../domains/user/user-form.tsx";
import { useCreateUser } from "../domains/user/api/create-user.ts";
import { Card } from "../ui/card/card.tsx";
import { Icon } from "../ui/icon/icon.tsx";

export function SignUpPage() {
  const createUser = useCreateUser();

  return (
    <Card
      header={
        <>
          <Icon name="person_add" />
          Sign Up
        </>
      }
    >
      <UserForm user={null} onSubmit={createUser.mutate} />
    </Card>
  );
}
