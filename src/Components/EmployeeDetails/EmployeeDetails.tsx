import React from 'react';
import './Styles.css';
import Status from '../Status/Status';

export type EmpPropsType = {
  lable: string;
  value: string | number | boolean;
  type: string;
};

const EmployeeDetails: React.FC<EmpPropsType> = (props) => {
  return (
    <div className='details-wrapper'>
      <div className='details-label' data-testid='employeeDetailsLabel-test'>
        {props.lable}
      </div>
      {props.type === 'status' && <Status value={Boolean(props.value)} />}
      <div data-testid='employeeDetailsValue-test'>{props.value}</div>
    </div>
  );
};

export default EmployeeDetails;
