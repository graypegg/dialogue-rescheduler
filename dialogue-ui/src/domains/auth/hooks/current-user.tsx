import { createContext, type PropsWithChildren, useContext } from "react";
import { useGetCurrentUser } from "../api/current-user.ts";
import type { User, UserLogInParams } from "../../user/types/user.ts";

export interface CurrentUser {
  isLoading: boolean;
  currentUser: User | null;
  logInAs: (logInParams: UserLogInParams) => void;
}

const currentUserContext = createContext<CurrentUser>({
  isLoading: false,
  currentUser: null,
  logInAs: () => {},
});

export function CurrentUserProvider({ children }: PropsWithChildren<{}>) {
  const { currentUser, isLoading } = useGetCurrentUser();

  const value = {
    isLoading,
    currentUser,
    logInAs: () => {},
  };

  return <currentUserContext.Provider value={value}>{children}</currentUserContext.Provider>;
}

export function useCurrentUser() {
  return useContext(currentUserContext);
}
