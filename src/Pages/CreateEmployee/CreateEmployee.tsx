import { type FC } from 'react';
import './Styles.css';
// import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';
// import Card from '../../Components/Card/Card';
// import employees from '../../Dummy/Employees';
// import Table from '../../Components/Table/Table';

const CreateEmployee: FC = () => {
  return (
    <div className='page-wrapper'>
      <Header />
      <Sidebar />
      <div className='list-wrapper'>
        <Subheader title='Create Details' filter={false} button={false} text='' type='' />
      </div>
    </div>
  );
};

export default CreateEmployee;
