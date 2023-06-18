import ContactForm from '../Form/ContactForm';
import Container from './App.styled';
import Section from 'components/Section/Section';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { ThreeDots } from 'react-loader-spinner';

const App = () => {
  const stateIsLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      {stateIsLoading ? (
        <ThreeDots
          height="70"
          width="70"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      ) : (
        <Section title="Contacts">
          <Filter />
          <Contacts />
        </Section>
      )}
    </Container>
  );
};
export default App;
