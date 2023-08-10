import React from 'react';
import './Styles.css';

const Subheader: React.FC = () => {
  return (
    <div className='subheader'>
      <div className='text'>Employee List</div>
      <div className='filter-text'>Filter By</div>
      <div className='filter'></div>
      <div className='btn'>
        <img src='assets/icons/Ellipse 1.svg' className='icon'></img>
        <div className='butn-text'>Create Employee</div>
      </div>
    </div>
  );
};

export default Subheader;
