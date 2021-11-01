import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import MyNavbar from '../header-section/MyNavbar';
import { useDispatch, useSelector } from 'react-redux';
import {
  listProgram,
  listStudentCourse,
  listProfessionalCourse,
  listEntrepreneurCourse,
} from '../../redux/actions/programActions';

import Modal from 'react-modal';

import SignUpModal from '../join-mentokart/SignUpModal';

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  const dispatch = useDispatch();
  const programList = useSelector((state) => state.programList);
  const { program } = programList;

  const [sort, setSort] = useState('');

  const handleCLick = (value) => () => {
    setSort(value);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(listProgram());
    if (sort === 'student') {
      dispatch(listStudentCourse());
    }
    if (sort === 'professional') {
      dispatch(listProfessionalCourse());
    }
    if (sort === 'entrepreneur') {
      dispatch(listEntrepreneurCourse());
    }
  }, [dispatch, sort]);

  return (
    <div className='courses'>
      <MyNavbar />
      <div className='courses-head'>
        <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-4 py-3'>
          <h1>Programs and courses</h1>
          <form
            action='/search-blogs'
            className='courses-search d-flex justify-content-between align-items-center'
          >
            <div className='form-group'>
              <span>
                <i className='fas fa-search me-2 ms-1'></i>
              </span>
              <input
                type='text'
                name='search-text'
                placeholder='Search Course'
              />
            </div>
          </form>
          <div className='tags d-flex mt-3 justify-content-center'>
            <ul className='d-flex flex-wrap'>
              <li>
                <button className='btn' onClick={handleCLick('')}>
                  All
                </button>
              </li>
              <li>
                <button className='btn' onClick={handleCLick('student')}>
                  Student
                </button>
              </li>
              <li>
                <button className='btn' onClick={handleCLick('professional')}>
                  Professional
                </button>
              </li>
              <li>
                <button className='btn' onClick={handleCLick('entrepreneur')}>
                  Entrepreneur
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='courses-content'>
        <div id='#all' className='blogs-cards-two container py-5'>
          <div className='row'>
            {program.map((course, index) => {
              return (
                <div
                  className='col-lg-4 col-md-6 col-12 px-lg-3 px-sm-2 px-3 mb-5'
                  key={index}
                >
                  <div className='cards'>
                    <div className='program-card p-2'>
                      <div className='img'>
                        {course.icon_url === null ? (
                          <img src='/images/user.png' alt='' />
                        ) : (
                          <img
                            src={
                              'https://mentorkart-admin-staging.s3.amazonaws.com/' +
                              course.icon_url
                            }
                            alt=''
                          />
                        )}
                        <div className='category-tags mt-2'>
                          {course.user_category &&
                            course.user_category
                              .split(',')
                              .map((cate, index) => {
                                return (
                                  <span key={index} className='btn btn-sm me-2'>
                                    {cate}
                                  </span>
                                );
                              })}
                        </div>
                      </div>
                      <div className='p-3'>
                        <div className='d-flex justify-content-between align-items-center'>
                          <div>
                            <h2 className='mt-0 mb-0 pe-3'>
                              {course.mk_course_name}
                            </h2>
                          </div>
                          <h6 className='mb-0'>₹ {course.price} /-</h6>
                        </div>
                        <p className='mt-2 mb-3'>{course.description}</p>
                        <div className='row'>
                          <button
                            onClick={() => {
                              setShowModal(true);
                            }}
                            className='enroll-btn btn btn-ani'
                          >
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
      <Footer />
    </div>
  );
};
export default Courses;
