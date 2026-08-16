import { useQuery } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import type { UserReadDTO } from "../../user/types/dto.ts";
import { fromUserReadDTO } from "../../user/types/user.ts";

async function getCurrentUser() {
  try {
    return await fetchAs<UserReadDTO>("/session");
  } catch {
    return null;
  }
}

export function useGetCurrentUser() {
  const { data, isLoading } = useQuery({
    queryKey: makeCurrentUserQueryKey(),
    queryFn: getCurrentUser,
    staleTime: Infinity,
  });

  return { currentUser: data && "id" in data ? fromUserReadDTO(data) : null, isLoading };
}

export function makeCurrentUserQueryKey() {
  return ["users", "current"];
}
