import classes from "./layout.module.css";
import logoUrl from "../../assets/logo.svg";
import { NavLink, useNavigate } from "react-router";
import { useCurrentUser } from "../../domains/auth/hooks/current-user.tsx";

export function Header() {
  const navigate = useNavigate();
  const { currentUser, logOut } = useCurrentUser();

  async function handleLogOut() {
    await logOut();
    navigate("/");
  }

  return (
    <header className={classes.header}>
      <NavLink to="/" className={classes.logo}>
        <img alt="Rescheduler logo, not actually a Dialogue product" src={logoUrl} />
        Dialogue
        <br />
        Rescheduler
      </NavLink>
      {currentUser ? (
        <nav>
          <a href="#" onClick={handleLogOut}>
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
