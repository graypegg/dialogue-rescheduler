import classes from "./icon.module.css";

interface IconProps {
  name: string; // One day, I'll just make a big package for @types/material-symbols that just has a giant union type for this...
}

export function Icon({ name }: IconProps) {
  return <span className={classes.icon}>{name}</span>;
}
