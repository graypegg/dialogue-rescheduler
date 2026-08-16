import classes from "./layout.module.css";
import logoUrl from "../../assets/logo.svg";
import { NavLink } from "react-router";
import { useCurrentUser } from "../../domains/auth/hooks/current-user.tsx";
import { useLogOut } from "../../domains/auth/api/log-out.ts";
import { Spinner } from "../spinner/spinner.tsx";
import { useLogIn } from "../../domains/auth/api/log-in.ts";

export function Header() {
  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        <img alt="Rescheduler logo, not actually a Dialogue product" src={logoUrl} />
        Dialogue
        <br />
        Rescheduler
      </NavLink>
      <HeaderNav />
    </header>
  );
}

function HeaderNav() {
  const { currentUser, isLoading } = useCurrentUser();
  const logIn = useLogIn();
  const logOut = useLogOut();

  async function handleLogOut() {
    logOut.mutate();
  }

  if (isLoading || logIn.isPending || logOut.isPending) {
    return (
      <nav>
        <Spinner />
      </nav>
    );
  }

  if (currentUser) {
    return (
      <nav>
        <span>{currentUser.user_name}</span>
        <a href="#" onClick={handleLogOut}>
          Logout
        </a>
      </nav>
    );
  }

  return (
    <nav>
      <NavLink to="/log-in">Login</NavLink>
      <NavLink to="/sign-up">Signup</NavLink>
    </nav>
  );
}
