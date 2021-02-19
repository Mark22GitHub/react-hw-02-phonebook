import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

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
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.nameInputId}>
            Name
            <input
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
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

ContactForm.propTypes = {};

export default ContactForm;
