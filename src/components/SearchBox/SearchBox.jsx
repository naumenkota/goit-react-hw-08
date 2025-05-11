import s from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";



export default function SearchBox() {
  
const dispatch = useDispatch();
const filter = useSelector((state) => state.filters.name);
const handleFilterChange = (e) => dispatch(changeFilter(e.target.value));

    return (
      <div className={s.wrapper}>
        <p className={s.text}>Find contacts by name</p>
      <input className={s.input} type="text" value={filter} onChange={handleFilterChange}  placeholder="Start typing..."/>
      
    </div>
    );
}