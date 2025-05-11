
import { useDispatch, useSelector } from "react-redux";
import selectors  from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";
import s from "./UserMenu.module.css"

export default function UserMenu () {
  const dispatch = useDispatch();
  const userName = useSelector(selectors.selectName);

  const handleLogOut = () => {
    dispatch(logout());
    };
    
  return (
    <div className={s.header}>
      <p>Hello, {userName}</p>
      <button onClick={handleLogOut}>
        LogOut
      </button>
    </div>
  );
};

