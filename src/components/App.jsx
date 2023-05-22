import { nanoid } from 'nanoid';

import { ContactForm } from './contactForm/ContactForm';
import { ContactList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { setContacts, setFilter } from 'redux/contacts/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contactData.contacts);
  const filter = useSelector(state => state.contactData.filter);

  const dispatch = useDispatch();

  function addNewContact(data) {
    const newContact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim()
      )
    ) {
      alert(`Contact ${newContact.name} is already exists!`);
      return;
    }

    dispatch(setContacts([...contacts, newContact]));
  }

  function getFilteredContacts() {
    const normalizedContact = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContact)
    );
  }

  function onChangeFilter({ currentTarget: { value } }) {
    dispatch(setFilter(value));
  }

  function deleteContact(contactId) {
    dispatch(setContacts(contacts.filter(({ id }) => id !== contactId)));
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="title">Phonebook</h1>
          <ContactForm addNewContact={addNewContact} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="title">Contacts</h2>

          {contacts.length !== 0 ? (
            <>
              <Filter filter={filter} onChangeFilter={onChangeFilter} />
              <ContactList
                contacts={getFilteredContacts()}
                deleteContact={deleteContact}
              />
            </>
          ) : (
            <>
              <h5>You still haven't any contacts</h5>
            </>
          )}
        </div>
      </section>
    </>
  );
};
