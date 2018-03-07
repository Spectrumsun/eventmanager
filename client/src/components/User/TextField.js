import React from 'react';

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
      //required
    />
  </div>
);


export default TextField;
