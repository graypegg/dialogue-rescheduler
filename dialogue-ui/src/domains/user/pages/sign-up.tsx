import { UserForm } from "../user-form.tsx";
import { useCreateUser } from "../api/create-user.ts";

export function SignUpPage() {
  const createUser = useCreateUser();

  return <UserForm user={null} onSubmit={createUser.mutate} />;
}
