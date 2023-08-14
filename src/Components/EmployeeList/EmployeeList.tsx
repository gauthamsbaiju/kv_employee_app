import React from 'react';
import './Styles.css';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';

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
const EmployeeList: React.FC = () => {
  const navigate = useNavigate();
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });

  const handleClick = (id) => {
    navigate(`/employee/${id}`);
    console.log(event);
  };

  const handleClick2 = (event, id) => {
    event.stopPropagation();
    console.log(event);
    navigate(`/employee/edit/${id}`);
  };
  const dispatch = useDispatch();

  const del = (event, id) => {
    event.stopPropagation();
    console.log(event);
    const emp = employeesData.filter((item) => item.id !== id);

    dispatch({
      type: 'EMPLOYEE:DELETE',
      payload: {
        employee: emp
      }
    });

    console.log('deleted: ');
    console.log(emp);
    // navigate(`/employee`);
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
        {employeesData.map((item, index) => (
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
            <td className='btn-td'>
              <img src='/assets/icons/Path 327.svg' alt='e'></img>
              <div
                className='btn-div'
                onClick={(event) => {
                  del(event, item.id);
                }}
              >
                Delete
              </div>
              <div
                onClick={(event) => {
                  handleClick2(event, item.id);
                }}
              >
                {' '}
                Edit
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    // </div>
  );
};

export default EmployeeList;
