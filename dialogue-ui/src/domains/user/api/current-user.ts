import { useQuery } from "@tanstack/react-query";
import type { User } from "../current-user.tsx";
import { fetchAs } from "../../api/helpers.ts";

function getCurrentUser() {
  return fetchAs<User>("/session");
}

export function useGetCurrentUser() {
  const { data, isLoading } = useQuery<User>({
    queryKey: ["users", "current"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });

  return { currentUser: data ?? null, isLoading };
}
