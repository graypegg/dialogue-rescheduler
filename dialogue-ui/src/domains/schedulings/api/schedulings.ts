import { useQuery } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import type { SchedulingsDTO } from "../types/dto.ts";

async function getSchedulings() {
  return await fetchAs<SchedulingsDTO>("/schedulings");
}

interface UseSchedulingsParams {
  id: number;
}

export function useSchedulings(params: UseSchedulingsParams | null) {
  return useQuery({
    queryKey: makeSchedulingsQueryKey(params?.id ?? -1),
    queryFn: getSchedulings,
    enabled: !!params,
  });
}

function makeSchedulingsQueryKey(id: number) {
  return ["schedulings", { user: id }];
}
