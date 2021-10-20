import React from 'react';
import MentorCardButtons from './MentorCardButtons';

const MentorCard = () => {
  return (
    <div className=' col-lg-12 mt-4 px-xl-0 px-3 mx-xl-2'>
      <div className='mentor-card px-4 py-4 d-flex align-items-center me-xl-5'>
        <div className='img'>
          <img src='images/mentor-img.png' alt='' />
        </div>
        <div className='ms-lg-4 mentor-card-content ms-3'>
          <h2>Deb thes.</h2>
          <span>Co-Founder</span>
          <hr />
          <div className='row btn-container mb-3'>
            <div className='col-6'>
              <MentorCardButtons
                classes='mentor-card-btn active'
                text='Book a call'
                smtext=''
              />
            </div>
            <div className='col-6'>
              <MentorCardButtons
                classes='mentor-card-btn'
                text='Chat with me'
                smtext=''
              />
            </div>
          </div>
          <div className='row btn-container'>
            <div className='col-6'>
              <MentorCardButtons
                classes='mentor-card-btn'
                text='Mentor Me'
                smtext='(for 3 Months)'
              />
            </div>
            <div className='col-6'>
              <MentorCardButtons
                classes='mentor-card-btn'
                text='Mentor Me'
                smtext='(for 6 Months)'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
