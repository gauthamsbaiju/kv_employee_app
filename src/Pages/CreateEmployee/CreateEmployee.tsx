import { useState, type FC } from 'react';
import './Styles.css';
// import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';
import EmployeeInput from '../../Components/EmployeeInput/EmployeeInput';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import employees from '../../Dummy/Employees';
import { useDispatch, useSelector } from 'react-redux';
// import Card from '../../Components/Card/Card';
// import employees from '../../Dummy/Employees';
// import Table from '../../Components/Table/Table';

const CreateEmployee: FC = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [exp, setExp] = useState('');
  const [dept, setDept] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState(true);
  const [add1, setAdd1] = useState('');
  const [add2, setAdd2] = useState('');
  const [add3, setAdd3] = useState('');
  const departments = ['Frontend', 'Backend', 'HR'];
  const roles = ['Admin', 'User'];
  const statuses = ['Active', 'Inactive'];
  const navigate = useNavigate();
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });
  const changeName = (event, n) => {
    setName(event.target.value);
    console.log(name);
    console.log(n);
  };
  const changeDate = (event, n) => {
    setDate(event.target.value);
    console.log(date);
    console.log(n);
  };
  const changeExp = (event, n) => {
    setExp(event.target.value);
    console.log(exp);
    console.log(n);
  };
  const changeDept = (event, n) => {
    setDept(event.target.value);
    console.log(dept);
    console.log(n);
  };
  const changeRole = (event, n) => {
    setRole(event.target.value);
    console.log(role);
    console.log(n);
  };
  const changeStatus = (event, n) => {
    if (event.target.value === 'Active') setStatus(true);
    else setStatus(false);
    console.log(status);
    console.log(n);
  };

  const changeAdd = (event, n) => {
    if (n === 1) setAdd1(event.target.value);
    else if (n === 2) setAdd2(event.target.value);
    else setAdd3(event.target.value);
  };
  const dispatch = useDispatch();

  const create = (event) => {
    console.log(event);
    console.log('Submitted');
    const emp = {
      id: employeesData.length + 1,
      name: name,
      joiningDate: date,
      experience: Number(exp),
      isActive: status,
      role: role,
      department: dept,
      address: {
        house: add1,
        address_line_1: add2,
        address_line_2: add3
      }
    };

    dispatch({
      type: 'EMPLOYEE:CREATE',
      payload: {
        employee: emp
      }
    });

    console.log(emp);
    employees.push(emp);
    navigate('/employee');
  };

  const cancel = (event) => {
    console.log(event);
    console.log('Submitted');
    navigate('/employee');
  };
  const add = {
    house: 'House',
    address_line_1: 'Address line 1',
    address_line_2: 'Address line 2'
  };

  // const create = (event) => {
  //   console.log(event);
  //   console.log('Submitted');
  //   navigate('/employee');
  // };

  return (
    <div className='page-wrapper'>
      <Header />
      <Sidebar />
      <div className='list-wrapper'>
        <Subheader title='Create Details' filter={false} button={false} text='' type='' />
        <div className='card'>
          <EmployeeInput
            lable='Employee Name'
            placeholder='Employee Name'
            type='text'
            onChange={changeName}
            options={null}
          />

          <EmployeeInput
            lable='Joining Date'
            placeholder='Joining Date'
            type='text'
            onChange={changeDate}
            options={null}
          />

          <EmployeeInput
            lable='Experience'
            placeholder='Experience'
            type='text'
            onChange={changeExp}
            options={null}
          />

          <EmployeeInput
            lable='Department'
            placeholder='Choose Department'
            type='dropdown'
            onChange={changeDept}
            options={departments}
          />

          <EmployeeInput
            lable='Role'
            placeholder='Choose Role'
            type='dropdown'
            onChange={changeRole}
            options={roles}
          />

          <EmployeeInput
            lable='Status'
            placeholder='Status'
            type='dropdown'
            onChange={changeStatus}
            options={statuses}
          />

          <EmployeeInput
            lable='Address'
            placeholder='Address'
            type='address'
            onChange={changeAdd}
            options={null}
            add={add}
          />
          <div className='filler'></div>
          <div className='btns-wrapper'>
            <Button label='Create' className='createbtn' onClick={create} type='submit'></Button>
            <Button label='Cancel' className='cancelbtn' onClick={cancel} type='submit'></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
