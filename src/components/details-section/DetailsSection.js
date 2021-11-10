import React, { useState } from 'react';
import CountUp from 'react-countup';

const DetailsSection = () => {
  return (
    <div
      id='details-section'
      className='details-section pb-lg-5 pb-3 mt-md-0 mt-4'
    >
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row text-center'>
          <div className='col-md-3 col-6 mb-md-0 mb-4'>
            <div className='details-card'>
              <h1 className='mb-0'>
                <CountUp start={0} end={200} duration={5} delay={5}></CountUp>
              </h1>
              <p className='lead'>Mentors onboarded</p>
            </div>
          </div>
          <div className='col-md-3 col-6 mb-md-0 mb-4'>
            <div className='details-card'>
              <h1 className='mb-0'>
                <CountUp start={0} end={20} duration={5} delay={5}></CountUp>
              </h1>
              <p className='lead'>Universities onboarded</p>
            </div>
          </div>
          <div className='col-md-3 col-6'>
            <div className='details-card'>
              <h1 className='mb-0'>
                <CountUp start={0} end={100} duration={5} delay={5}></CountUp>
              </h1>
              <p className='lead'>Partnered organisations</p>
            </div>
          </div>
          <div className='col-md-3 col-6'>
            <div className='details-card'>
              <h1 className='mb-0'>
                <CountUp start={0} end={10000} duration={5} delay={5}></CountUp>
              </h1>
              <p className='lead'>Current mentees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
