import React, { Component } from "react";
import ContactForm from "./Components/ContactForm/ContactForm";
// import PropTypes from 'prop-types';

class App extends Component {
  state = {
    contacts: [],
    // name: "",
    // number: "",
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };

  // handleNameChange = (event) => {
  //   console.log(event.currentTarget.value);

  //   this.setState({ name: event.currentTarget.value });
  //   // this.setState({ number: event.currentTarget.value });
  // };

  render() {
    return (
      <>
        <ContactForm onSubmit={this.formSubmitHandler} />
      </>
    );
  }
}

// App.propTypes = {

// };

export default App;

{
  /* <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div> */
}
