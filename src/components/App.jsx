import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

import { ContactForm } from './contactForm/ContactForm';
import { Filter } from './filter/Filter';
import { ContactList } from './contactList/ContactList';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Phonebook</h1>
          <ContactForm />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Contacts</h2>

          {contacts.length !== 0 ? (
            <>
              <Filter />
              <ContactList />
            </>
          ) : (
            <>
              <p>You still haven't any contacts</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};
