
import Nav  from "../Nav/Nav";
import { useSelector } from "react-redux";
import selectors  from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css"


export default function AppBar() {
  const isLogged = useSelector(selectors.selectIsLoggedIn);

  return (
    <nav className={s.navbar}>
      <ul >
        <li >
          <Nav />
        </li>
        <li >
          {isLogged ? <UserMenu /> : <AuthNav />}
        </li>
      </ul>
    </nav>
  );
};
