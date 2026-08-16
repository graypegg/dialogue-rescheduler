import { useSchedulings } from "./api/schedulings.ts";
import { useCurrentUser } from "../auth/hooks/current-user.tsx";
import { Scheduling } from "./scheduling.tsx";
import { Heading } from "../../ui/heading/heading.tsx";
import classes from "./schedulings.module.css";

export function SchedulingsTable() {
  const { currentUser } = useCurrentUser();
  const { schedulings } = useSchedulings(currentUser);

  return (
    <div className={classes.table}>
      <Heading level={2}>Current Appointments</Heading>

      {schedulings.map((scheduling) => (
        <Scheduling key={scheduling.id} scheduling={scheduling} />
      ))}
    </div>
  );
}
