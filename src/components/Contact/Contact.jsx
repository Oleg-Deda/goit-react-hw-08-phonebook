import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { deleteContact } from 'redux/operations';
import { Text, Button, } from './Contact.styled';

// import { selectContacts } from 'redux/selectors';

export const Contact = ({ contact: { id, name, number } }) => {
    const dispatch = useDispatch();
    // const contacts = useSelector(selectContacts);

    const handleDelete = id => {
        dispatch(deleteContact(id));
        toast.success('Contact was deleted!');
    };

    // const handleToastSubmit = values => {
    //   if (contacts.some(contact => contact.name === values.name)) {
    //     toast.error(`Sorry, ${values.name} contact already exists.`);
    //     return;
    //   };

    return (
        <>
        <Text>
          {name}: {number}
        </Text>
        <Button type="button" onClick={() => handleDelete(id)}>
          Delete
        </Button>
         </>
    );
  };
    

  Contact.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }).isRequired,
  };