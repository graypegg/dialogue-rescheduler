import { useQuery } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import type { UserReadDTO } from "../types/dto.ts";
import { fromUserReadDTO } from "../types/user.ts";

function getCurrentUser() {
  return fetchAs<UserReadDTO>("/session");
}

export function useGetCurrentUser() {
  const { data, isLoading } = useQuery({
    queryKey: ["users", "current"],
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });

  return { currentUser: data ? fromUserReadDTO(data) : null, isLoading };
}
