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
    console.log(event);
    // else navigate(`/employee/edit/${id}`);
  };

  const handleClick2 = (id) => {
    event.preventDefault();
    // event.stopPropagation();
    console.log(event);
    navigate(`/employee/edit/${id}`);
  };

  const del = (id) => {
    event.preventDefault();
    // event.stopPropagation();
    employees.splice(
      employees.findIndex((a) => a.id === id),
      1
    );
    navigate(`/employee`);
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
            <td>
              <div
                onClick={() => {
                  handleClick2(item.id);
                }}
              >
                Edit
              </div>
              <div
                onClick={() => {
                  del(item.id);
                }}
              >
                {' '}
                Delete
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    // </div>
  );
};

export default Table;
