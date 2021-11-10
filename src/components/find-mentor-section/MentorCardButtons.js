import React from 'react';

const MentorCardButtons = (props) => {
  const loggedIn = JSON.parse(localStorage.getItem('userInfo'));
  return (
    <button
      onClick={() => {
        if (loggedIn === null) {
          props.showModalBtn(true);
        } else {
          window.location = `http://mentorkart.org/mentorkart?SSO_Mtoken=${loggedIn}&domain=https://mentorkart-new-ui.netlify.app`;
        }
      }}
      className={props.classes}
    >
      {props.text} <br /> <span>{props.smtext}</span>
    </button>
  );
};

export default MentorCardButtons;
