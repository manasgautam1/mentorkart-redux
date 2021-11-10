import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Modal from 'react-modal';
import SignInModal from './SignInModal';
Modal.setAppElement('#root');

const MyNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const user = JSON.parse(localStorage.getItem('userInfo'));

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
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
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item me-3'>
              <Link className='nav-link' to='/all-mentors'>
                Find a Mentor
              </Link>
            </li>
            <li className='nav-item me-3'>
              <Link className='nav-link' to='/be-a-mentor'>
                Be a Mentor
              </Link>
            </li>
            <li className='nav-item me-3'>
              <Link className='nav-link' to='/courses'>
                Programs & Courses
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/packages'>
                Mentorship Packages
              </Link>
            </li>
          </ul>
          <ul className='navbar-nav-2 navbar-nav mb-2 ms-auto'>
            <div className='row'>
              <div className=''>
                <li className='navbar-btn nav-item'>
                  {user ? (
                    <div className='row no-gutters'>
                      <div className='col-6'>
                        <Link
                          to={{
                            pathname: `http://mentorkart.org/mentorkart?SSO_Mtoken=${user}&domain=https://mentorkart-new-ui.netlify.app`,
                          }}
                          target='_blank'
                          className='nav-link btn'
                        >
                          Dashboard
                        </Link>
                      </div>
                      <div className='col-6'>
                        <Link
                          to='#'
                          onClick={() => {
                            localStorage.setItem('userInfo', null);
                            window.location.reload();
                          }}
                          className='nav-link btn'
                        >
                          Logout
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <Link
                      onClick={() => showModalBtn(true)}
                      className='nav-link btn'
                      to='#'
                    >
                      Login
                    </Link>
                  )}
                </li>
              </div>
            </div>
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
