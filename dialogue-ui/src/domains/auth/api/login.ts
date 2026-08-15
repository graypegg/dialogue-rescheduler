import { useMutation } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import type { LoginFormState } from "../types/login-form-state.ts";

function login(loginFormState: LoginFormState) {
  return fetchAs("/session", { method: "post", body: JSON.stringify(loginFormState) });
}

export function useLogin() {
  return useMutation({
    mutationFn: login,
  });
}
