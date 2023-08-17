import { useState, type FC, useEffect } from 'react';
import './Styles.css';
import Button from '../../Components/Button/Button';
import Input from '../../Components/Input/Input';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './api';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(0);
  const navigate = useNavigate();
  const [login, { data, isSuccess }] = useLoginMutation();

  // console.log('data: ', data);
  // console.log('isSuccess: ', isSuccess);
  const changeUsername = (event) => {
    setUsername(event.target.value);
    console.log(username);
  };

  const changePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const submit = (event) => {
    console.log(event);
    // console.log('Submitted');

    if (username && password)
      login({
        username,
        password
      });
    else if (!username && !password) setError(3);
    else if (!username) setError(1);
    else if (!password) setError(2);
  };

  useEffect(() => {
    if (isSuccess && data) {
      localStorage.setItem('AuthToken', data.data[0].token);
      localStorage.setItem('Role', data.data[0].employeeDetails.role);
      console.log('Token is :');
      console.log(data.data[0].token);
      navigate('/employee');
    } else {
      console.log('Failed: ');
      console.log(data, isSuccess);
    }
  }, [isSuccess, data]);

  return (
    <div className='main-page-wrapper'>
      <div className='left'>
        <img src='/assets/img/banner.png' alt='Banner' className='image'></img>
      </div>
      <div className='right'>
        <div className='login-wrapper'>
          <img src='assets/img/kv-logo.png' alt='Logo' className='logo'></img>
          <Input
            placeholder='Username'
            type='text'
            lable='Username'
            onChange={changeUsername}
            value={username}
          />
          {(error === 1 || error === 3) && (
            <div className='error-msg'>Username cannot be empty</div>
          )}
          <Input
            placeholder='Password'
            type='password'
            lable='Password'
            onChange={changePassword}
            value='abc'
          />
          {(error === 2 || error === 3) && (
            <div className='error-msg'>Password cannot be empty</div>
          )}
          <Button label='Login' className='btn' onClick={submit} type='submit'></Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
