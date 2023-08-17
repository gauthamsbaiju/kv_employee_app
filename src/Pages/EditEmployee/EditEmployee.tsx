import { useState, type FC } from 'react';
import './Styles.css';
// import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';
import EmployeeInput from '../../Components/EmployeeInput/EmployeeInput';
import Button from '../../Components/Button/Button';
import { useNavigate, useParams } from 'react-router-dom';
// import employees from '../../Dummy/Employees';
import { useDispatch, useSelector } from 'react-redux';
import { editEmployee } from '../../employeeActions';
// import Card from '../../Components/Card/Card';
// import employees from '../../Dummy/Employees';
// import Table from '../../Components/Table/Table';

const EditEmployee: FC = () => {
  const { id } = useParams();
  const employeesData = useSelector((state: any) => {
    return state.employees;
  });
  const employee = employeesData.find((item) => item.id === +id);
  let stat = 'Active';

  if (employee.isActive === false) stat = 'Inactive';
  const [name, setName] = useState(employee.name);
  const [date, setDate] = useState(employee.joiningDate);
  const [exp, setExp] = useState(employee.experience);
  const [dept, setDept] = useState(employee.department);
  const [role, setRole] = useState(employee.role);
  const [status, setStatus] = useState(employee.isActive);
  const [add1, setAdd1] = useState(employee.address.house);
  const [add2, setAdd2] = useState(employee.address.address_line_1);
  const [add3, setAdd3] = useState(employee.address.address_line_2);
  const add = {
    house: add1,
    address_line_1: add2,
    address_line_2: add3
  };
  const departments = ['Frontend', 'Backend', 'HR'];
  const roles = ['Admin', 'User'];
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
    else if (n === 3) setAdd3(event.target.value);
  };

  const dispatch = useDispatch();
  const edit = (event) => {
    console.log(event);
    console.log('Submitted');
    const emp = {
      id: Number(id),
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

    dispatch(editEmployee(emp));

    // dispatch({
    //   type: 'EMPLOYEE:EDIT',
    //   payload: {
    //     employee: emps
    //   }
    // });

    console.log('Edit: ');
    console.log(emp);
    navigate('/employee');
  };

  const cancel = (event) => {
    console.log(event);
    console.log('Submitted');
    navigate('/employee');
  };

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
            placeholder={employee.department}
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
