import { useForm } from "react-hook-form";
import type { LogInFormState } from "./types/log-in-form-state.ts";
import { useNavigate } from "react-router";
import { Input } from "../../ui/input/input.tsx";
import { useCurrentUser } from "./hooks/current-user.tsx";
import { Form } from "../../ui/form/form.tsx";
import { FormRow } from "../../ui/form-row/form-row.tsx";

export function LogInForm() {
  const navigate = useNavigate();
  const { logIn } = useCurrentUser();

  const { register, handleSubmit } = useForm<LogInFormState>({
    defaultValues: { user_name: "", password: "" },
  });

  async function onSubmit(logInFormState: LogInFormState) {
    logIn(logInFormState);
    navigate("/");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Username">
        <Input {...register("user_name")} />
      </FormRow>
      <FormRow label="Password">
        <Input type="password" {...register("password")} />
      </FormRow>
      <input type="submit" value="Log in" />
    </Form>
  );
}
