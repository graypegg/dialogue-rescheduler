import { useForm } from "react-hook-form";
import type { LoginFormState } from "./types/login-form-state.ts";
import { useLogin } from "./api/login.ts";
import { useNavigate } from "react-router";
import { Input } from "../../ui/input/input.tsx";

export function LoginForm() {
  const navigate = useNavigate();
  const login = useLogin();

  const { register, handleSubmit } = useForm<LoginFormState>({
    defaultValues: { user_name: "", password: "" },
  });

  async function onSubmit(loginFormState: LoginFormState) {
    await login.mutate(loginFormState);
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
