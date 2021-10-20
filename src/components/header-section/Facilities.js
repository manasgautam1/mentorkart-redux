import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Modal from 'react-modal';
import SignUpModal from '../join-mentokart/SignUpModal';

Modal.setAppElement('#root');

const Facilities = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };
  return (
    <div className='facilities-section bg-white pt-lg-3'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row text-center py-sm-3 pt-4 pb-3'>
          <div
            onClick={() => showModalBtn(true)}
            className='col-md-2 col-4 mb-2 facility-card'
          >
            <div className='facility-img-container'>
              <img className='' src='/images/icon1.png' alt='' />
            </div>
            <div>
              <p className='facility-text mt-2'>
                Jobs <br /> (Coming soon)
              </p>
            </div>
          </div>
          <Link to='/all-mentors' className='col-md-2 col-4 mb-2 facility-card'>
            <div className='facility-img-container'>
              <img className='' src='/images/icon2.png' alt='' />
            </div>
            <div>
              <p className='facility-text mt-2'>
                Schedule Calls <br /> with Mentors
              </p>
            </div>
          </Link>
          <div
            onClick={() => showModalBtn(true)}
            className='col-md-2 col-4 mb-2 facility-card'
          >
            <div className='facility-img-container'>
              <img className='' src='/images/icon3.png' alt='' />
            </div>
            <div>
              <p className='facility-text mt-2'>
                1:1 Mentorship <br /> Packages
              </p>
            </div>
          </div>
          <div
            onClick={() => showModalBtn(true)}
            className='col-md-2 col-4 mb-2 facility-card'
          >
            <div className='facility-img-container'>
              <img className='' src='/images/icon4.png' alt='' />
            </div>
            <div>
              <p className='facility-text mt-2'>
                Dtawk (Group <br /> Chat with Mentors)
              </p>
            </div>
          </div>
          <div
            onClick={() => showModalBtn(true)}
            className='col-md-2 col-4 mb-2 facility-card'
          >
            <div className='facility-img-container'>
              <img className='' src='/images/icon5.png' alt='' />
            </div>
            <div>
              <p className='facility-text mt-2'>Masterclasses</p>
            </div>
          </div>
          <Link to='/courses' className='col-md-2 col-4 mb-2 facility-card'>
            <div className='facility-img-container'>
              <img className='' src='/images/icon6.png' alt='' />
            </div>
            <div>
              <p className='facility-text mt-2'>Programs</p>
            </div>
          </Link>
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
        <SignUpModal showModalBtn={showModalBtn} />
      </Modal>
    </div>
  );
};

export default Facilities;
