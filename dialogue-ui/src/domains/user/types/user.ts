import type { UserReadDTO, UserWriteDTO } from "./dto.ts";

export interface User {
  id: number;
  user_name: string;
}

export type UserLogInParams = Pick<User, "user_name"> & { password: string };

/**
 * Interviewers note:
 * I know these mappers aren't doing much right now!
 * I just prefer clear lines between DTO + local interfaces. Makes handling API changes much easier!
 */
export function fromUserReadDTO({ user }: UserReadDTO): User {
  return { id: user.id, user_name: user.user_name };
}

export function toUserWriteDTO({ user_name, password }: UserLogInParams): UserWriteDTO {
  return { user: { user_name, password } };
}
