import React from 'react';
import './Styles.css';
import { useNavigate, useParams } from 'react-router-dom';

export type SubheaderPropsType = {
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
  const role = localStorage.getItem('Role');

  return (
    <div className='subheader-wrapper' data-testid='subheader-test'>
      <div className='subheader'>
        <div className='text' data-testid='subheaderTitle-test'>
          {props.title}
        </div>
        <div className='rightelem' data-testid='subheaderFilter-test'>
          {props.filter && (
            <>
              <div className='filter-text'>Filter By</div>
              <div className='filter'></div>
            </>
          )}

          {role === 'admin' && props.button && props.type !== 'Edit' && (
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
          {role === 'admin' && props.button && props.type === 'Edit' && (
            <div className='empbtn'>
              <button
                className='circle'
                onClick={() => {
                  handleClick2();
                }}
              >
                <img src='/assets/icons/Path 327.svg' alt='e'></img>
              </button>
              <div className='butn-text' data-testid='subheaderText-test'>
                {props.text}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subheader;
