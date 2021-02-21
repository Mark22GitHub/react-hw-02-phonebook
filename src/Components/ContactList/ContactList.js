import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteFromContacts }) => {
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id} className={styles.ContactListItem}>
            <p className={styles.ContactsListText}>
              {contact.name}:{contact.number}
            </p>
            <button
              className={styles.ContactsListButton}
              onClick={() => onDeleteFromContacts(contact.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteFromContacts: PropTypes.func,
};

export default ContactList;
