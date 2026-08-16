import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import { makeCurrentUserQueryKey } from "./current-user.ts";

function logOut() {
  return fetchAs("/session", { method: "delete" });
}

export function useLogOut() {
  const client = useQueryClient();

  return useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      client.setQueryData(makeCurrentUserQueryKey(), () => null);
    },
  });
}
