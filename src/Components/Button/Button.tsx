import React from 'react';
import './Styles.css';

type InputPropsType = {
  label: string;
  className: string;
  onClick: (e) => void;
  type: 'submit';
};

const Button: React.FC<InputPropsType> = (props) => {
  return (
    <div className='button-wrapper'>
      <button className={props.className} onClick={props.onClick} type={props.type}>
        {props.label}
      </button>
    </div>
  );
};

export default Button;
