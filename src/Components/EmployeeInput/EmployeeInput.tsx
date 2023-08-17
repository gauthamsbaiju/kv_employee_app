import React from 'react';
import './Styles.css';
import { Department } from '../../types';
// import { useNavigate } from 'react-router-dom';
// import Button from '../Button/Button';

export type EmpInputPropsType = {
  onChange: (e, n) => void;
  lable: string;
  placeholder?: string;
  type: 'text' | 'dropdown' | 'address' | 'id' | 'password';
  options: string[] | Department[] | null;
  add?: {
    address_line_1: string;
    address_line_2: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
  };
  defaultValue?: string;
};

const EmployeeInput: React.FC<EmpInputPropsType> = (props) => {
  console.log('def val: ');
  // console.log(props.defaultValue);
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
    <div className='input-wrapper1' data-testid='EmpDetails-test'>
      <label className='label1' data-testid='EmpDetailslabel-test'>
        {props.lable}
      </label>

      {props.type === 'text' && (
        <input
          type={props.type}
          placeholder={props.placeholder}
          // value={props.defaultValue}
          className='text-input'
          onChange={(e) => props.onChange(e, 0)}
          data-testid='EmpDetailsProps-test'
        ></input>
      )}

      {props.type === 'password' && (
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

      {props.type === 'dropdown' && props.lable === 'Department' && (
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
            return <option key={index}>{item.name}</option>;
          })}
        </select>
      )}
      {props.type === 'dropdown' && props.lable !== 'Department' && (
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
        <div className='address-wrapper'>
          <input
            type={props.type}
            placeholder={props.add.address_line_1}
            // value={addr[1]}
            className='address-input'
            onChange={(e) => props.onChange(e, 1)}
          ></input>
          <input
            type={props.type}
            placeholder={props.add.address_line_2}
            // value={addr[2]}
            className='address-input'
            onChange={(e) => props.onChange(e, 2)}
          ></input>
          <input
            type={props.type}
            placeholder={props.add.city}
            // value={addr[0]}
            className='address-input'
            onChange={(e) => props.onChange(e, 3)}
          ></input>
          <input
            type={props.type}
            placeholder={props.add.state}
            // value={addr[0]}
            className='address-input'
            onChange={(e) => props.onChange(e, 4)}
          ></input>
          <input
            type={props.type}
            placeholder={props.add.country}
            // value={addr[0]}
            className='address-input'
            onChange={(e) => props.onChange(e, 5)}
          ></input>
          <input
            type={props.type}
            placeholder={props.add.pincode}
            // value={addr[0]}
            className='address-input'
            onChange={(e) => props.onChange(e, 6)}
          ></input>
          {/* <div className='btndiv'>
            <Button label='Create' className='createbtn' onClick={create} type='submit'></Button>
            <Button label='Cancel' className='cancelbtn' onClick={cancel} type='submit'></Button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default EmployeeInput;
