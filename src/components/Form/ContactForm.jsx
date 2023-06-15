import { CurrentForm, Input, Button, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { BsFillTelephonePlusFill } from 'react-icons/bs';
import { useForm } from 'react-hook-form';
import { selectContacts } from 'redux/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const stateContacts = useSelector(selectContacts);

  const onSubmitForm = contactInfo => {
    const duplicateName = stateContacts.find(
      contact => contact.name === contactInfo.name
    );
    // duplicateName
    //   ? alert(contactInfo.name + ' is already in your contacts')
    //   : dispatch(addContact(contactInfo));
    reset({
      name: '',
      number: '',
    });
  };

  return (
    <CurrentForm onSubmit={handleSubmit(onSubmitForm)}>
      <Label>
        Name:
        <Input
          type="text"
          {...register('name')}
          id="name"
          placeholder="For example Jacob Mercer"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number:
        <Input
          type="tel"
          {...register('number')}
          id="number"
          placeholder="Starts with '+'"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">
        Add to contact <BsFillTelephonePlusFill size="10px" />
      </Button>
    </CurrentForm>
  );
};
export default ContactForm;
