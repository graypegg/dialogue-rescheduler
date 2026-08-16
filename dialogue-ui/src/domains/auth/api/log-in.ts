import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import type { LogInFormState } from "../types/log-in-form-state.ts";
import { makeCurrentUserQueryKey } from "./current-user.ts";

function logIn(logInFormState: LogInFormState) {
  return fetchAs("/session", { method: "post", body: JSON.stringify(logInFormState) });
}

export function useLogIn() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: logIn,
    onSuccess: (result) => {
      client.setQueryData(makeCurrentUserQueryKey(), () => result);
    },
  });
}
