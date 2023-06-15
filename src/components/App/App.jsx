import ContactForm from '../Form/ContactForm';
import Container from './App.styled';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';


const App = () => {
  const stateContacts = useSelector(selectContacts);
  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {stateContacts.length > 0 ? (
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      ) : (
        <strong>There are no contacts in your phonebook yet.</strong>
      )}
    </Container>
  );
};
export default App;
