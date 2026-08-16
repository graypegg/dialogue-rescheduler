import { useForm } from "react-hook-form";
import { makeUserFormState, type UserFormState } from "./types/user-form-state.ts";
import type { User } from "./types/user.ts";
import { Input } from "../../ui/input/input.tsx";
import { Form } from "../../ui/form/form.tsx";
import { FormRow } from "../../ui/form-row/form-row.tsx";

interface UserFormProps {
  user: User | null;
  onSubmit: (formState: UserFormState) => void;
}

export function UserForm({ user, onSubmit }: UserFormProps) {
  const { register, handleSubmit } = useForm<UserFormState>({
    defaultValues: makeUserFormState(user),
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Username">
        <Input {...register("user_name")} />
      </FormRow>
      <FormRow label="Password">
        <Input type="password" {...register("password")} />
      </FormRow>
      <input type="submit" value={user ? "Save" : "Sign Up"} />
    </Form>
  );
}
