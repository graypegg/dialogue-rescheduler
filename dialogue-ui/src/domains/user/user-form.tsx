import { useForm } from "react-hook-form";
import { makeUserFormState, type UserFormState } from "./types/user-form-state.ts";
import type { User } from "./types/user.ts";
import { Input } from "../../ui/input/input.tsx";

interface UserFormProps {
  user: User | null;
  onSubmit: (formState: UserFormState) => void;
}

export function UserForm({ user, onSubmit }: UserFormProps) {
  const { register, handleSubmit } = useForm<UserFormState>({
    defaultValues: makeUserFormState(user),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        User Name:
        <Input {...register("user_name")} />
      </label>
      <label>
        Password:
        <Input type="password" {...register("password")} />
      </label>
      <input type="submit" value={user ? "Save" : "Sign Up"} />
    </form>
  );
}
