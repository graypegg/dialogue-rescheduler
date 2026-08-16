import type { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./card.module.css";

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export function CardFooter({ children, ...rest }: PropsWithChildren<CardFooterProps>) {
  return (
    <footer className={classes.footer} {...rest}>
      {children}
    </footer>
  );
}
