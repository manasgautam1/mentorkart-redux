import React, { useState } from 'react';
import SignUpModal from '../join-mentokart/SignUpModal';
import Modal from 'react-modal';

const ProgramCard = ({ data }) => {
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
          <div className='col-6 ps-lg-4'>
            <h2>{data.mk_course_name}</h2>
            <h1>₹ {data.price} /-</h1>
            <p className='mb-md-3 mb-2'>{data.description}</p>
            <button
              onClick={() => {
                setShowModal(true);
              }}
              className='enroll-btn btn px-xl-5 px-md-3 px-3 py-md-1 btn-ani'
            >
              Enroll Now
            </button>
          </div>
          <div className='col-6'>
            <div className='img'>
              {data.icon_url === null ? (
                <img src='/images/user.png' alt='' />
              ) : (
                <img
                  src={
                    'https://mentorkart-admin-staging.s3.amazonaws.com/' +
                    data.icon_url
                  }
                  style={{
                    borderRadius: '10px',
                  }}
                  alt=''
                />
              )}
              <div className='category-tags mt-2'>
                {data.user_category.split(',').map((cate, index) => {
                  return (
                    <span key={index} className='btn btn-sm me-2'>
                      {cate}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
