import React, { useState } from 'react';
import SignUpModal from '../join-mentokart/SignUpModal';
import Modal from 'react-modal';

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([A11y, Autoplay]);

const Showcase = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };
  return (
    <div className='showcase-section'>
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

      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row'>
          <div className='col-md-6 left d-flex flex-column justify-content-center'>
            <h1 className='showcase-heading mb-0'>
              MentorKart
              <sup>
                <h6 className='d-inline'>
                  <sup>TM</sup>
                </h6>
              </sup>
            </h1>
            <p className='showcase-para lead mt-3 mb-4'>
              We handhold you to unlock your true potential to learn and grow
            </p>
            <div className='row showcase-cards'>
              <div className='col-xl-5 col-6'>
                <div
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className='showcase-card one'
                >
                  <div className='showcase-card-top d-flex align-items-center py-md-2 px-md-3 py-1 px-2'>
                    <div>
                      <img src='/images/showcase-card-one.png' alt='' />
                    </div>
                    <div className='ms-2'>
                      <span>Find a</span>
                      <h2>Mentor</h2>
                    </div>
                  </div>
                  <div className='showcase-card-bottom text-center'>
                    Find a mentor
                  </div>
                </div>
              </div>
              <div className='col-xl-5 col-6'>
                <div
                  onClick={() => {
                    setShowModal(true);
                  }}
                  className='showcase-card two'
                >
                  <div className='showcase-card-top d-flex align-items-center py-md-2 px-md-3 py-1 px-2'>
                    <div className=''>
                      <img src='/images/showcase-card-two.png' alt='' />
                    </div>
                    <div className='ms-2'>
                      <span>Ask a</span>
                      <h2>Mentor</h2>
                    </div>
                  </div>
                  <div className='showcase-card-bottom text-center'>
                    Ask a mentor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 right d-md-block d-none'>
            <div className='right-img container'>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ autoplay: true, delay: 10000 }}
                breakpoints={{
                  // when window width is >= 0px
                  0: {
                    slidesPerView: 1,
                  },
                }}
              >
                <SwiperSlide>
                  <img
                    className='fluid-img'
                    src='/images/showcase-right.png'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className='fluid-img'
                    src='/images/showcase-right.png'
                    alt=''
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className='fluid-img'
                    src='/images/showcase-right.png'
                    alt=''
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className='d-md-none d-block py-3 px-5'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ autoplay: true, delay: 10000 }}
              breakpoints={{
                // when window width is >= 0px
                0: {
                  slidesPerView: 1,
                },
              }}
            >
              <SwiperSlide>
                <img
                  className='img-fluid'
                  src='/images/showcase-right.png'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='img-fluid'
                  src='/images/showcase-right.png'
                  alt=''
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className='img-fluid'
                  src='/images/showcase-right.png'
                  alt=''
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;