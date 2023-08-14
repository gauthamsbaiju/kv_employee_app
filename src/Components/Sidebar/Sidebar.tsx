import React from 'react';
import './Styles.css';
import { useNavigate } from 'react-router-dom';

// type InputPropsType = {
//   label: string;
//   className: string;
//   onClick: (e) => void;
//   type: 'submit';
// };

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/employee`);
  };

  return (
    <div className='sidebar'>
      <div className='btn-wrapper' onClick={handleClick}>
        <div className='btn-icon'>
          <img src='/assets/icons/employees.svg' alt='icon' className='icon'></img>
        </div>
        <div className='btn-text'>Employee List</div>
      </div>
    </div>
  );
};

export default Sidebar;
