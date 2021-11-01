import React from 'react';

const detailsSection = () => {
  return (
    <div className='details-section pb-lg-5 pb-3 mt-md-0 mt-4'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row text-center'>
          <div className='col-md-3 col-6 mb-md-0 mb-4'>
            <div className='details-card'>
              <h1 className='mb-0'>200+</h1>
              <p className='lead'>Mentors onboarded</p>
            </div>
          </div>
          <div className='col-md-3 col-6 mb-md-0 mb-4'>
            <div className='details-card'>
              <h1 className='mb-0'>20+</h1>
              <p className='lead'>Universities onboarded</p>
            </div>
          </div>
          <div className='col-md-3 col-6'>
            <div className='details-card'>
              <h1 className='mb-0'>10+</h1>
              <p className='lead'>Partnered organisations</p>
            </div>
          </div>
          <div className='col-md-3 col-6'>
            <div className='details-card'>
              <h1 className='mb-0'>10000+</h1>
              <p className='lead'>Current mentees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default detailsSection;
