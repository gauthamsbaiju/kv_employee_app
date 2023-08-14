import { type FC } from 'react';
import './Styles.css';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';
import EmployeeList from '../../Components/EmployeeList/EmployeeList';

const Employee: FC = () => {
  return (
    <div className='page-wrapper'>
      <Header />
      <Sidebar />
      <div className='list-wrapper'>
        <Subheader
          title='Employee List'
          filter={true}
          button={true}
          text='Create Employee'
          type='Create'
        />
        <EmployeeList />
      </div>
    </div>
  );
};

export default Employee;
