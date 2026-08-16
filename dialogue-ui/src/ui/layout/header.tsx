import classes from "./layout.module.css";
import logoUrl from "../../assets/logo.svg";
import { NavLink } from "react-router";
import { useCurrentUser } from "../../domains/auth/hooks/current-user.tsx";

export function Header() {
  const { currentUser, logOut } = useCurrentUser();

  return (
    <header className={classes.header}>
      <NavLink to="/">
        <img alt="Rescheduler logo, not actually a Dialogue product" src={logoUrl} />
      </NavLink>
      {currentUser ? (
        <nav>
          <a href="#" onClick={logOut}>
            Logout
          </a>
        </nav>
      ) : (
        <nav>
          <NavLink to="/log-in">Login</NavLink>
          <NavLink to="/sign-up">Signup</NavLink>
        </nav>
      )}
    </header>
  );
}
