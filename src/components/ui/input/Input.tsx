import React from 'react';
import './input.css'
import type { InputProps } from '../../../interfaces/Input';

const Input: React.FC<InputProps> = ({
  className = '',
  icon = '',
  placeholder = '',
  value = '',
  onChange,
  type = 'text',
}) => {
  return (
    <div className='input-container'>
      {icon && <img draggable="false" src={icon} alt="logo"/>}
      <input
        type={type}
        placeholder={placeholder}
        className={`input-field ${className} ${icon ? 'with-icon' : ''}`}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default Input;