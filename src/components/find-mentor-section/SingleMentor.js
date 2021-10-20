import React, { useState } from 'react';
import MentorCardButtons from './MentorCardButtons';
import { Link } from 'react-router-dom';


import SignUpModal from '../join-mentokart/SignUpModal';
import Modal from 'react-modal';

const SingleMentorCard = ({ id, img, name, categories, charges }) => {
  const [showModal, setShowModal] = useState(false);  

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  let cate = [];
  if (categories) {
    cate = categories.split(',').join(' | ');
  }

  return (
    <div className=' col-lg-12 mt-4 px-xl-0 px-3 mx-xl-2'>
      <div className='mentor-card px-4 py-4 d-flex align-items-center me-xl-5'>
        <div className='img'>
          {img === null ? (
            <img src='/images/user.png' alt='' />
          ) : (
            <img
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              src={'https://mentorkart-admin-staging.s3.amazonaws.com/' + img}
              alt=''
            />
          )}
        </div>
        <div className='ms-lg-4 mentor-card-content ms-3'>
          <h2 className='mt-0 mb-2'>{name}</h2>
          <h6 className='mb-1'>Mentoring Fees : Rs {charges} /-</h6>
          <div className=''>
            <span className='text-uppercase'>For : {cate}</span>
            <br />
            <Link to={'/mentor-profile/' + id} className='ms-2'>
              <span className='view-profile'>(View Profile)</span>
            </Link>
          </div>
          {/* <Link
            to={'/mentor-profile/' + id}
            className='btn-sm btn-outline-secondary text-sm rounded-pill px-3 d-md-none d-block mt-1 mb-3'
          >
            <small>View Profile</small>
          </Link> */}
          <hr />
          <div className='row btn-container mb-3'>
            <div className='col-6'>
              <MentorCardButtons
                showModalBtn={showModalBtn}
                classes='mentor-card-btn active'
                text='Book a call'
                smtext=''
              />
            </div>
            <div className='col-6'>
              <MentorCardButtons
                showModalBtn={showModalBtn}
                classes='mentor-card-btn'
                text='Chat with me'
                smtext=''
              />
            </div>
          </div>
          <div className='row btn-container'>
            <div className='col-6'>
              <MentorCardButtons
                showModalBtn={showModalBtn}
                classes='mentor-card-btn'
                text='Mentor Me'
                smtext='(for 3 Months)'
              />
            </div>
            <div className='col-6'>
              <MentorCardButtons
                showModalBtn={showModalBtn}
                classes='mentor-card-btn'
                text='Mentor Me'
                smtext='(for 6 Months)'
              />
            </div>
          </div>
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

export default SingleMentorCard;
