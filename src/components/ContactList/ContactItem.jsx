import { useSelector } from 'react-redux';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  const { isLoading } = useSelector(state => state.contacts);

  return (
    <li>
      <span>{name} </span>
      <span>{number} </span>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        disabled={isLoading && true}
      >
        dELeTe 🗑️
      </button>
    </li>
  );
};

export default ContactItem;
