import React from 'react';
import { Link } from 'react-router-dom';

const JoinCard = (props) => {
  return (
    <div>
      <div className='px-xl-4 px-lg-3 px-0 py-lg-4 py-3'>
        <div className='join-card px-sm-4 px-3 py-sm-4 py-3'>
          <img src={props.url} className='sec-img' alt='' />
          <span>as</span>
          <h2>{props.title}</h2>

          {props.as === '' ? (
            <button
              className='signup-btn btn-ani btn py-1 px-3'
              onClick={() => {
                props.showModalBtn(true);
              }}
            >
              SignUp Now
            </button>
          ) : (
            <Link
              to={props.as}
              className='signup-btn btn-ani btn py-1 px-3'
              onClick={() => {
                props.showModalBtn(true);
              }}
            >
              SignUp Now
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
