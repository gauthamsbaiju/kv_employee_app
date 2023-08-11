import React from 'react';
import './Styles.css';
import { useNavigate } from 'react-router-dom';

type SubheaderPropsType = {
  title: string;
  filter: boolean;
  button: boolean;
  text: string;
  type: string;
};

const Subheader: React.FC<SubheaderPropsType> = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (props.type === 'Create') navigate(`/employee/create_employee`);
  };

  return (
    <div className='subheader-wrapper'>
      <div className='subheader'>
        <div className='text'>{props.title}</div>
        <div className='rightelem'>
          {props.filter && (
            <>
              <div className='filter-text'>Filter By</div>
              <div className='filter'></div>
            </>
          )}

          {props.button && (
            <div className='empbtn'>
              <button
                className='circle'
                onClick={() => {
                  handleClick();
                }}
              >
                +
              </button>
              <div className='butn-text'>{props.text}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subheader;
