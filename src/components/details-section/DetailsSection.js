import React, { useState } from 'react';

const DetailsSection = () => {
  const [Mentors, SetMentors] = useState(0);
  const [Universitites, SetUniversities] = useState(0);
  const [Partners, SetPartners] = useState(0);
  const [Mentees, SetMentees] = useState(0);

  const animateValue = (id, start, end, duration) => {
    if (start === end) return;
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function () {
      current += increment;
      id(current);
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  };

  return (
    <div className='details-section pb-lg-5 pb-3 mt-md-0 mt-4'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row text-center'>
          <div className='col-md-3 col-6 mb-md-0 mb-4'>
            <div className='details-card'>
              <h1 className='mb-0'>{Mentors}</h1>
              <p className='lead'>Mentors onboarded</p>
            </div>
          </div>
          <div className='col-md-3 col-6 mb-md-0 mb-4'>
            <div className='details-card'>
              <h1 className='mb-0'>{Universitites}</h1>
              <p className='lead'>Universities onboarded</p>
            </div>
          </div>
          <div className='col-md-3 col-6'>
            <div className='details-card'>
              <h1 className='mb-0'>{Partners}</h1>
              <p className='lead'>Partnered organisations</p>
            </div>
          </div>
          <div className='col-md-3 col-6'>
            <div className='details-card'>
              <h1 className='mb-0'>{Mentees}</h1>
              <p className='lead'>Current mentees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsSection;
