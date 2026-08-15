import type { User, UserLogInParams } from "./user.ts";

export interface UserFormState extends UserLogInParams {
  id: number | null;
}

export function makeUserFormState(user: User | null): UserFormState {
  if (user) return { ...user, password: "" };
  return { id: null, user_name: "", password: "" };
}
