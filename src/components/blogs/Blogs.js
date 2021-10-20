import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyNavbar from '../header-section/MyNavbar';
import Footer from '../footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { listBlogs } from '../../redux/actions/blogsActions';

// import Swiper core and required modules
import SwiperCore, { A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([A11y, Autoplay]);

const Blogs = () => {
 
  const dispatch = useDispatch()
  const blogsList = useSelector( state => state.blogsList )
  const { blogs } = blogsList
  

 
  
  useEffect( () =>
  {
    dispatch( listBlogs() )
    window.scroll(0,0)
  },[dispatch])



  return (
    <div className='our-blogs'>
      <MyNavbar />
      <div className='our-blogs-head'>
        <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
          <h1>Our Blogs</h1>
          <form
            action='/search-blogs'
            className='blog-search d-flex justify-content-between align-items-center'
          >
            <div className='form-group'>
              <span>
                <i className='fas fa-search me-2 ms-1'></i>
              </span>
              <input type='text' name='search-text' placeholder='Search Blog' />
            </div>
            <button type='submit' className='btn btn-md-md btn-sm'>
              Search
            </button>
          </form>
          <div className='tags d-flex mt-3 mb-md-5'>
            <span>Popular Tags : </span>
            <ul className='d-flex align-items-center ps-md-2 ps-0 mb-0'>
              <li>
                <Link to='#design'>Design</Link>
              </li>
              <li>
                <Link to='#ui-ux'>UI/UX</Link>
              </li>
              <li>
                <Link to='#development'>Development</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='our-blogs-content'>
        {/* <div id='#design' className='blogs-cards-two container mt-5'>
          <div className='px-3'>
            <h2>Design Articles</h2>
            <div className='d-md-flex justify-content-between align-items-center'>
              <p className=' mb-md-0 mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className='mt-4'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ autoplay: true, delay: 10000 }}
              breakpoints={{
                // when window width is >= 0px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 1000px
                600: {
                  slidesPerView: 2,
                },
                1100: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className='cards'>
                  <img src='/images/blogs-card-two.png' alt='' />
                  <div className='cards-content'>
                    <span className='tag'>Featured</span>
                    <p className='text mt-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore officia
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>John Doe</span>
                      <span>07-11-2021</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='cards'>
                  <img src='/images/blogs-card-two.png' alt='' />
                  <div className='cards-content'>
                    <span className='tag'>Featured</span>
                    <p className='text mt-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore officia
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>John Doe</span>
                      <span>07-11-2021</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='cards'>
                  <img src='/images/blogs-card-two.png' alt='' />
                  <div className='cards-content'>
                    <span className='tag'>Featured</span>
                    <p className='text mt-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore officia
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>John Doe</span>
                      <span>07-11-2021</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div> */}

        {/* <div
          id='#ui-ux'
          className='blogs-cards-two container mt-5 pt-lg-5 mb-5'
        >
          <div className='px-3'>
            <h2>UI/UX Articles</h2>
            <div className='d-md-flex justify-content-between align-items-center'>
              <p className=' mb-md-0 mb-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className='mt-4'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ autoplay: true, delay: 10000 }}
              breakpoints={{
                // when window width is >= 0px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 1000px
                600: {
                  slidesPerView: 2,
                },
                1100: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <div className='cards'>
                  <img src='/images/blogs-card-two.png' alt='' />
                  <div className='cards-content'>
                    <span className='tag'>Featured</span>
                    <p className='text mt-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore officia
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>John Doe</span>
                      <span>07-11-2021</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='cards'>
                  <img src='/images/blogs-card-two.png' alt='' />
                  <div className='cards-content'>
                    <span className='tag'>Featured</span>
                    <p className='text mt-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore officia
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>John Doe</span>
                      <span>07-11-2021</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='cards'>
                  <img src='/images/blogs-card-two.png' alt='' />
                  <div className='cards-content'>
                    <span className='tag'>Featured</span>
                    <p className='text mt-2'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore officia
                    </p>
                    <div className='d-flex justify-content-between align-items-center'>
                      <span>John Doe</span>
                      <span>07-11-2021</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div> */}

        <div
          id='#all'
          className='blogs-cards-one container mt-5 pt-lg-5 pb-lg-5 mb-5'
        >
          {/* <div className='px-3'>
            <h2>All Articles</h2>
            <p className='mb-0'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div> */}

          <div className='mt-4'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{ autoplay: true, delay: 10000 }}
              breakpoints={{
                // when window width is >= 0px
                0: {
                  slidesPerView: 1,
                },
                // when window width is >= 1000px
                500: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
              }}
            >
              { blogs[0] && blogs[0].map((blog, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Link to={'/blog/' + blog.id}>
                      <div className='cards' style={{ height: '400px' }}>
                        <img
                          style={{
                            height: '400px',
                            width: '100%',
                            objectFit: 'cover',
                          }}
                          src={
                            'https://www.test.pinsoutinnovation.com/uploaded-images/' +
                            blog.blog_bg
                          }
                          alt=''
                        />
                        <span className='tag'>{blog.blog_tag}</span>
                        <div className='cards-content'>
                          <div>
                            <p className='text mt-2'>{blog.blog_title}</p>
                            <hr />
                            <div className='d-flex justify-content-between align-items-center'>
                              <span>{blog.blog_author}</span>
                              <span>{blog.blog_date ? blog.blog_date.split("T")[0] : ""}</span>
                              
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
