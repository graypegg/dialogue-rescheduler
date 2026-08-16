import { createContext, type PropsWithChildren, useContext } from "react";
import { useGetCurrentUser } from "../api/current-user.ts";
import type { User } from "../../user/types/user.ts";

export interface CurrentUser {
  isLoading: boolean;
  currentUser: User | null;
}

const currentUserContext = createContext<CurrentUser>({
  isLoading: false,
  currentUser: null,
});

export function CurrentUserProvider({ children }: PropsWithChildren<{}>) {
  const { currentUser, isLoading } = useGetCurrentUser();

  return (
    <currentUserContext.Provider
      value={{
        isLoading,
        currentUser,
      }}
    >
      {children}
    </currentUserContext.Provider>
  );
}

export function useCurrentUser() {
  return useContext(currentUserContext);
}
