import s from "./Contact.module.css";
import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from "react-redux";

export default function Contact({ contact }) {
    const dispatch = useDispatch();
    const  handleDelete = () => {
	  dispatch(deleteContact(contact.id))
  };
    return (
        <div>
            <p className={s.text}>Name: {contact.name}</p> 
            <p className={s.text}>Phone: {contact.number}</p> 
            <button className={s.button} type='button' onClick={handleDelete}>Delete</button>
        </div>
    )
}