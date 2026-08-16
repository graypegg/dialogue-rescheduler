import { UserForm } from "../domains/user/user-form.tsx";
import { useCreateUser } from "../domains/user/api/create-user.ts";
import { Card } from "../ui/card/card.tsx";
import { Icon } from "../ui/icon/icon.tsx";
import { Error } from "../ui/error/error.tsx";

export function SignUpPage() {
  const { mutate, error, isPending } = useCreateUser();

  return (
    <Card
      header={
        <>
          <Icon name="person_add" />
          Sign Up
        </>
      }
    >
      {error && <Error error={error} />}
      <UserForm user={null} onSubmit={mutate} isPending={isPending} />
    </Card>
  );
}
