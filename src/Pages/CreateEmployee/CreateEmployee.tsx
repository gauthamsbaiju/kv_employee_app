import { useState, type FC, useEffect } from 'react';
import './Styles.css';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';
import EmployeeInput from '../../Components/EmployeeInput/EmployeeInput';
import Button from '../../Components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { useCreateEmployeeMutation } from './api';
import { useGetDepartmentListQuery } from '../../utils/Department/api';
import { useGetRoleListQuery } from '../../utils/Role/api';

const CreateEmployee: FC = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [exp, setExp] = useState('');
  const [dept, setDept] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState(true);
  const [add1, setAdd1] = useState('');
  const [add2, setAdd2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const statuses = ['Active', 'Inactive'];
  const navigate = useNavigate();
  const changeName = (event, n) => {
    setName(event.target.value);
    console.log(name);
    console.log(n);
  };
  const changeUsername = (event, n) => {
    setUsername(event.target.value);
    console.log(username);
    console.log(n);
  };
  const changePassword = (event, n) => {
    setPassword(event.target.value);
    console.log(password);
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
    else if (n === 3) setCity(event.target.value);
    else if (n === 4) setState(event.target.value);
    else if (n === 5) setCountry(event.target.value);
    else setPincode(event.target.value);
  };
  const [createEmp, { isSuccess }] = useCreateEmployeeMutation();

  const { data: departmentData } = useGetDepartmentListQuery();
  const departments = departmentData?.data || [];

  const { data: roleData } = useGetRoleListQuery();
  const roles = roleData?.data || [];

  let deptIds;

  const create = (event) => {
    console.log(event);
    console.log('Submitted');

    if (departments) {
      deptIds = departments.find((item) => item.name === dept);
      console.log('IDS:::');
      console.log(deptIds.id);
    }

    const emp = {
      name: name,
      username: username,
      password: password,
      joiningDate: date,
      experience: Number(exp),
      isActive: status,
      role: role,
      departmentId: deptIds.id,
      address: {
        address_line_1: add1,
        address_line_2: add2,
        city: city,
        state: state,
        country: country,
        pincode: pincode
      }
    };

    createEmp(emp);
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('Emp created :');
      navigate('/employee');
    } else {
      console.log('Failed: ');
      console.log(isSuccess);
    }
  }, [isSuccess]);

  const cancel = (event) => {
    console.log(event);
    console.log('Submitted');
    navigate('/employee');
  };
  const add = {
    address_line_1: 'Address line 1',
    address_line_2: 'Address line 2',
    city: 'city',
    state: 'state',
    country: 'country',
    pincode: 'pincode'
  };

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
          <EmployeeInput
            lable='Username'
            placeholder='Username'
            type='text'
            onChange={changeUsername}
            options={null}
          />
          <EmployeeInput
            lable='Password'
            placeholder='Password'
            type='password'
            onChange={changePassword}
            options={null}
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
