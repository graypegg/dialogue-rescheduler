import { createContext, type PropsWithChildren, useState } from "react";

export interface User {
  id: number;
  user_name: string;
}

export type UserLogInParams = Pick<User, "user_name"> & { password: string };

export interface CurrentUser {
  currentUser: User | null;
  logInAs: (logInParams: UserLogInParams) => void;
}

const currentUserContext = createContext<User | null>(null);

export function CurrentUserProvider({ children }: PropsWithChildren<{}>) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const value = {
    currentUser,
    logInAs: () => {}, // todo: tanstack query ??? lateer
  };

  return <currentUserContext.Provider value={value}>{children}</currentUserContext.Provider>;
}
