import { useForm } from "react-hook-form";
import { makeUserFormState, type UserFormState } from "./types/user-form-state.ts";
import type { User } from "./types/user.ts";
import { Input } from "../../ui/input/input.tsx";
import { Form } from "../../ui/form/form.tsx";
import { FormRow } from "../../ui/form-row/form-row.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CardFooter } from "../../ui/card/card-footer.tsx";
import { Button } from "../../ui/button/button.tsx";

interface UserFormProps {
  user: User | null;
  onSubmit: (formState: UserFormState) => void;
}

export function UserForm({ user, onSubmit }: UserFormProps) {
  const form = useForm({
    defaultValues: makeUserFormState(user),
    resolver: zodResolver(
      z.object({
        user_name: z.string().nonempty(),
        password: z.string().min(6),
      }),
    ),
  });

  return (
    <Form<UserFormState> form={form} onSubmit={onSubmit}>
      <FormRow label="Username">
        <Input fieldName="user_name" />
      </FormRow>
      <FormRow label="Password">
        <Input type="password" fieldName="password" />
      </FormRow>
      <CardFooter>
        <Button intent="primary">{user ? "Save" : "Sign Up"}</Button>
      </CardFooter>
    </Form>
  );
}
