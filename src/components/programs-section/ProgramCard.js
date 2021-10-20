import React, { useState } from 'react';
import SignUpModal from '../join-mentokart/SignUpModal';
import Modal from 'react-modal';

const ProgramCard = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  return (
    <div>
      <div className='program-card py-3 px-4'>
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

        <div className='row align-items-center'>
          <div className='col-7 ps-lg-4'>
            <h2>Student Enterpreneurship Program</h2>
            <h1>₹ 2799* /-</h1>
            <p className='mb-md-3 mb-2'>
              *Get 30% Off (Use Coupon Code “FIRST”)
            </p>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className='enroll-btn btn px-xl-5 px-md-3 px-3 py-md-1 btn-ani'
            >
              Enroll Now
            </button>
          </div>
          <div className='col-5'>
            <img src='/images/programs-bg.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
