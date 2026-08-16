import { useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import { useNavigate } from "react-router";
import { makeCurrentUserQueryKey } from "./current-user.ts";

function logOut() {
  return fetchAs("/session", { method: "delete" });
}

export function useLogOut() {
  const navigate = useNavigate();
  const client = useQueryClient();

  return useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      client.setQueryData(makeCurrentUserQueryKey(), () => null);
      navigate("/");
    },
  });
}
