import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFiltredContacts} from 'redux/selectors';
import { List } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectFiltredContacts);

  return (
    <List>
      {contacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} number={phone} />
      ))}
    </List>
  );
};
