import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import MyNavbar from '../header-section/MyNavbar';

import Modal from 'react-modal';
import Axios from 'axios';

import SignUpModal from '../join-mentokart/SignUpModal';

const Courses = () => {
  const [showModal, setShowModal] = useState(false);
  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  const [allCourses, SetAllCourses] = useState([]);
  const [professionalsCourses, SetProfessionalsCourses] = useState([]);
  const [studentsCourses, SetStudentsCourses] = useState([]);
  const [entrepreneursCourses, SetentrepreneursCourses] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get('https://mentorkart.org/api/sso-courses').then((res, err) => {
      if (!err) {
        console.log(res.data.data);
        SetAllCourses(res.data.data);
        SetStudentsCourses(
          res.data.data.filter((x) => {
            return x.user_category.split(',').includes('STUDENT');
          })
        );
        SetProfessionalsCourses(
          res.data.data.filter((x) => {
            return x.user_category.split(',').includes('PROFESSIONAL');
          })
        );
        SetentrepreneursCourses(
          res.data.data.filter((x) => {
            return x.user_category.split(',').includes('ENTREPRENEUR');
          })
        );
      }
    });
  }, []);

  const [allFilter, SetAllFilter] = useState(1);
  const [studentsFilter, SetStudentsFilter] = useState(null);
  const [professionalsFilter, SetProfessionalsFilter] = useState(null);
  const [entrepreneursFilter, SetentrepreneursFilter] = useState(null);

  const [myClass, SetMyClass] = useState('show');
  const [myClass1, SetMyClass1] = useState('');
  const [myClass2, SetMyClass2] = useState('');
  const [myClass3, SetMyClass3] = useState('');

  const toggleStudents = () => {
    if (studentsFilter === null) {
      SetStudentsFilter(1);
      SetMyClass1('show');
      SetentrepreneursFilter(null);
      SetProfessionalsFilter(null);
      SetMyClass2('');
      SetMyClass3('');
      SetMyClass('');
      SetAllFilter(null);
    } else {
      SetStudentsFilter(null);
      SetMyClass1('');
      SetAllFilter(1);
    }
  };

  const toggleProfessionals = () => {
    if (professionalsFilter === null) {
      SetProfessionalsFilter(1);
      SetMyClass2('show');
      SetentrepreneursFilter(null);
      SetAllFilter(null);
      SetMyClass1('');
      SetMyClass3('');
      SetMyClass('');
      SetStudentsFilter(null);
    } else {
      SetProfessionalsFilter(null);
      SetMyClass2('');
      SetAllFilter(1);
    }
  };

  const toggleentrepreneurs = () => {
    if (entrepreneursFilter === null) {
      SetentrepreneursFilter(1);
      SetMyClass3('show');
      SetProfessionalsFilter(null);
      SetAllFilter(null);
      SetStudentsFilter(null);
      SetMyClass1('');
      SetMyClass2('');
      SetMyClass('');
    } else {
      SetentrepreneursFilter(null);
      SetMyClass3('');
      SetAllFilter(1);
    }
  };
  const clearFilters = () => {
    if (allFilter === null) {
      SetAllFilter(1);
      SetMyClass('show');
      SetProfessionalsFilter(null);
      SetAllFilter(null);
      SetStudentsFilter(null);
      SetMyClass1('');
      SetMyClass2('');
      SetMyClass3('');
    } else {
      SetAllFilter(null);
      SetMyClass('');
      SetAllFilter(1);
    }
  };

  return (
    <div className='courses'>
      <MyNavbar />
      <div className='courses-head'>
        <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
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
                <button
                  className={myClass + ' btn'}
                  onClick={() => clearFilters()}
                >
                  All
                </button>
              </li>
              <li>
                <button
                  className={myClass1 + ' btn'}
                  onClick={() => toggleStudents()}
                >
                  Student
                </button>
              </li>
              <li>
                <button
                  className={myClass2 + ' btn'}
                  onClick={() => toggleProfessionals()}
                >
                  Professional
                </button>
              </li>
              <li>
                <button
                  className={myClass3 + ' btn'}
                  onClick={() => toggleentrepreneurs()}
                >
                  Entrepreneur
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='courses-content'>
        {allFilter && (
          <div
            id='#all'
            className='blogs-cards-two container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'
          >
            <div className='row'>
              {allCourses.map((course, index) => {
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
                              style={{
                                objectFit: 'cover',
                                objectPosition: 'top',
                              }}
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
                                    <span
                                      key={index}
                                      className='btn btn-sm me-2'
                                    >
                                      {cate}
                                    </span>
                                  );
                                })}
                          </div>
                        </div>
                        <div className='p-3'>
                          <div className='d-flex justify-content-between align-items-center'>
                            <div>
                              <h2 className='mt-0 mb-0'>
                                {course.mk_course_name}
                              </h2>
                            </div>
                            <h6 className='mb-0'>₹ {course.price} /-</h6>
                          </div>
                          <p className='mb-2'>{course.description}</p>
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
        )}
        {studentsFilter && (
          <div
            id='#students'
            className='blogs-cards-two container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'
          >
            <div className='row'>
              {studentsCourses.map((course, index) => {
                return (
                  <div className='col-lg-4 col-md-6 col-12' key={index}>
                    <div className='cards'>
                      <div className='program-card py-3 px-4'>
                        <div className='align-items-center'>
                          <div className=''>
                            <img
                              src={
                                'https://mentorkart-admin-staging.s3.amazonaws.com/' +
                                course.icon_url
                              }
                              alt=''
                            />
                          </div>
                          <div className=''>
                            <div className='category-tags mb-md-3 mb-2'>
                              {course.user_category
                                .split(',')
                                .map((cate, index) => {
                                  return (
                                    <span
                                      key={index}
                                      className='btn btn-sm me-2'
                                    >
                                      {cate}
                                    </span>
                                  );
                                })}
                            </div>
                            <h2>{course.mk_course_name}</h2>
                            <h1>₹ {course.price} /-</h1>
                            <p className='mb-2'>{course.description}</p>
                            <button
                              onClick={() => {
                                setShowModal(true);
                              }}
                              className='enroll-btn btn px-xl-5 px-md-3 px-3 py-md-1 btn-ani'
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
        )}
        {professionalsFilter && (
          <div
            id='#professionals'
            className='blogs-cards-two container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'
          >
            <div className='row'>
              {professionalsCourses.map((course, index) => {
                return (
                  <div className='col-lg-4 col-md-6 col-12' key={index}>
                    <div className='cards'>
                      <div className='program-card py-3 px-4'>
                        <div className='align-items-center'>
                          <div className=''>
                            <img
                              src={
                                'https://mentorkart-admin-staging.s3.amazonaws.com/' +
                                course.icon_url
                              }
                              alt=''
                            />
                          </div>
                          <div className=''>
                            <div className='category-tags mb-md-3 mb-2'>
                              {course.user_category
                                .split(',')
                                .map((cate, index) => {
                                  return (
                                    <span
                                      key={index}
                                      className='btn btn-sm me-2'
                                    >
                                      {cate}
                                    </span>
                                  );
                                })}
                            </div>
                            <h2>{course.mk_course_name}</h2>
                            <h1>₹ {course.price} /-</h1>
                            <p className='mb-2'>{course.description}</p>
                            <button
                              onClick={() => {
                                setShowModal(true);
                              }}
                              className='enroll-btn btn px-xl-5 px-md-3 px-3 py-md-1 btn-ani'
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
        )}

        {entrepreneursFilter && (
          <div
            id='#professionals'
            className='blogs-cards-two container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'
          >
            <div className='row'>
              {entrepreneursCourses.map((course, index) => {
                return (
                  <div className='col-lg-4 col-md-6 col-12' key={index}>
                    <div className='cards'>
                      <div className='program-card py-3 px-4'>
                        <div className='align-items-center'>
                          <div className=''>
                            <img
                              src={
                                'https://mentorkart-admin-staging.s3.amazonaws.com/' +
                                course.icon_url
                              }
                              alt=''
                            />
                          </div>
                          <div className=''>
                            <div className='category-tags mb-md-3 mb-2'>
                              {course.user_category
                                .split(',')
                                .map((cate, index) => {
                                  return (
                                    <span
                                      key={index}
                                      className='btn btn-sm me-2'
                                    >
                                      {cate}
                                    </span>
                                  );
                                })}
                            </div>
                            <h2>{course.mk_course_name}</h2>
                            <h1>₹ {course.price} /-</h1>
                            <p className='mb-2'>{course.description}</p>
                            <button
                              onClick={() => {
                                setShowModal(true);
                              }}
                              className='enroll-btn btn px-xl-5 px-md-3 px-3 py-md-1 btn-ani'
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
        )}
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
