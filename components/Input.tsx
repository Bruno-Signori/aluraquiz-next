import React, {InputHTMLAttributes} from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  value: string;
  className: string;

}

const Input: React.FC<InputProps> = ({name, placeholder, value, onChange, className, ...rest}) => {
  return (
    <div>
      <input 
      placeholder={placeholder}
      onChange={onChange}
      className={className}
      {...rest}
      />
      </div>
  )

}
export default Input;