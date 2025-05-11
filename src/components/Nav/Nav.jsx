
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import selectors  from "../../redux/auth/selectors";

export default function Nav() {
    
  const isLogged = useSelector(selectors.selectIsLoggedIn);

  return (
    <>
      <NavLink to="/">
        Home
      </NavLink>
      {isLogged && (
        <NavLink  to="/contacts">
          Contacts
        </NavLink>
      )}
    </>
  );
};

