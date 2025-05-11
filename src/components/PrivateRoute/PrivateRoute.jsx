
import { useSelector } from "react-redux";
import  selectors  from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ component: Component, redirectTo = "/" })  {
  const isLoggedIn = useSelector(selectors.selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
