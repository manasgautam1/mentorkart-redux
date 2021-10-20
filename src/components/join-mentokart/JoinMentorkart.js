import React, { useState, useEffect } from 'react';
import JoinCard from './JoinCard';
import SignUpModal from './SignUpModal';
import Modal from 'react-modal';
import Axios from 'axios';

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([A11y, Autoplay]);

Modal.setAppElement('#root');

const JoinMentorkart = () => {
  const [showModal, setShowModal] = useState(false);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    Axios.get('https://www.test.pinsoutinnovation.com/ads').then((res) => {
      setAds(res.data);
      // console.log(res.data);
    });
  }, []);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  return (
    <div className='join-mentorkart py-5'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row'>
          <div className='col-md-4 left'>
            <span className='ms-1'>JOIN US</span>
            <h1>Join Mentorkart</h1>
            <p className=''>Numerous solutions await you</p>
            <div className='d-flex py-3'>
              <div className='icon-container text-white d-flex justify-content-center align-items-center px-2'>
                <i className='fas fa-graduation-cap fa-2x'></i>
              </div>
              <p className='sec ms-3'>
                Industry Leaders and experts ready to mentor you for a better
                future ahead
              </p>
            </div>
          </div>
          <div className='col-md-7 offset-md-1 mt-md-0 mt-5'>
            <div className='join-cards'>
              <div className='row'>
                <div className='col-6 one'>
                  <JoinCard
                    as=''
                    title='Individual'
                    url='/images/circle.png'
                    showModalBtn={showModalBtn}
                  />
                </div>
                <div className='col-6 two'>
                  <JoinCard
                    as='/as-a-organisation'
                    title='Organization'
                    url='/images/poly-1.png'
                    showModalBtn={showModalBtn}
                  />
                </div>
              </div>

              <div className='row'>
                <div className='col-6 offset-3 three'>
                  <JoinCard
                    as='/as-a-campus'
                    title='Campus'
                    url='/images/dots-1.png'
                    showModalBtn={showModalBtn}
                  />
                </div>
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

        <div className='ad-cards mt-5 pt-4 align-items-center text-center'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ autoplay: true, delay: 10000 }}
            breakpoints={{
              // when window width is >= 0px
              0: {
                slidesPerView: 1,
                spaceBetween: 100,
              },
              // when window width is >= 1000px
              600: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 3,
              },
            }}
          >
            {ads.map((ad, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className='ad-card'>
                    <h3>Advertisement</h3>
                    <a
                      target='_blank'
                      rel='noreferrer'
                      href={'https://' + ad.ads_url}
                    >
                      <img
                        src={
                          'https://www.test.pinsoutinnovation.com/uploaded-images/' +
                          ad.ads_img
                        }
                        alt=''
                      />
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default JoinMentorkart;
