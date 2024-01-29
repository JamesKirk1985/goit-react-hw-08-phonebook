import { Header } from "components/Header/Header"
import { ContactForm } from "../../components/PhoneBook/ContactForm/ContactForm"
import { ContactList } from "../../components/PhoneBook/ContactList/ContactList"
import { Filter } from "../../components/PhoneBook/Filter/Filter"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchContacts } from "../../redux/contacts/contactsOperations"
export const Contacts = () => {
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContacts(token))
    }, [dispatch, token])
    
    return (
        <>
            
            <Header/>
            <p>Contacts</p>
            <ContactForm />
            <Filter/>
            <ContactList />
            
        </>
    )
}