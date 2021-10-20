import React from 'react';
import TestimonialCard from './TestimonialCard';

const Testimonials = () => {
  return (
    <div className='testimonials-section py-5'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row align-items-center order-md-first order-last '>
          <div className='col-md-6 left mb-md-0 mb-5'>
            <div className='testimonial-cards'>
              <TestimonialCard />
            </div>
          </div>
          <div className='col-md-5 offset-md-1 right mb-md-0 mb-5 order-md-last order-first'>
            <span>TESTIMONIALS</span>
            <h1>What Mentee's Say</h1>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black.
            </p>
            <p className='sec'>
              By the same illusion which lifts the horizon of the sea to the
              level of the spectator on a hillside, the sable cloud beneath was
              dished out, and the car seemed to float in the middle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
