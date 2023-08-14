import React from 'react';
import './Styles.css';
// import { useNavigate } from 'react-router-dom';
// import Button from '../Button/Button';

type InputPropsType = {
  onChange: (e, n) => void;
  lable: string;
  placeholder?: string;
  type: 'text' | 'dropdown' | 'address' | 'id';
  options: string[] | null;
  add?: {
    house: string;
    address_line_1: string;
    address_line_2: string;
  };
  defaultValue?: string;
};

const EmployeeInput: React.FC<InputPropsType> = (props) => {
  console.log('def val: ');
  console.log(props.defaultValue);
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
  let addr: string[] = [];

  if (props.type === 'address' && props.defaultValue) {
    addr = props.defaultValue.split('_');
    console.log('Def val new');
    console.log(addr);
  }

  return (
    <div className='input-wrapper1'>
      <label className='label1'>{props.lable}</label>

      {props.type === 'text' && (
        <input
          type={props.type}
          placeholder={props.placeholder}
          // value={props.defaultValue}
          className='text-input'
          onChange={(e) => props.onChange(e, 0)}
        ></input>
      )}

      {props.type === 'id' && (
        <input
          disabled
          type={props.type}
          placeholder={props.placeholder}
          // value={props.defaultValue}
          className='text-input'
          onChange={(e) => props.onChange(e, 0)}
        ></input>
      )}

      {props.type === 'dropdown' && (
        <select
          placeholder={props.placeholder}
          // value={props.defaultValue}
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
            // value={addr[0]}
            className='address-input'
            onChange={(e) => props.onChange(e, 1)}
          ></input>
          <input
            type={props.type}
            placeholder={props.add.address_line_1}
            // value={addr[1]}
            className='address-input'
            onChange={(e) => props.onChange(e, 2)}
          ></input>
          <input
            type={props.type}
            placeholder={props.add.address_line_2}
            // value={addr[2]}
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
