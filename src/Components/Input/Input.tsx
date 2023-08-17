import React from 'react';
import './Styles.css';

export type InputPropsType = {
  value?: string;
  onChange?: (e) => void;
  lable: string;
  placeholder: string;
  type: 'text' | 'password';
};

const Input: React.FC<InputPropsType> = (props) => {
  return (
    <div className='input-wrapper'>
      <label className='label' data-testid='label-test'>
        {props.lable}
      </label>
      <div>
        <input
          type={props.type}
          placeholder={props.placeholder}
          className='input'
          onChange={props.onChange}
          data-testid='input-test'
        ></input>
      </div>
    </div>
  );
};

export default Input;
