import { useSelector } from "react-redux";
import selectors  from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function RestrictedRoute ({ component: Component, redirectTo = "/" })  {
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

