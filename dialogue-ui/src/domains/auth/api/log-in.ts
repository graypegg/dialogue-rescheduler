import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import type { LogInFormState } from "../types/log-in-form-state.ts";
import { makeCurrentUserQueryKey } from "./current-user.ts";
import { useNavigate } from "react-router";

function logIn(logInFormState: LogInFormState) {
  return fetchAs("/session", { method: "post", body: JSON.stringify(logInFormState) });
}

export function useLogIn() {
  const navigate = useNavigate();
  const client = useQueryClient();

  return useMutation({
    mutationKey: makeLogInMutationKey(),
    scope: { id: "login" },
    mutationFn: logIn,
    onSuccess: async (result) => {
      await client.setQueryData(makeCurrentUserQueryKey(), () => result);
      navigate("/");
    },
  });
}

export function makeLogInMutationKey() {
  return ["users", "login"];
}
