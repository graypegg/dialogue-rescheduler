import type { ComponentProps, HTMLAttributes, PropsWithChildren } from "react";
import classes from "./button.module.css";
import clsx from "clsx";
import type { NavLink } from "react-router";

interface BaseButtonProps {
  intent?: "primary" | "secondary";
}

interface ActionButtonProps extends BaseButtonProps, HTMLAttributes<HTMLButtonElement> {}

/**
 * Note for interview: I know I've set this up before with a generic in place of the NavLink Component type!
 * I'm running out of time for this little exercise though, so leaving as this concrete definition instead.
 */
interface LinkButtonProps extends BaseButtonProps, ComponentProps<typeof NavLink> {
  as: typeof NavLink;
}

type ButtonProps = PropsWithChildren<ActionButtonProps> | PropsWithChildren<LinkButtonProps>;

export function Button(props: ButtonProps) {
  const { intent = "primary", className, children } = props;

  if ("as" in props) {
    const { as, ...rest } = props;
    const AltComponent = as; // My own fault for calling this "as", JSX needs a PascalCased name and "as as AltComponent" is confusing to read.
    return (
      <AltComponent className={clsx(className, classes.buttonBase, classes[intent])} {...rest}>
        {children}
      </AltComponent>
    );
  }

  return (
    <button className={clsx(className, classes.buttonBase, classes[intent])} {...props}>
      {children}
    </button>
  );
}
