import { useEffect, type FC, useState } from 'react';
import './Styles.css';
import { useParams } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Subheader from '../../Components/Subheader/Subheader';
import Card from '../../Components/Card/Card';
// import employees from '../../Dummy/Employees';
// import { useSelector } from 'react-redux';
import { useGetEmployeeByIdQuery } from './api';
// import Table from '../../Components/Table/Table';

const Details: FC = () => {
  const { id } = useParams();
  const [e, setEmp] = useState({});
  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });
  const { data: employeesData1 } = useGetEmployeeByIdQuery(id);
  // const employee = employeesData1?.data || [];

  console.log('Details: ');
  console.log(employeesData1);
  // console.log(employee);
  // const employee = employeesData.find((item) => item.id === +id);
  useEffect(() => {
    if (employeesData1 && employeesData1.data) setEmp(employeesData1.data);
    // else setEmp()
  }, [employeesData1]);

  return (
    <div className='page-wrapper'>
      <Header />
      <Sidebar />
      <div className='list-wrapper'>
        <Subheader title='Employee Details' filter={false} button={true} text='Edit' type='Edit' />
        {e[0] !== undefined && <Card emp={e[0]} />}
        {e[0] === undefined && <div>Employee not found</div>}
      </div>
    </div>
  );
};

export default Details;
