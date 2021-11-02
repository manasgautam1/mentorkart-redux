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
    <nav className='navbar navbar-expand-md navbar-light bg-light'>
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
              <Link className='nav-link' to='/packages'>
                Packages
              </Link>
            </li>
            <li className='nav-item mx-lg-5'>
              <Link className='nav-link' to='/be-a-mentor'>
                Be a Mentor
              </Link>
            </li>
            <li className='nav-item'>
              <Dropdown className='navbar-dropdown'>
                <Dropdown.Toggle
                  variant=''
                  className='heading'
                  id='dropdown-basic'
                >
                  More
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <Link className='nav-link' to='/courses'>
                      Programs
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className='nav-link' to='/'>
                      Videos
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className='nav-link' to='/'>
                      Masterclass
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className='nav-link' to='/as-a-organisation'>
                      As an Organisation
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className='nav-link' to='/as-a-campus'>
                      As a Campus
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className='nav-link' to='/our-blogs'>
                      Blogs
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className='nav-link' to='/'>
                      Become a business associate
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className='nav-link disabled' to='/'>
                      Study Abroad (coming soon)
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link className='nav-link disabled' to='/'>
                      Jobs (coming soon)
                    </Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
          <ul className='navbar-nav-2 navbar-nav mb-2'>
            <div className='row'>
              <div className='col-6'>
                <li className='navbar-btn nav-item'>
                  {user ? (
                    <Link
                      onClick={() => {
                        localStorage.clear();
                        window.location.reload();
                      }}
                      to='#'
                      className='nav-link btn'
                    >
                      Logout
                    </Link>
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
              <div className='col-6'>
                <li className='navbar-btn nav-item'>
                  {user ? (
                    <Link
                      to={{
                        pathname: `http://mentorkart.org/mentorkart?SSO_Mtoken=${user}&domain=https://mentorkart-new-ui.netlify.app`,
                      }}
                      target='_blank'
                      className='nav-link btn'
                    >
                      DashBoard
                    </Link>
                  ) : (
                    <Link
                      onClick={() => showModalBtn(true)}
                      className='nav-link btn'
                      to='#'
                    >
                      Free Trial
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
