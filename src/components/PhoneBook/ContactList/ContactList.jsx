import css from './ContactList.module.css'
import { useSelector, useDispatch} from "react-redux";
import { deleteContact } from '../../../redux/contacts/contactsOperations';



export const ContactList = () => { 
    
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts.contacts.items)    
    const filter = useSelector(state => state.filter)     
   
    let filterContact = contacts;

    function filterFunction(Key) {        
       filterContact = contacts.filter((item) => (
       item.name.toLowerCase().includes(Key.toLowerCase())))    
    }
    filterFunction(filter)

   
    function deleteFunc(evt) { 
        dispatch(deleteContact(evt.target.closest("LI").id))
    } 
        
        return (       
            <ul className={ css.list}>              
                {(contacts.length === filterContact.length ?
                        contacts :
                        filterContact)
                    .map((item) => (<li className={css.contactItem} key={item.id} id={item.id}>
                <div>{item.name}: {item.number}</div>
                        <button className={css.button} type="button" key={item.id}
                            onClick={deleteFunc}
                        >Delete</button>
            </li>))}          
            </ul>)    
}

