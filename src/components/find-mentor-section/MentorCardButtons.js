import React from 'react';

const MentorCardButtons = (props) => {
  return (
    <button
      onClick={() => {
        props.showModalBtn(true);
      }}
      className={props.classes}
    >
      {props.text} <br /> <span>{props.smtext}</span>
      {props.classes.includes('active') && (
        <span className='check-container'>
          <i className='fas fa-check'></i>
        </span>
      )}
    </button>
  );
};

export default MentorCardButtons;
