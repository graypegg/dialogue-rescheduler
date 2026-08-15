import type { PropsWithChildren } from "react";
import { Header } from "./header.tsx";

import classes from "./layout.module.css";

export function Main({ children }: PropsWithChildren<{}>) {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
}
