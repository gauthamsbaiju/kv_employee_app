import React from 'react';
import './Styles.css';

export type ButtonPropsType = {
  label: string;
  className?: string;
  onClick?: (e) => void;
  type: 'submit';
};

const Button: React.FC<ButtonPropsType> = (props) => {
  return (
    <div className='button-wrapper'>
      <button
        className={props.className}
        onClick={props.onClick}
        type={props.type}
        data-testid='button-test'
      >
        {props.label}
      </button>
    </div>
  );
};

export default Button;
