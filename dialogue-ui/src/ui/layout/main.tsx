import type { PropsWithChildren } from "react";
import { Header } from "./header.tsx";

import classes from "./layout.module.css";
import { useCurrentUser } from "../../domains/auth/hooks/current-user.tsx";
import { Spinner } from "../spinner/spinner.tsx";
import clsx from "clsx";

export function Main({ children }: PropsWithChildren<{}>) {
  const { isLoading } = useCurrentUser();

  return (
    <>
      <Header />
      <main className={clsx(classes.main, { [classes.loading]: isLoading })}>
        {isLoading ? <Spinner /> : children}
      </main>
    </>
  );
}
