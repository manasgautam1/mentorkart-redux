import React, { useState, useEffect } from 'react';
import SignUpModal from '../join-mentokart/SignUpModal';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { listWebsiteContent } from '../../redux/actions/websiteContentActions';

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([A11y, Autoplay]);

const Showcase = () => {
  const dispatch = useDispatch();
  const websiteContentList = useSelector((state) => state.websiteContentList);
  const { websiteContent, loading } = websiteContentList;

  useEffect(() => {
    dispatch(listWebsiteContent());
  }, [dispatch]);

  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };
  // console.log(websiteContent);
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
              {websiteContent[0]?.data[0]?.field_data}
              <sup>
                <h6 className='d-inline'>
                  <sup>R</sup>
                </h6>
              </sup>
            </h1>
            <p className='showcase-para lead mt-3 mb-4'>
              {websiteContent[0]?.data[1]?.field_data}
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
                  <Link
                    to={{
                      pathname: 'https://app.mentorkart.com',
                    }}
                    target='_blank'
                  >
                    <img
                      className='fluid-img'
                      src='/images/showcase-right.png'
                      alt=''
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    to={{
                      pathname: 'https://app.mentorkart.com',
                    }}
                    target='_blank'
                  >
                    <img
                      className='fluid-img'
                      src='/images/showcase-right.png'
                      alt=''
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide>
                  <Link
                    to={{
                      pathname: 'https://app.mentorkart.com',
                    }}
                    target='_blank'
                  >
                    <img
                      className='fluid-img'
                      src='/images/showcase-right.png'
                      alt=''
                    />
                  </Link>
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
                <Link
                  to={{
                    pathname: 'https://app.mentorkart.com',
                  }}
                  target='_blank'
                >
                  <img
                    className='img-fluid'
                    src='/images/showcase-right.png'
                    alt=''
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  to={{
                    pathname: 'https://app.mentorkart.com',
                  }}
                  target='_blank'
                >
                  <img
                    className='img-fluid'
                    src='/images/showcase-right.png'
                    alt=''
                  />
                </Link>
              </SwiperSlide>
              <SwiperSlide>
                <Link
                  to={{
                    pathname: 'https://app.mentorkart.com',
                  }}
                  target='_blank'
                >
                  <img
                    className='img-fluid'
                    src='/images/showcase-right.png'
                    alt=''
                  />
                </Link>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className='showcase-links d-xxl-block d-none'>
        <ul className='navbar-nav d-flex flex-column justify-content-center align-items-center'>
          <li className='nav-item'>
            <a
              className='nav-link social-nav-link'
              rel='noreferrer'
              target='_blank'
              href='https://www.facebook.com/mentorkart/'
            >
              <i className='fab fa-facebook'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link social-nav-link'
              rel='noreferrer'
              target='_blank'
              href='https://twitter.com/mentor_kart'
            >
              <i className='fab fa-twitter'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link social-nav-link'
              rel='noreferrer'
              target='_blank'
              href='https://www.linkedin.com/company/mentorkart/'
            >
              <i className='fab fa-linkedin social-icons'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link social-nav-link'
              rel='noreferrer'
              target='_blank'
              href='https://www.youtube.com/channel/UCI3bjjLPNzth2RrSyQo8acw'
            >
              <i className='fab fa-youtube social-icons'></i>
            </a>
          </li>
          <li className='nav-item'>
            <a
              className='nav-link social-nav-link'
              rel='noreferrer'
              target='_blank'
              href=''
            >
              <i className='fab fa-instagram social-icons'></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Showcase;
