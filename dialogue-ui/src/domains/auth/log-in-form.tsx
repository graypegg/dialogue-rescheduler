import { useForm } from "react-hook-form";
import type { LogInFormState } from "./types/log-in-form-state.ts";
import { NavLink } from "react-router";
import { Input } from "../../ui/input/input.tsx";
import { Form } from "../../ui/form/form.tsx";
import { FormRow } from "../../ui/form-row/form-row.tsx";
import { Button } from "../../ui/button/button.tsx";
import { Actions } from "../../ui/actions/actions.tsx";
import { Icon } from "../../ui/icon/icon.tsx";
import { useLogIn } from "./api/log-in.ts";
import { Error } from "../../ui/error/error.tsx";
import { Spinner } from "../../ui/spinner/spinner.tsx";

export function LogInForm() {
  const { mutate, error, isPending } = useLogIn();

  const form = useForm<LogInFormState>({
    defaultValues: { user_name: "", password: "" },
  });

  return (
    <>
      {error && <Error error={error} />}
      <Form<LogInFormState> form={form} onSubmit={mutate}>
        <FormRow label="Username">
          <Input fieldName="user_name" />
        </FormRow>
        <FormRow label="Password">
          <Input type="password" fieldName="password" />
        </FormRow>
        <Actions>
          <Button as={NavLink} intent="secondary" to="/sign-up">
            Create an account
            <Icon name="arrow_forward" />
          </Button>
          <Button intent="primary">
            Log in
            {isPending && <Spinner />}
          </Button>
        </Actions>
      </Form>
    </>
  );
}
