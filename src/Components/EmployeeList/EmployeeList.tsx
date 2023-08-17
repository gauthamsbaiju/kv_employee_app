import React, { useEffect } from 'react';
import './Styles.css';
import Status from '../Status/Status';
import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { useDispatch } from 'react-redux';
import { useGetEmployeeListQuery } from '../../Pages/Employee/api';
import { useDeleteEmployeeMutation } from './api';
// import { useGetEmployeesQuery } from '../../services/employeeService';

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

  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });

  const { data: employeesData1 } = useGetEmployeeListQuery();
  const [deleteEmp, { isSuccess }] = useDeleteEmployeeMutation();
  const employeesData = employeesData1?.data || [];

  console.log('DATAAAAAAAAA: ', employeesData);
  const handleClick = (id) => {
    navigate(`/employee/${id}`);
    console.log(event);
  };

  const handleClick2 = (event, id) => {
    event.stopPropagation();
    console.log(event);
    navigate(`/employee/edit/${id}`);
  };
  // const dispatch = useDispatch();

  const del = (event, id) => {
    event.stopPropagation();
    console.log(event);
    // const emp = employeesData?.filter((item) => item.id !== id);
    deleteEmp(id);

    // dispatch({
    //   type: 'EMPLOYEE:DELETE',
    //   payload: {
    //     employee: emp
    //   }
    // });

    console.log('deleted: ');
    // console.log(emp);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('deleted');
      navigate('/employee');
    }
  }, [isSuccess]);
  const role = localStorage.getItem('Role');

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
        {employeesData?.map((item, index) => (
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
            {role === 'admin' && (
              <td className='btn-td'>
                <img
                  src='/assets/icons/delete.png'
                  alt='e'
                  className='del-icon'
                  onClick={(event) => {
                    del(event, item.id);
                  }}
                ></img>
                {/* <div
                className='btn-div'
                onClick={(event) => {
                  del(event, item.id);
                }}
              >
                Delete
              </div> */}
                {/* <img
                src='/assets/icons/edit.svg'
                alt='e'
                className='edit-icon'
                onClick={(event) => {
                  del(event, item.id);
                }}
              ></img> */}
                <svg
                  fill='#10AAC0'
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  onClick={(event) => {
                    handleClick2(event, item.id);
                  }}
                  className='edit-icon'
                >
                  <path d='M7.127 22.562l-7.127 1.438 1.438-7.128 5.689 5.69zm1.414-1.414l11.228-11.225-5.69-5.692-11.227 11.227 5.689 5.69zm9.768-21.148l-2.816 2.817 5.691 5.691 2.816-2.819-5.691-5.689z' />
                </svg>
                {/* <div
                onClick={(event) => {
                  handleClick2(event, item.id);
                }}
              >
                {' '}
                Edit
              </div> */}
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
    // </div>
  );
};

export default EmployeeList;
