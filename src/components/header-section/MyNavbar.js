import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';
import SignInModal from './SignInModal';

Modal.setAppElement('#root');

const MyNavbar = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };
  return (
    <nav className='navbar py-lg-0 py-md-2 py-2 navbar-expand-md navbar-light bg-light'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 align-items-center'>
        <Link className='navbar-brand' to='/'>
          <div className='brand-img-container'>
            <img className='img-fluid' src='/images/brand-img.png' alt='' />
          </div>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mx-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link className='nav-link' to='/courses'>
                Programs
              </Link>
            </li>
            <li className='nav-item mx-lg-5'>
              <Link className='nav-link' to='/be-a-mentor'>
                Be a Mentor
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                onClick={() => showModalBtn(true)}
                className='nav-link'
                to='#'
              >
                Login
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav mb-2 mb-lg-0 d-md-flex d-none'>
            <li className='nav-item'>
              <a
                className='nav-link social-nav-link'
                rel='noreferrer'
                target='_blank'
                href='https://www.facebook.com/mentorkart/'
              >
                <i className='fab fa-facebook'></i>
              </a>
            </li>
            <li className='nav-item mx-lg-4'>
              <a
                className='nav-link social-nav-link'
                rel='noreferrer'
                target='_blank'
                href='https://twitter.com/mentor_kart'
              >
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link social-nav-link'
                rel='noreferrer'
                target='_blank'
                href='https://www.linkedin.com/company/mentorkart/'
              >
                <i className='fab fa-linkedin social-icons'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Modal
        id='signup-modal'
        isOpen={showModal}
        onRequestClose={() => setShowModal(false)}
        style={{
          overlay: {
            zIndex: '5000',
          },
          content: {
            maxWidth: '1100px',
            margin: 'auto',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '15px',
          },
        }}
      >
        <SignInModal showModalBtn={showModalBtn} />
      </Modal>
    </nav>
  );
};

export default MyNavbar;
