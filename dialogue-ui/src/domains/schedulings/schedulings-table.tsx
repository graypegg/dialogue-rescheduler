import { useSchedulings } from "./api/schedulings.ts";
import { useCurrentUser } from "../auth/hooks/current-user.tsx";

export function SchedulingsTable() {
  const { currentUser } = useCurrentUser();
  const { schedulings } = useSchedulings(currentUser);

  return JSON.stringify(schedulings);
}
