import { type FC } from 'react';
import './styles/global.css';
import Login from './Pages/Login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './Pages/Employee/Employee';
import Details from './Pages/Details/Details';
import CreateEmployee from './Pages/CreateEmployee/CreateEmployee';
import EditEmployee from './Pages/EditEmployee/EditEmployee';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employee' element={<Employee />} />
          <Route path='/employee/:id' element={<Details />} />
          <Route path='/employee/create_employee' element={<CreateEmployee />} />
          <Route path='/employee/edit/:id' element={<EditEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
