import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import ContactForm from './Components/ContactForm/ContactForm';
import ContactList from './Components/ContactList/ContactList';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: "",
    // number: "",
  };

  // addContacts = text => {
  //   console.log(text);
  // };

  formSubmitHandler = ({ name, number }) => {
    const id = uuidv4();
    const contact1 = {
      id,
      name: name,
      number: number,
    };

    console.log(contact1);

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact1],
    }));
  };

  // handleNameChange = (event) => {
  //   console.log(event.currentTarget.value);

  //   this.setState({ name: event.currentTarget.value });
  //   // this.setState({ number: event.currentTarget.value });
  // };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        {/* <Filter /> */}
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

// App.propTypes = {

// };

export default App;
