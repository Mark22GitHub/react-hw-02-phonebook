import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

export const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  nameInputId = uuidv4();
  numberInputId = uuidv4();

  state = { ...INITIAL_STATE };

  handleChange = evt => {
    // console.log(evt.currentTarget.value);
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);

    this.reset();
  };

  // const INITIAL__STATE =
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };
  // ==================

  render() {
    return (
      <>
        <form className={styles.contactForm} onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
              className={styles.input}
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
            />
          </label>

          <label htmlFor={this.numberInputId}>
            Number
            <input
              className={styles.input}
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
            />
          </label>

          <button className={styles.addContact} type="submit">
            Add contact
          </button>
        </form>
      </>
    );
  }
}

export default ContactForm;
