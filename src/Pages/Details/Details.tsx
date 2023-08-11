import { type FC } from 'react';
import './Styles.css';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';
import Card from '../../Components/Card/Card';
import employees from '../../Dummy/Employees';
// import Table from '../../Components/Table/Table';

const Details: FC = () => {
  const { id } = useParams();
  const employee = employees.find((item) => item.id === +id);

  return (
    <div className='page-wrapper'>
      <Header />
      <Sidebar />
      <div className='list-wrapper'>
        <Subheader title='Employee Details' filter={false} button={true} text='Edit' type='Edit' />
        <Card emp={employee} />
      </div>
    </div>
  );
};

export default Details;
