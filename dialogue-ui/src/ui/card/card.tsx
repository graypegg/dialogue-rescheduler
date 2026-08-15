import type { HTMLAttributes, PropsWithChildren } from "react";
import classes from "./card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function Card(props: PropsWithChildren<CardProps>) {
  const { title, children } = props;

  return (
    <section className={classes.card} {...props}>
      {title && <header>{title}</header>}
      {children}
    </section>
  );
}
