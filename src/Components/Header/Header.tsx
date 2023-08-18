import React from 'react';
import './Styles.css';

// type InputPropsType = {
//   label: string;
//   className: string;
//   onClick: (e) => void;
//   type: 'submit';
// };

const Header: React.FC = () => {
  return (
    <div className='header' data-testid='header-test'>
      <div className='logo-wrapper'>
        <img src='/assets/img/kv-logo.png' className='logo'></img>
      </div>
    </div>
  );
};

export default Header;
