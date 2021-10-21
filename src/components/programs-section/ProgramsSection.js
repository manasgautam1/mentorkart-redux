import React from 'react';
import { Link } from 'react-router-dom';
import ProgramCard from './ProgramCard';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const ProgramsSection = () => {
  return (
    <div className='programs py-5'>
      <img className='oval-1' src='/images/oval-1.png' alt='' />
      <img className='oval-2' src='/images/oval-2.png' alt='' />
      <img className='plant' src='/images/plant.png' alt='' />
      <img className='lamp' src='/images/lamp.png' alt='' />
      <img className='poly-2' src='/images/poly-2.png' alt='' />
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row align-items-center'>
          <div className='col-lg-4 col-md-5 left'>
            <h1>Programs & Courses</h1>
            <p>Learn from the best</p>
            <Link to='/courses' className='btn btn-outline-primary'>
              Explore More
            </Link>
          </div>
          <div className='col-lg-8 col-md-7'>
            <div className='programs-cards mt-md-5 mb-md-4 pt-4'>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ autoplay: true, delay: 10000 }}
                breakpoints={{
                  // when window width is >= 0px
                  0: {
                    slidesPerView: 1,
                  },
                  // when window width is >= 1000px
                  800: {
                    slidesPerView: 1.25,
                  },
                  1100: {
                    slidesPerView: 1.5,
                  },
                }}
              >
                <SwiperSlide>
                  <ProgramCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ProgramCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ProgramCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;