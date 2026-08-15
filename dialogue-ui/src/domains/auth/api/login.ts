import { useQuery } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import type { UserReadDTO } from "../../user/types/dto.ts";
import { fromUserReadDTO } from "../../user/types/user.ts";
import type { LoginFormState } from "../types/login-form-state.ts";

function login(loginFormState: LoginFormState) {
  return fetchAs("/session", { method: "post", body: JSON.stringify(loginFormState) });
}

export function useGetCurrentUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["users", "current"],
    queryFn: login,
    staleTime: Infinity,
  });

  return { currentUser: data && "id" in data ? fromUserReadDTO(data) : null, isLoading };
}
