import classes from "./layout.module.css";
import logoUrl from "../assets/logo.svg";
import { NavLink } from "react-router";

export function Header() {
  return (
    <header className={classes.header}>
      <NavLink to="/">
        <img alt="Rescheduler logo, not actually a Dialogue product" src={logoUrl} />
      </NavLink>
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </nav>
    </header>
  );
}
