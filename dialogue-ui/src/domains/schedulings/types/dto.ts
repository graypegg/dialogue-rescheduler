export interface SchedulingDTO {
  id: number;
  is_canceled: boolean;
  user: { id: number; user_name: string };
  clinician: { id: number; name: string };
  appointment: { id: number; topic: string; start: string; end: string };
}

export type SchedulingsDTO = SchedulingDTO[];
