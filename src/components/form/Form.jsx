import React from 'react';
import PropTypes from 'prop-types';

const Form = (userName, onChange, onSubmit) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={userName} onChange={onChange} />
    <button>Submit</button>
  </form>
);

Form.propTypes = {
  userName: PropTypes.string.isRequired,
  onChange: PropTypes.func.IsRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Form;
