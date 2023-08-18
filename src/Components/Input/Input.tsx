import React from 'react';
import './Styles.css';

type InputPropsType = {
  value: string;
  onChange: (e) => void;
  lable: string;
  placeholder: string;
  type: 'text' | 'password';
};

const Input: React.FC<InputPropsType> = (props) => {
  return (
    <div className='input-wrapper'>
      <label className='label'>{props.lable}</label>
      <div>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className='input'
          onChange={props.onChange}
        ></input>
      </div>
    </div>
  );
};

export default Input;
