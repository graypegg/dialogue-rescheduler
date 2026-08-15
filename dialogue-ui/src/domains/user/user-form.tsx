import { useForm } from "react-hook-form";
import type { User, UserLogInParams } from "./api/current-user.ts";

export interface UserFormState extends UserLogInParams {
  id: number | null;
}

function makeUserFormState(user: User | null): UserFormState {
  if (user) return { ...user, password: "" };
  return { id: null, user_name: "", password: "" };
}

interface UserFormProps {
  user: User | null;
}

export function UserForm({ user }: UserFormProps) {
  const { register, handleSubmit } = useForm<UserFormState>({
    defaultValues: makeUserFormState(user),
  });

  function onSubmit() {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        User Name:
        <input {...register("user_name")} />
      </label>
      <label>
        Password:
        <input type="password" {...register("password")} />
      </label>
      <input type="submit" value={user ? "Save" : "Sign Up"} />
    </form>
  );
}
