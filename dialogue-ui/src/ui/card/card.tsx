import type { HTMLAttributes, PropsWithChildren, ReactElement } from "react";
import classes from "./card.module.css";
import clsx from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: ReactElement;
}

export function Card({ header, className, children, ...rest }: PropsWithChildren<CardProps>) {
  return (
    <section className={clsx(className, classes.card)} {...rest}>
      {header && <header>{header}</header>}
      {children}
    </section>
  );
}
