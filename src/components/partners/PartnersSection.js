import React, { useEffect } from 'react';
import Partners from './Partners';


// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import { listpartner } from '../../redux/actions/partnerActions'
import {useDispatch,useSelector} from 'react-redux'

// install Swiper modules
SwiperCore.use([A11y, Autoplay]);

const PartnersSection = () =>
{
  const dispatch = useDispatch()
  const partnerList = useSelector( state => state.partnerList )
  const { partner } = partnerList
  

  useEffect( () =>
  {
    dispatch(listpartner())
  }, [ dispatch ] )
  

  

  return (
    <div className='partners mt-md-5 mt-2 mb-4 pt-3'>
      <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
        <h1>Our Partners</h1>
        <div className='partners-images pt-3'>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{ autoplay: true, delay: 10000 }}
            breakpoints={{
              // when window width is >= 0px
              0: {
                slidesPerView: 3,
              },
              // when window width is >= 1000px
              600: {
                slidesPerView: 5,
              },
              900: {
                slidesPerView: 7,
              },
            }}
          >
            {partner[0]&&partner[0].map((x, index) => {
              return (
                <SwiperSlide key={index}>
                  <Partners url={x.partners_img} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
