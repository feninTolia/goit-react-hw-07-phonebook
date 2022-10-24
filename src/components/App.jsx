import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { fetchContacts, addContact } from 'redux/operation';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  console.log(contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContactForm = newContact => {
    if (contacts && contacts.some(el => el.phone === newContact.phone)) {
      window.alert(`${newContact.phone} is already exist in your phonebook`);
      return;
    }

    if (contacts && contacts.some(el => el.name === newContact.name)) {
      window.alert(`${newContact.name} is already exist in your phonebook`);
      return;
    }

    dispatch(addContact(newContact));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContactForm} />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
