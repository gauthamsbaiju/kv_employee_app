import React from 'react';
import './Styles.css';

export type StatusPropsType = {
  value: boolean;
};

const Status: React.FC<StatusPropsType> = (props) => {
  let cname: string = '';

  if (props.value) cname = 'active';
  // console.log(cname);
  else cname = 'inactive';
  // console.log(cname);

  return <div className={cname} data-testid='status-test'>{cname}</div>;
};

export default Status;
