import React from 'react';
import './Styles.css';
import Status from '../Status/Status';

type EmpPropsType = {
  lable: string;
  value: string | number | boolean;
  type: string;
};

// const mapper = {
//     "name": "Empoloyee Name";

// }

const EmployeeDetails: React.FC<EmpPropsType> = (props) => {
  return (
    <div className='details-wrapper'>
      <div className='details-label'>{props.lable}</div>
      {props.type === 'status' && <Status value={Boolean(props.value)} />}
      <div>{props.value}</div>
    </div>
  );
};

export default EmployeeDetails;
