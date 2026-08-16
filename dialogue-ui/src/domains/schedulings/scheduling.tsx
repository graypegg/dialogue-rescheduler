import type { Scheduling } from "./types/scheduling.ts";
import { Heading } from "../../ui/heading/heading.tsx";
import { Icon } from "../../ui/icon/icon.tsx";
import { Error } from "../../ui/error/error.tsx";
import { Card } from "../../ui/card/card.tsx";
import { Columns } from "../../ui/columns/columns.tsx";
import { Button } from "../../ui/button/button.tsx";

interface SchedulingProps {
  scheduling: Scheduling;
}

export function Scheduling({ scheduling }: SchedulingProps) {
  return (
    <Card>
      {scheduling.isCanceled ? (
        <Error>
          <Columns layout="static">
            Requires rescheduling.
            <Button intent="secondary">Reschedule</Button>
          </Columns>
        </Error>
      ) : (
        <div>
          <Icon name="favorite" />
          Booked.
        </div>
      )}
      <Columns layout="sidebar">
        <div>
          <Heading level={3}>{scheduling.appointment.topic}</Heading>
          <p>With Dr. {scheduling.clinician.name}.</p>
        </div>

        <aside>
          <dl>
            <dt>Start</dt>
            <dd>{scheduling.appointment.start.toLocaleString()}</dd>

            <dt>End</dt>
            <dd>{scheduling.appointment.end.toLocaleString()}</dd>
          </dl>
        </aside>
      </Columns>
    </Card>
  );
}
