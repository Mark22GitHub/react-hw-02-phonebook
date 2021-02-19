import React from 'react';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
  return (
    <>
      <div>
        {contacts.map(contact => (
          <p key={contact.id}>
            {contact.name}:{contact.number}
          </p>
        ))}
      </div>
    </>
  );
};

ContactList.propTypes = {};

export default ContactList;
