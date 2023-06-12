import { useDispatch, useSelector } from 'react-redux';
import { ContactList, Button } from './Contacts.styled';
import { getContacts, getFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const Contacts = () => {
  const dispatch = useDispatch();
  const stateContacts = useSelector(getContacts);
  const stateFilterValue = useSelector(getFilterValue);
  const filteredContacts = stateContacts?.filter(contact =>
    contact.name.toLowerCase().includes(stateFilterValue.toLowerCase())
  );

  return (
    <div>
      <ContactList>
        {filteredContacts.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name} : {contact.number}
              <Button
                type="button"
                onClick={() => dispatch(deleteContact(contact.id))}
              >
                <RiDeleteBack2Fill color="darkblue" />
              </Button>
            </li>
          );
        })}
      </ContactList>
    </div>
  );
};

export default Contacts;
