import type { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function Card({ title, children, ...rest }: PropsWithChildren<CardProps>) {
  return (
    <section className={classes.card} {...rest}>
      {title && <header>{title}</header>}
      {children}
    </section>
  );
}
