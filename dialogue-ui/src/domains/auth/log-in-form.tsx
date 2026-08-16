import { useForm } from "react-hook-form";
import type { LogInFormState } from "./types/log-in-form-state.ts";
import { useNavigate } from "react-router";
import { Input } from "../../ui/input/input.tsx";
import { useCurrentUser } from "./hooks/current-user.tsx";
import { Form } from "../../ui/form/form.tsx";
import { FormRow } from "../../ui/form-row/form-row.tsx";
import { Button } from "../../ui/button/button.tsx";
import { CardFooter } from "../../ui/card/card-footer.tsx";

export function LogInForm() {
  const navigate = useNavigate();
  const { logIn } = useCurrentUser();

  const form = useForm<LogInFormState>({
    defaultValues: { user_name: "", password: "" },
  });

  async function onSubmit(logInFormState: LogInFormState) {
    await logIn(logInFormState);
    navigate("/");
  }

  return (
    <Form<LogInFormState> form={form} onSubmit={onSubmit}>
      <FormRow label="Username">
        <Input fieldName="user_name" />
      </FormRow>
      <FormRow label="Password">
        <Input type="password" fieldName="password" />
      </FormRow>
      <CardFooter>
        <Button intent="primary">Log in</Button>
      </CardFooter>
    </Form>
  );
}
