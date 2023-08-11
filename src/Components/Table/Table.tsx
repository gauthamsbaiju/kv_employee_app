import React from 'react';
import './Styles.css';
import employees from '../../Dummy/Employees';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';

const tableHeader = [
  {
    id: 'Employee ID',
    name: 'Employee Name',
    joiningDate: 'Joining Date',
    experience: 'Experience',
    isActive: 'Status',
    role: 'Role',
    address: 'Address'
  }
];
const Table: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/employee/${id}`);
  };

  return (
    // <div className='table-wrapper'>
    <table className='table'>
      <thead className='table-head'>
        {tableHeader.map((item, index) => (
          <tr className='row' key={index}>
            <td> {item.name}</td>
            <td> {item.id}</td>
            <td> {item.joiningDate}</td>
            <td> {item.role}</td>
            <td> {item.isActive}</td>
            <td> {item.experience}</td>
            <td> Action</td>
          </tr>
        ))}
      </thead>
      <tbody className='body'>
        {employees.map((item, index) => (
          <tr
            className='row'
            key={index}
            onClick={() => {
              handleClick(item.id);
            }}
          >
            <td> {item.name}</td>
            <td> {item.id}</td>
            <td> {item.joiningDate}</td>
            <td> {item.role}</td>
            <td>
              <Status value={item.isActive}></Status>
            </td>
            <td> {item.experience}</td>
            <td> action</td>
          </tr>
        ))}
      </tbody>
    </table>
    // </div>
  );
};

export default Table;
