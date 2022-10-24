import ContactItem from './ContactItem';
import {
  deleteContact,
  deleteFilteredContact,
} from '../../redux/contactsSlice';
import { useSelector, useDispatch } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsState.contacts);
  const filter = useSelector(state => state.contactsState.filter);

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
    dispatch(deleteFilteredContact(userId));
  };

  return (
    <ul>
      {(filter || contacts)?.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={handleDeleteContact}
          id={id}
        />
      ))}
    </ul>
  );
};

export default ContactList;
