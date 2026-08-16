import classes from "./heading.module.css";
import { createElement, type HTMLAttributes, type PropsWithChildren } from "react";
import clsx from "clsx";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
}

export function Heading({
  level = 2,
  className,
  children,
  ...rest
}: PropsWithChildren<HeadingProps>) {
  return createElement(`h${level}`, {
    className: clsx(className, classes.heading),
    children,
    ...rest,
  });
}
