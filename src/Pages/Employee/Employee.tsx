import { type FC } from 'react';
import './Styles.css';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';

const Employee: FC = () => {
  return (
    <div className='page-wrapper'>
      <Header />
      <Sidebar />
      <div className='list-wrapper'>
        <Subheader />
      </div>
    </div>
  );
};

export default Employee;
