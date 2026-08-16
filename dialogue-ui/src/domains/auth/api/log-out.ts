import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import { makeCurrentUserQueryKey } from "./current-user.ts";
import { useNavigate } from "react-router";

function logOut() {
  return fetchAs("/session", { method: "delete" });
}

export function useLogOut() {
  const navigate = useNavigate();
  const client = useQueryClient();

  return useMutation({
    mutationKey: makeLogOutMutationKey(),
    scope: { id: "logout" },
    mutationFn: logOut,
    onSuccess: async () => {
      await client.setQueryData(makeCurrentUserQueryKey(), () => null);
      navigate("/log-in");
    },
  });
}

export function makeLogOutMutationKey() {
  return ["users", "logout"];
}
