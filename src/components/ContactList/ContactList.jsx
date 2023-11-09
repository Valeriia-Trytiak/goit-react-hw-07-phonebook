import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { MdDeleteForever } from 'react-icons/md';
import { List, ContactItem, User, DeleteContact } from './ContactList.styled';

const getvisibleContacts = (items, filterContact) => {
  if (filterContact === '') {
    return items;
  }
  return items.filter(item =>
    item.name.toLowerCase().includes(filterContact.toLowerCase())
  );
};

export const ContactList = () => {
  const items = useSelector(getContacts);
  const filterContact = useSelector(getFilter);
  const visibleContacts = getvisibleContacts(items, filterContact);
  const dispatch = useDispatch();
  return (
    <List>
      {visibleContacts.map(user => (
        <ContactItem key={user.id}>
          <User>
            {user.name}: {user.phone}
          </User>
          <DeleteContact
            type="button"
            onClick={() => dispatch(deleteContact(user.id))}
          >
            <MdDeleteForever size={'24px'} />
          </DeleteContact>
        </ContactItem>
      ))}
    </List>
  );
};
