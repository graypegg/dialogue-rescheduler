import type { SchedulingDTO } from "./dto.ts";

export interface Scheduling {
  id: number;
  isCanceled: boolean;
  appointment: {
    id: number;
    topic: string;
    start: Date;
    end: Date;
  };
  user: { id: number; user_name: string };
  clinician: { id: number; name: string };
}

export function fromSchedulingDTO(dto: SchedulingDTO): Scheduling {
  return {
    id: dto.id,
    isCanceled: false,
    appointment: {
      id: dto.appointment.id,
      topic: dto.appointment.topic,
      start: new Date(dto.appointment.start),
      end: new Date(dto.appointment.end),
    },
    clinician: dto.clinician,
    user: dto.user,
  };
}

export function toSchedulingDTO(scheduling: Scheduling): SchedulingDTO {
  return {
    id: scheduling.id,
    is_canceled: scheduling.isCanceled,
    appointment: {
      id: scheduling.appointment.id,
      topic: scheduling.appointment.topic,
      start: scheduling.appointment.start.toISOString(),
      end: scheduling.appointment.end.toISOString(),
    },
    clinician: scheduling.clinician,
    user: scheduling.user,
  };
}
