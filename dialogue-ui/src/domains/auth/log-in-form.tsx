import { useForm } from "react-hook-form";
import type { LogInFormState } from "./types/log-in-form-state.ts";
import { useNavigate } from "react-router";
import { Input } from "../../ui/input/input.tsx";
import { useCurrentUser } from "./hooks/current-user.tsx";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        User Name:
        <Input {...register("user_name")} />
      </label>
      <label>
        Password:
        <Input type="password" {...register("password")} />
      </label>
      <input type="submit" value="Log in" />
    </form>
  );
}
