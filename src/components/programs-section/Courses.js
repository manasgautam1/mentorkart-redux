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
  const [enterpreneursCourses, SetEnterpreneursCourses] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get('https://mentorkart.org/api/sso-courses').then((res, err) => {
      if (!err) {
        // console.log(res.data.data);
        SetAllCourses(res.data.data);
        SetStudentsCourses(
          res.data.data.filter((x) => {
            // console.log(typeof x.user_category);
            return x.user_category.split(',').includes('STUDENT');
          })
        );
        SetProfessionalsCourses(
          res.data.data.filter((x) => {
            return x.user_category.split(',').includes('PROFESSIONAL');
          })
        );
        SetEnterpreneursCourses(
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
  const [enterpreneursFilter, SetEnterpreneursFilter] = useState(null);

  const [myClass1, SetMyClass1] = useState('');
  const [myClass2, SetMyClass2] = useState('');
  const [myClass3, SetMyClass3] = useState('');

  const toggleStudents = () => {
    if (studentsFilter === null) {
      SetStudentsFilter(1);
      SetMyClass1('show');
      SetEnterpreneursFilter(null);
      SetProfessionalsFilter(null);
      SetMyClass2('');
      SetMyClass3('');
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
      SetEnterpreneursFilter(null);
      SetAllFilter(null);
      SetMyClass1('');
      SetMyClass3('');
      SetStudentsFilter(null);
    } else {
      SetProfessionalsFilter(null);
      SetMyClass2('');
      SetAllFilter(1);
    }
  };

  const toggleEnterpreneurs = () => {
    if (enterpreneursFilter === null) {
      SetEnterpreneursFilter(1);
      SetMyClass3('show');
      SetProfessionalsFilter(null);
      SetAllFilter(null);
      SetStudentsFilter(null);
      SetMyClass1('');
      SetMyClass2('');
    } else {
      SetEnterpreneursFilter(null);
      SetMyClass3('');
      SetAllFilter(1);
    }
  };
  const clearFilters = () => {
    SetAllFilter(1);
    SetProfessionalsFilter(null);
    SetStudentsFilter(null);
    SetEnterpreneursFilter(null);
    SetMyClass1('');
    SetMyClass2('');
    SetMyClass3('');
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
          <div className='tags d-flex mt-3 mb-md-5'>
            <span>For : </span>
            <ul className='d-flex flex-wrap'>
              <li>
                <button
                  className={myClass1 + ' btn'}
                  onClick={() => toggleStudents()}
                >
                  Students
                </button>
              </li>
              <li>
                <button
                  className={myClass2 + ' btn'}
                  onClick={() => toggleProfessionals()}
                >
                  Professionals
                </button>
              </li>
              <li>
                <button
                  className={myClass3 + ' btn'}
                  onClick={() => toggleEnterpreneurs()}
                >
                  Enterpreneurs
                </button>
              </li>

              <li>
                <button className='btn' onClick={() => clearFilters()}>
                  <i className='fas fa-times'></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='courses-content'>
        {allFilter && (
          <div id='#all' className='blogs-cards-two container py-5'>
            <div className='text-center'>
              <h2 className='mb-4'>All Courses</h2>
            </div>

            <div className='row'>
              {allCourses.map((course, index) => {
                return (
                  <div className='col-lg-4 col-md-6 col-12' key={index}>
                    <div className='cards'>
                      <div className='program-card py-3 px-4'>
                        <div className='align-items-center'>
                          <div className=''>
                            <img src='/images/programs-bg.png' alt='' />
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
        {studentsFilter && (
          <div id='#students' className='blogs-cards-two container py-5'>
            <div className='text-center'>
              <h2 className='mb-4'>Students Courses</h2>
            </div>
            <div className='row'>
              {studentsCourses.map((course, index) => {
                return (
                  <div className='col-lg-4 col-md-6 col-12' key={index}>
                    <div className='cards'>
                      <div className='program-card py-3 px-4'>
                        <div className='align-items-center'>
                          <div className=''>
                            <img src='/images/programs-bg.png' alt='' />
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
          <div id='#professionals' className='blogs-cards-two container py-5'>
            <div className='text-center'>
              <h2 className='mb-4'>Professionals Courses</h2>
            </div>
            <div className='row'>
              {professionalsCourses.map((course, index) => {
                return (
                  <div className='col-lg-4 col-md-6 col-12' key={index}>
                    <div className='cards'>
                      <div className='program-card py-3 px-4'>
                        <div className='align-items-center'>
                          <div className=''>
                            <img src='/images/programs-bg.png' alt='' />
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

        {enterpreneursFilter && (
          <div id='#professionals' className='blogs-cards-two container py-5'>
            <div className='text-center'>
              <h2 className='mb-4'>Enterpreneurs Courses</h2>
            </div>
            <div className='row'>
              {enterpreneursCourses.map((course, index) => {
                return (
                  <div className='col-lg-4 col-md-6 col-12' key={index}>
                    <div className='cards'>
                      <div className='program-card py-3 px-4'>
                        <div className='align-items-center'>
                          <div className=''>
                            <img src='/images/programs-bg.png' alt='' />
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
