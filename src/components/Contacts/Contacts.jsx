import { useDispatch, useSelector } from 'react-redux';
import { ContactList, Button } from './Contacts.styled';
import { selectContacts, selectFilterValue } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import { RiDeleteBack2Fill } from 'react-icons/ri';

const Contacts = () => {
  const dispatch = useDispatch();
  const stateContacts = useSelector(selectContacts);
  const stateFilterValue = useSelector(selectFilterValue);
  const filteredContacts = stateContacts?.filter(contact =>
    contact.name.toLowerCase().includes(stateFilterValue.toLowerCase())
  );

  return (
    <div>
      {stateContacts.length > 0 ? (
        <ContactList>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.id}>
                {contact.name} : {contact.phone}
                <Button
                  type="button"
                  onClick={() => dispatch(deleteContact(contact))}
                >
                  <RiDeleteBack2Fill color="darkblue" />
                </Button>
              </li>
            );
          })}
        </ContactList>
      ) : (
        <strong>There are no contacts in your phonebook yet.</strong>
      )}
    </div>
  );
};

export default Contacts;
