import { NavLink } from "react-router-dom";

export default function AuthNav () {
  return (
    <>
      <NavLink to="/login">
        Login
      </NavLink>
      <NavLink to="/register">
        Register
      </NavLink>
    </>
  );
};

