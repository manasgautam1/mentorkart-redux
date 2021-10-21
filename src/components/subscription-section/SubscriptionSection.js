import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSubscribe } from '../../redux/actions/subscribeActions';
import Modal from 'react-modal';
import SignUpModal from '../join-mentokart/SignUpModal';
import ReactHtmlParser from 'react-html-parser';

// import Swiper core and required modules
import SwiperCore, { Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const SubscriptionSection = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const subscribeList = useSelector((state) => state.subscribeList);
  const { subscribe } = subscribeList;

  useEffect(() => {
    dispatch(listSubscribe());
  }, [dispatch]);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  return (
    <div className='subscription-section mt-md-5 mt-3 pt-5'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <div className='row text-center'>
          <span>PRICING</span>
          <h1>Subscription Plans</h1>
        </div>
        <div className='mt-3 align-items-center'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ autoplay: true, delay: 20000 }}
            breakpoints={{
              // when window width is >= 0px
              0: {
                slidesPerView: 1,
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
            {subscribe[0] &&
              subscribe[0].data &&
              subscribe[0].data.plans.map((plan, index) => {
                console.log(plan);
                return (
                  <SwiperSlide key={index}>
                    <div
                      className={
                        (index + 2) % 2 === 0 ? 'subs-card' : 'subs-card-alt'
                      }
                    >
                      <div className='card'>
                        <span className='category'>{plan.category}</span>
                        <div className='card-body'>
                          <h6 className='name text-uppercase'>{plan.name}</h6>
                          <h1 className='price'>
                            ₹ {plan.price}/{plan.interval}
                          </h1>
                          <hr />
                          <p className='description'>
                            {ReactHtmlParser(plan.description)}
                          </p>
                          <hr />
                          <button
                            onClick={() => showModalBtn(true)}
                            className='btn btn-sm'
                          >
                            Subscribe Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
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

export default SubscriptionSection;
