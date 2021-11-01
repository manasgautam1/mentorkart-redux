import React, { useState } from 'react';
import MentorCardButtons from './MentorCardButtons';
import { Link } from 'react-router-dom';

import SignUpModal from '../join-mentokart/SignUpModal';
import Modal from 'react-modal';

const MentorCard = ({
  id,
  img,
  name,
  categories,
  charges,
  position,
  designation,
  about,
}) => {
  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  const url_name = name.toLowerCase().split(' ').join('-');
  return (
    <div className=' col-lg-12 mt-4 px-xl-0 px-3 mx-xl-2'>
      <div className='mentor-card p-3 d-sm-flex align-items-center me-xl-5'>
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
          <div className='category-tags mt-2'>
            {categories.split(',').map((cate, index) => {
              return (
                <span key={index} className='btn btn-sm me-2'>
                  {cate}
                </span>
              );
            })}
          </div>
        </div>
        <div className='ms-lg-4 mentor-card-content ms-3'>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <h2 className='mt-0 mb-0'>{name}</h2>
              <span className='text-left my-0'>
                {position ? position : 'NULL'}
              </span>
            </div>
            <h6 className='mb-0 price'>
              Rs {charges} <br /> <span>(per session)</span>
            </h6>
          </div>
          <p className='about'>
            {about ? about.substring(0, 40) : 'NULL'}{' '}
            <Link to={`/mentor-profile/${url_name}/${id}`} className=''>
              <span className='view-profile'>view more</span>
            </Link>
          </p>
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
                text='Book a free session'
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

export default MentorCard;
