import React from 'react';
import './Styles.css';
// import { useNavigate } from 'react-router-dom';
// import Button from '../Button/Button';

type InputPropsType = {
  onChange: (e, n) => void;
  lable: string;
  placeholder: string;
  type: 'text' | 'dropdown' | 'address' | 'id';
  options: string[] | null;
  add?: {
    house: string;
    address_line_1: string;
    address_line_2: string;
  };
};

const EmployeeInput: React.FC<InputPropsType> = (props) => {
  // const navigate = useNavigate();
  // const create = (event) => {
  //   console.log(event);
  //   console.log('Submitted');
  //   navigate('/employee');
  // };

  // const cancel = (event) => {
  //   console.log(event);
  //   console.log('Submitted');
  //   navigate('/employee');
  // };

  return (
    <div className='input-wrapper1'>
      <label className='label1'>{props.lable}</label>

      {props.type === 'text' && (
        <input
          type={props.type}
          placeholder={props.placeholder}
          className='text-input'
          onChange={(e) => props.onChange(e, 0)}
        ></input>
      )}

      {props.type === 'id' && (
        <input
          disabled
          type={props.type}
          placeholder={props.placeholder}
          className='text-input'
          onChange={(e) => props.onChange(e, 0)}
        ></input>
      )}

      {props.type === 'dropdown' && (
        <select
          placeholder={props.placeholder}
          className='text-input'
          onChange={(e) => props.onChange(e, 0)}
        >
          <option value='' disabled selected>
            {props.placeholder}
          </option>
          {props.options.map((item, index) => {
            return <option key={index}>{item}</option>;
          })}
        </select>
      )}

      {props.type === 'address' && (
        <>
          <input
            type={props.type}
            placeholder={props.add.house}
            className='address-input'
            onChange={(e) => props.onChange(e, 1)}
          ></input>
          <input
            type={props.type}
            placeholder={props.add.address_line_1}
            className='address-input'
            onChange={(e) => props.onChange(e, 2)}
          ></input>
          <input
            type={props.type}
            placeholder={props.add.address_line_2}
            className='address-input'
            onChange={(e) => props.onChange(e, 3)}
          ></input>
          {/* <div className='btndiv'>
            <Button label='Create' className='createbtn' onClick={create} type='submit'></Button>
            <Button label='Cancel' className='cancelbtn' onClick={cancel} type='submit'></Button>
          </div> */}
        </>
      )}
    </div>
  );
};

export default EmployeeInput;
