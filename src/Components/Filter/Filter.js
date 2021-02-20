import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        Find contact by name
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    </>
  );
};

Filter.propTypes = {};

export default Filter;
