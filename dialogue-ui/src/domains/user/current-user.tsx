import { createContext, type PropsWithChildren } from "react";
import { useGetCurrentUser } from "./api/current-user.ts";
import type { User, UserLogInParams } from "./types/user.ts";

export interface CurrentUser {
  isLoggedIn: boolean;
  currentUser: User | null;
  logInAs: (logInParams: UserLogInParams) => void;
}

const currentUserContext = createContext<CurrentUser>({
  isLoggedIn: false,
  currentUser: null,
  logInAs: () => {},
});

export function CurrentUserProvider({ children }: PropsWithChildren<{}>) {
  const { currentUser, isLoading } = useGetCurrentUser();

  const value = {
    isLoggedIn: Boolean(currentUser) && !isLoading,
    currentUser,
    logInAs: () => {},
  };

  return <currentUserContext.Provider value={value}>{children}</currentUserContext.Provider>;
}
