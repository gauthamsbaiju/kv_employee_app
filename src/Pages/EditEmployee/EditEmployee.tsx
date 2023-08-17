import { useState, type FC, useEffect } from 'react';
import './Styles.css';
// import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';
import EmployeeInput from '../../Components/EmployeeInput/EmployeeInput';
import Button from '../../Components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useGetEmployeeByIdQuery } from '../Details/api';
import { useEditEmployeeMutation } from './api';
import { useGetDepartmentListQuery } from '../../utils/Department/api';
import { useGetRoleListQuery } from '../../utils/Role/api';
// import employees from '../../Dummy/Employees';
// import { useDispatch, useSelector } from 'react-redux';
// import { editEmployee } from '../../employeeActions';
// import Card from '../../Components/Card/Card';
// import employees from '../../Dummy/Employees';
// import Table from '../../Components/Table/Table';

const EditEmployee: FC = () => {
  const { id } = useParams();
  const [e, setEmp] = useState({});
  let employeesData;
  //   const employeesData = useSelector((state: any) => {
  //     return state.employees;
  //   });
  const { data: employeesData1, isSuccess } = useGetEmployeeByIdQuery(id);
  const [editEmp, { isSuccess: edited }] = useEditEmployeeMutation();

  console.log('EDITINGGG: ');
  console.log(employeesData);
  //   const employee = employeesData.find((item) => item.id === +id);
  //   const employee = employeesData1?.data[0];

  let stat = 'Active';

  //   if (employee.isActive === false) stat = 'Inactive';
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  //   const [username, setUsername] = useState('');
  //   const [password, setPassword] = useState('');
  const [exp, setExp] = useState(0);
  const [dept, setDept] = useState('');
  const [dept2, setDept2] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState(true);
  const [add1, setAdd1] = useState('');
  const [add2, setAdd2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const add = {
    address_line_1: add1,
    address_line_2: add2,
    city: city,
    state: state,
    country: country,
    pincode: pincode
  };
  const employee = {
    name: name,
    joiningDate: date,
    experience: Number(exp),
    isActive: status,
    role: role,
    departmentId: dept,
    address: {
      address_line_1: add1,
      address_line_2: add2,
      city: city,
      state: state,
      country: country,
      pincode: pincode
    }
  };
  //   const departments = ['Frontend', 'Backend', 'HR'];
  //   const roles = ['Admin', 'User'];
  const { data: departmentData } = useGetDepartmentListQuery();
  const departments = departmentData?.data || [];

  const { data: roleData } = useGetRoleListQuery();
  const roles = roleData?.data || [];
  let deptIds;

  //   if (departments) {
  //     deptIds = departments.find((item) => item.name === dept);
  //     console.log('IDS:::');
  //     console.log(deptIds.id);
  //   }
  const statuses = ['Active', 'Inactive'];
  const navigate = useNavigate();
  const changeName = (event, n) => {
    setName(event.target.value);
    console.log('Name in event target: ');
    console.log(event.target.value);
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
    else if (n === 3) setCity(event.target.value);
    else if (n === 4) setState(event.target.value);
    else if (n === 5) setCountry(event.target.value);
    else setPincode(event.target.value);
  };
  const edit = (event) => {
    console.log(event);
    console.log('Submitted');
    if (departments) {
      deptIds = departments.find((item) => item.name === dept);
      console.log('IDS:::');
      console.log(deptIds.id);
    }
    const emp = {
      name: name,
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

    editEmp({ id, body: emp });
    if (edited) console.log('Edit success: ');
    navigate('/employee');
  };

  const cancel = (event) => {
    console.log(event);
    console.log('Submitted');
    navigate('/employee');
  };

  useEffect(() => {
    if (employeesData1 && isSuccess) {
      setEmp(employeesData1.data);
      console.log('INSIDE USE EFFECT: ');
      console.log(employeesData1.data[0]);
      console.log(e);
      setName(employeesData1.data[0].name);
      setDate(employeesData1.data[0].joiningDate);
      setExp(employeesData1.data[0].experience);
      setDept(employeesData1.data[0].departmentId);
      setRole(employeesData1.data[0].role);
      setStatus(employeesData1.data[0].isActive);
      setAdd1(employeesData1.data[0].address.address_line_1);
      setAdd2(employeesData1.data[0].address.address_line_2);
      setCity(employeesData1.data[0].address.city);
      setState(employeesData1.data[0].address.state);
      setCountry(employeesData1.data[0].address.country);
      setPincode(employeesData1.data[0].address.pincode);
      if (departments) {
        deptIds = departments.find((item) => item.id === employeesData1.data[0].departmentId);
        setDept2(deptIds.name);
      }
    }
    // else setEmp()
  }, [employeesData1, departments]);

  return (
    <div className='page-wrapper'>
      <Header />
      <Sidebar />
      <div className='list-wrapper'>
        <Subheader title='Edit Employee' filter={false} button={false} text='' type='' />
        <div className='card'>
          <EmployeeInput
            lable='Employee Name'
            placeholder={employee.name}
            type='text'
            onChange={changeName}
            options={null}
          />

          <EmployeeInput
            lable='Joining Date'
            placeholder={employee.joiningDate}
            type='text'
            onChange={changeDate}
            options={null}
          />

          <EmployeeInput
            lable='Experience'
            placeholder={String(employee.experience)}
            type='text'
            onChange={changeExp}
            options={null}
          />

          <EmployeeInput
            lable='Department'
            placeholder={dept2}
            type='dropdown'
            onChange={changeDept}
            options={departments}
          />

          <EmployeeInput
            lable='Role'
            placeholder={employee.role}
            type='dropdown'
            onChange={changeRole}
            options={roles}
          />

          <EmployeeInput
            lable='Status'
            placeholder={stat}
            type='dropdown'
            onChange={changeStatus}
            options={statuses}
          />

          <EmployeeInput
            lable='Address'
            // defaultValue={
            //   employee.address.house +
            //   '_' +
            //   employee.address.address_line_1 +
            //   '_' +
            //   employee.address.address_line_2
            // }
            type='address'
            onChange={changeAdd}
            options={null}
            add={add}
          />

          <EmployeeInput
            lable='Employee ID'
            placeholder={id}
            type='id'
            onChange={changeAdd}
            options={null}
          />
          <div className='filler2'></div>
          <div className='btns-wrapper'>
            <Button label='Edit' className='createbtn' onClick={edit} type='submit'></Button>
            <Button label='Cancel' className='cancelbtn' onClick={cancel} type='submit'></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
