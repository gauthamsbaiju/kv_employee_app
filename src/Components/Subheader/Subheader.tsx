import React from 'react';
import './Styles.css';
import { useNavigate, useParams } from 'react-router-dom';

type SubheaderPropsType = {
  title: string;
  filter: boolean;
  button: boolean;
  text: string;
  type: string;
};

const Subheader: React.FC<SubheaderPropsType> = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleClick = () => {
    if (props.type === 'Create') navigate(`/employee/create_employee`);
  };
  const handleClick2 = () => {
    if (props.type === 'Edit') navigate(`/employee/edit/${id}`);
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

          {props.button && props.type !== 'Edit' && (
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
          {props.button && props.type === 'Edit' && (
            <div className='empbtn'>
              <button
                className='circle'
                onClick={() => {
                  handleClick2();
                }}
              >
                <img src='/assets/icons/Path 327.svg' alt='e'></img>
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
