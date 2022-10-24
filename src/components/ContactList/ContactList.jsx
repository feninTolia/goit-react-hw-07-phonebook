import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';
import { deleteFilteredContact } from 'redux/contactsSlice';
import { deleteContact } from 'redux/operation';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
    dispatch(deleteFilteredContact(userId));
  };

  return (
    <ul>
      {(filter || contacts)?.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          name={name}
          number={phone}
          onDeleteContact={handleDeleteContact}
          id={id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
