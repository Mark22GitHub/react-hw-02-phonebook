import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';
import Filter from './Components/Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: uuidv4(),
      name: name,
      number: number,
    };

    // console.log(contact);

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  deleteFromContacts = contactListId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contact => contact.id !== contactListId,
      ),
    }));
  };

  // handleNameChange = (event) => {
  //   console.log(event.currentTarget.value);

  //   this.setState({ name: event.currentTarget.value });
  //   // this.setState({ number: event.currentTarget.value });
  // };

  changeFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  // removeFromContacts = id => {
  //   const result = this.state.contact.filter(el => el.id !== id);
  //   this.setState({ contact: result });
  //   // this.total();
  // };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          onDeleteFromContacts={this.deleteFromContacts}
        />
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;
