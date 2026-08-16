import { useQuery } from "@tanstack/react-query";
import { fetchAs } from "../../api/helpers.ts";
import type { SchedulingsDTO } from "../types/dto.ts";
import { fromSchedulingDTO } from "../types/scheduling.ts";

async function getSchedulings() {
  return await fetchAs<SchedulingsDTO>("/schedulings");
}

interface UseSchedulingsParams {
  id: number;
}

export function useSchedulings(params: UseSchedulingsParams | null) {
  const { data, ...rest } = useQuery({
    queryKey: makeSchedulingsQueryKey(params?.id ?? -1),
    queryFn: getSchedulings,
    enabled: !!params,
  });

  return { schedulings: data?.map?.(fromSchedulingDTO) ?? [], ...rest };
}

function makeSchedulingsQueryKey(id: number) {
  return ["schedulings", { user: id }];
}
