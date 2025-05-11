import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';  
import s from "./ContactList.module.css";
import {  selectLoading, selectError } from '../../redux/contactsSlice';
import { selectFilteredContacts } from '../../redux/contactsSlice';



export default function ContactList() {
  
   
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const filteredContacts = useSelector(selectFilteredContacts);

    


    return (
        <div>   
        {loading && <p className={s.notification}>Loading...</p>}
        {error && <p className={s.notification}>Error: {error}</p>}
        <ul className={s.contactList}>
            {filteredContacts.map(contact => (<li key={contact.id} className={s.contactItem}> <Contact contact={contact}/></li>))}
            </ul>
             
            </div>
    )
}