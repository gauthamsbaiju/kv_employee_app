import React from 'react';
import './Styles.css';

type InputPropsType = {
  value: boolean;
};

const Status: React.FC<InputPropsType> = (props) => {
  let cname: string = '';

  if (props.value) cname = 'active';
  // console.log(cname);
  else cname = 'inactive';
  // console.log(cname);

  return <div className={cname}>{cname}</div>;
};

export default Status;
