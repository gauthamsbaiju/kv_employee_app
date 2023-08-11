import { useState, type FC } from 'react';
import './Styles.css';
// import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';
import EmployeeInput from '../../Components/EmployeeInput/EmployeeInput';
// import Card from '../../Components/Card/Card';
// import employees from '../../Dummy/Employees';
// import Table from '../../Components/Table/Table';

const CreateEmployee: FC = () => {
  const [name, setName] = useState('');
  const changeName = (event) => {
    setName(event.target.value);
    console.log(name);
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
          />

          <EmployeeInput
            lable='Employee Name'
            placeholder='Employee Name'
            type='text'
            onChange={changeName}
          />

          <EmployeeInput
            lable='Employee Name'
            placeholder='Employee Name'
            type='text'
            onChange={changeName}
          />

          <EmployeeInput
            lable='Employee Name'
            placeholder='Employee Name'
            type='text'
            onChange={changeName}
          />

          <EmployeeInput
            lable='Employee Name'
            placeholder='Employee Name'
            type='text'
            onChange={changeName}
          />

          <EmployeeInput
            lable='Employee Name'
            placeholder='Employee Name'
            type='text'
            onChange={changeName}
          />

          <EmployeeInput
            lable='Employee Name'
            placeholder='Employee Name'
            type='text'
            onChange={changeName}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
