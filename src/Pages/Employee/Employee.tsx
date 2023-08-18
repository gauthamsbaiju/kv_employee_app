import { type FC } from 'react';
import './Styles.css';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';
import Table from '../../Components/Table/Table';

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
        <Table />
      </div>
    </div>
  );
};

export default Employee;
