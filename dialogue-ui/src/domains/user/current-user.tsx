import { createContext } from "react";

interface User {
  user_name: string;
}

const currentUserContext = createContext<User | null>(null);

export const CurrentUserProvider = currentUserContext.Provider;
