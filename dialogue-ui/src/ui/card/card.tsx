import type { HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import classes from "./card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactElement;
}

export function Card({ header, children, ...rest }: PropsWithChildren<CardProps>) {
  return (
    <section className={classes.card} {...rest}>
      {header && <header>{header}</header>}
      {children}
    </section>
  );
}
