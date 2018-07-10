import React from 'react';
import PropTypes from 'prop-types'; 

const TextField = ({
  type, value, onChange, name, label, placeholder
}) => (
  <div className="form-group">
    <label htmlFor="2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className="form-control form-control-lg"
      placeholder={placeholder}
    
    />
  </div>
);


TextField.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default TextField;
