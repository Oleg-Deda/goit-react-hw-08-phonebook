import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';
import { StyledForm, Label, Input,  Button } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-hot-toast';
import { getContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';


const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().min(13).max(13).required(),
});

const initialValues = {
  name: '',
  number: '',
};

export const ErrorText = styled.p`
  font: 0.6em 'typewriter', sans-serif;
  color: red;
  margin-top: 5px;
`;


const FormError  = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);

  const allContacts = useSelector(getContacts);

  const handleSubmit = (contact, { resetForm }) => {
    if (allContacts.some(item => item.name === contact.name)) {
      alert(`Contact ${contact.name} already exist`);
      return;
    }
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
        >
      <StyledForm>
        <Label>
          Name
          <Input type="text" name="name" placeholder="Rosie Simpson" />
          <FormError component="div" name="name" />
        </Label>
        <Label>
          Number
          <br />
          <Input type="tel" name="number" placeholder="+380673454545" />
          <FormError component="div" name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};