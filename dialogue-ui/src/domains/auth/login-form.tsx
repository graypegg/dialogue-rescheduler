import { useForm } from "react-hook-form";
import type { LoginFormState } from "./types/login-form-state.ts";

export function LoginForm() {
  const { register, handleSubmit } = useForm<LoginFormState>({
    defaultValues: { user_name: "", password: "" },
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
      <input type="submit" value="Log in" />
    </form>
  );
}
