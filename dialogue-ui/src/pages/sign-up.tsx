import { UserForm } from "../domains/user/user-form.tsx";
import { useCreateUser } from "../domains/user/api/create-user.ts";
import { Card } from "../ui/card/card.tsx";
import { Icon } from "../ui/icon/icon.tsx";
import { Error } from "../ui/error/error.tsx";
import type { UserFormState } from "../domains/user/types/user-form-state.ts";
import { useNavigate } from "react-router";

export function SignUpPage() {
  const navigate = useNavigate();
  const { mutateAsync, error } = useCreateUser();

  async function handleSubmit(userFormState: UserFormState) {
    await mutateAsync(userFormState);
    navigate("/");
  }

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
      <UserForm user={null} onSubmit={handleSubmit} />
    </Card>
  );
}
