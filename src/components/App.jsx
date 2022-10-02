///////////
import { useSelector, useDispatch } from 'react-redux';
import {
  addContactAction,
  removeContactAction,
} from 'redux/contacts/items/items-slice';
import {
  getFilterContacts,
  getContacts,
} from 'redux/contacts/items/items-selectors';
import { setFilter } from 'redux/contacts/filter/filter-slice';
import { getFilter } from 'redux/contacts/filter/filter-selectors';
///////////
import Form from './contact-form/ContactForm';
import Filter from './filter/Filter';
import ContactList from './contact-list/ContactList';
import Container from './container/Container';
import { HeroTitle } from './titles/HeroTitle';
import { SecondaryTitle } from './titles/SecondaryTitle';

const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilterContacts(contacts, filter);
  const dispatch = useDispatch();

  const addContact = data => {
    dispatch(addContactAction(data));
  };

  const deleteContact = id => {
    dispatch(removeContactAction(id));
  };

  const changeFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Container>
      <HeroTitle />
      <Form onSubmit={addContact} contacts={contacts} />

      <SecondaryTitle />
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </Container>
  );
};

export default App;

// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { useLocalStorage } from './hooks/Hooks';
// import Form from './contact-form/ContactForm';
// import Filter from './filter/Filter';
// import ContactList from './contact-list/ContactList';

// const App = () => {
// const arrayContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const [contacts, setContacts] = useLocalStorage('contacts', arrayContacts);
// const [filter, setFilter] = useState('');

// const submitContact = data => {
//   if (isRepeat(data)) {
//     return alert(`${data.name} : ${data.number} is already in list`);
//   }

//   setContacts(prevContacts => {
//     const newContact = {
//       ...data,
//       id: nanoid(),
//       name: data.name,
//       number: data.number,
//     };

//     return [newContact, ...prevContacts];
//   });
// };

// const deleteContact = contactId => {
//   setContacts(prevState =>
//     prevState.filter(contact => contact.id !== contactId)
//   );
// };

// const isRepeat = ({ name, number }) => {
//   const result = contacts.find(
//     item => item.name === name && item.number === number
//   );
//   return Boolean(result);
// };

// const changeFilter = event => {
//   setFilter(event.currentTarget.value);
// };

// const findFilterContacts = () => {
//   if (!filter) {
//     return contacts;
//   }
//   return contacts.filter(
//     contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//       contact.number.includes(filter.toLowerCase())
//   );
// };

// const filterContacts = findFilterContacts();

// return (
//     <Container>
//       <HeroTitle />
//       <Form onSubmit={submitContact} contacts={contacts} />

//       <SecondaryTitle />
//       <Filter value={filter} onChange={changeFilter} />
//       <ContactList contacts={filterContacts} onDeleteContact={deleteContact} />
//     </Container>
//   );
// };

// export default App;
