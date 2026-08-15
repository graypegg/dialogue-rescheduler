export interface User {
  id: number;
  user_name: string;
}

export type UserLogInParams = Pick<User, "user_name"> & { password: string };
