import { useMutation } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";

import type { UserFormState } from "../types/user-form-state.ts";

function postUser(formState: UserFormState) {
  return fetchAs("/users", { method: "post", body: formState });
}

export function useCreateUser() {
  const { data } = useMutation({
    mutationFn: ({ userFormState }) => postUser,
  });

  return { currentUser: data ?? null };
}
