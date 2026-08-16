import { createContext, type PropsWithChildren, useContext } from "react";
import { useGetCurrentUser } from "../api/current-user.ts";
import type { User, UserLogInParams } from "../../user/types/user.ts";
import { useLogIn } from "../api/log-in.ts";
import { useLogOut } from "../api/log-out.ts";

export interface CurrentUser {
  isLoading: boolean;
  currentUser: User | null;
  logIn: (logInParams: UserLogInParams) => void;
  logOut: () => void;
}

const currentUserContext = createContext<CurrentUser>({
  isLoading: false,
  currentUser: null,
  logIn: () => {},
  logOut: () => {},
});

export function CurrentUserProvider({ children }: PropsWithChildren<{}>) {
  const logIn = useLogIn();
  const logOut = useLogOut();
  const { currentUser, isLoading } = useGetCurrentUser();

  return (
    <currentUserContext.Provider
      value={{
        isLoading,
        currentUser,
        logIn: logIn.mutate,
        logOut: logOut.mutate,
      }}
    >
      {children}
    </currentUserContext.Provider>
  );
}

export function useCurrentUser() {
  return useContext(currentUserContext);
}
