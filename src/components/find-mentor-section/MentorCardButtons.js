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
    </button>
  );
};

export default MentorCardButtons;
