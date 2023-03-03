import { Formik } from 'formik';
import { StyledForm, Label, Input, Error, Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';


const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    if (contacts.find(contact => contact.name === values.name)) {
        // toast.error(`Sorry, ${values.name} contact already exists.`);
      return;
    }
    dispatch(addContact(values));
    
    // toast.success('Contact successfully added!');
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
        >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" />
          <Error component="div" name="name" />
        </Label>
        <Label>
          Number
          <Input type="tel" name="number" />
          <Error component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};