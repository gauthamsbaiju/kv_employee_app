import React from 'react';
import './Styles.css';

type InputPropsType = {
  onChange: (e) => void;
  lable: string;
  placeholder: string;
  type: 'text' | 'dropdown' | 'address';
};

const EmployeeInput: React.FC<InputPropsType> = (props) => {
  return (
    <div className='input-wrapper1'>
      <label className='label'>{props.lable}</label>

      {props.type === 'text' && (
        <input
          type={props.type}
          placeholder={props.placeholder}
          className='text-input'
          onChange={props.onChange}
        ></input>
      )}
    </div>
  );
};

export default EmployeeInput;
