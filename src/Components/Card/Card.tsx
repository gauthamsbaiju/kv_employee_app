import React from 'react';
import './Styles.css';
import EmployeeDetails from '../EmployeeDetails/EmployeeDetails';
// import employees from '../../Dummy/Employees';

export type CardPropsType = {
  emp: {
    id: number;
    name: string;
    joiningDate: string;
    experience: number;
    isActive: boolean;
    role: string;
  };
};

const Card: React.FC<CardPropsType> = (props) => {
  console.log(props.emp);
  const details = Object.entries(props.emp);

  details.map((item) => console.log(item));

  return (
    <div className='card-wrapper' data-testid='card-test'>
      {/* {details.map((item, index) => (
        <EmployeeDetails lable={item[0]} value={item[1]} key={index} />
      ))} */}
      <EmployeeDetails lable='Employee Name' value={props.emp.name} type='text' />
      <EmployeeDetails lable='Joining Date' value={props.emp.joiningDate} type='text' />
      <EmployeeDetails lable='Experience' value={props.emp.experience} type='text' />
      <EmployeeDetails lable='Role' value={props.emp.role} type='text' />
      <EmployeeDetails lable='Status' value={props.emp.isActive} type='status' />
      <EmployeeDetails lable='Employee ID' value={props.emp.id} type='text' />
    </div>
  );
};

export default Card;
