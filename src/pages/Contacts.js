import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { getIsLoading, getError } from 'redux/contacts/selectors';
import { ContactForm } from 'components/ContactForm/ContactForm';
import ListContacts from 'components/ListContacts/ListContacts';
import { Loader } from 'components/Loader';


export default function Contacts() {
  const dispatch = useDispatch();

  const isLoading = useSelector(getIsLoading);

  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 0,
          marginBottom: 0,
          marginRight: 'auto',
          marginLeft: 'auto',
          maxWidth: 1280,
          minHeight: 600,
          fontSize: 45,
          color: '#2d2d2d',
          paddingBottom: 60,
        }}
      >
        <h1
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: 20,
            marginBottom: 10,
            marginRight: 'auto',
            marginLeft: 'auto',
            fontWeight: '600',
          }}
        >
          PHONEBOOK
                  </h1>
        <ContactForm />
        <h2 style={{ fontSize: 36 }}>Contacts list</h2>

        {isLoading && <Loader />}
        {error && <b>Error, please reload the page</b>}
        <ListContacts />
      </div>
    </>
  );
}