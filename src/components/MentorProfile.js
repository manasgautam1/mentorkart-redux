import React, { useState, useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import SignUpModal from './join-mentokart/SignUpModal';
import Modal from 'react-modal';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const MentorProfile = (props) => {
  const [showModal, setShowModal] = useState(false);

  const showModalBtn = (bool) => {
    setShowModal(bool);
  };

  const [profile, setProfile] = useState({});
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mentorType, setMentorType] = useState('');
  const [categories, setCategories] = useState([]);
  const [imageURL, setImageURL] = useState('/images/user.png');

  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get(
      'https://mentorkart.org/api/sso-mentor/' + props.match.params.id
    ).then((res, err) => {
      // console.log(res.data.data);
      setProfile(res.data.data);
      if (res.data.data.user.first_name) {
        setFirstName(res.data.data.user.first_name);
      }
      if (res.data.data.user.middle_name) {
        setMiddleName(res.data.data.user.second_name);
      }
      if (res.data.data.user.second_name) {
        setLastName(res.data.data.user.last_name);
      }
      if (res.data.data.mentor.mentor_type) {
        setMentorType(res.data.data.mentor.mentor_type);
      }
      if (res.data.data.user.user_categories) {
        setCategories(
          res.data.data.user.user_categories.split(',').join(' | ')
        );
      }
    });
  }, [props.match.params.id]);

  return (
    <div className='mentor-profile'>
      <MyNavbar />
      <header className='pt-sm-0 pt-5'>
        <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
          <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
          <h1 className='mb-1'>MENTOR PROFILE</h1>
        </div>
      </header>
      <div className='content'>
        <div className='section-1 py-4'>
          <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
            <div className='row align-items-center'>
              <div className='col-md-3'>
                <div className='profile-img'>
                  <img
                    style={{
                      objectFit: 'cover',
                      objectPosition: 'center',
                      height: '100%',
                      width: '100%',
                    }}
                    src={imageURL}
                    className='img-fluid'
                    alt=''
                  />
                </div>
              </div>
              <div className='col-md-9 ps-3'>
                <h2 className='text-capitalize mt-md-0 mt-3'>
                  {firstName + ' ' + middleName + ' ' + lastName}
                </h2>
                <p>{categories}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='secondary pb-5 pt-md-5'>
        <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3'>
          <div className='section-3'>
            <div className='row'>
              <div className='col-md-4'>
                <div className='book-sec mb-4 px-md-0 px-3'>
                  <div className='row'>
                    <div className='col-6'>
                      <div className='row me-1'>
                        <button
                          onClick={() => {
                            setShowModal(true);
                          }}
                          className='btn btn-primary'
                        >
                          Book Chat
                        </button>
                      </div>
                    </div>
                    <div className='col-6'>
                      <div className='ms-1 row'>
                        <button
                          onClick={() => {
                            setShowModal(true);
                          }}
                          className='btn btn-outline-primary'
                        >
                          Book Call
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='rating-sec px-3 mb-md-0 mb-4'>
                  <div className='d-flex align-items-center'>
                    <div className=''>
                      <h3 className='display-4 mb-0'>4.5</h3>
                    </div>
                    <div className='ms-4'>
                      <p className='d-flex mb-0'>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='fas fa-star'></i>
                        <i className='far fa-star'></i>
                      </p>
                      <span>(200 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className='row showcase-cards mt-md-4 px-md-0 px-3'>
                  <div className='col-lg-6 col-md-12 col-6 ps-0'>
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
                          <p className='mb-0'>Mentor Me</p>
                          <h5 className='mb-0'>For 3 Months</h5>
                          <p className='mb-0 font-lg'>Rs 10000/-</p>
                        </div>
                      </div>
                      <div className='showcase-card-bottom text-center'>
                        Coming soon
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-6 col-md-12 col-6 pe-0'>
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
                          <p className='mb-0'>Mentor Me</p>
                          <h5 className='mb-0'>For 3 Months</h5>
                          <p className='mb-0 font-lg'>Rs 10000/-</p>
                        </div>
                      </div>
                      <div className='showcase-card-bottom text-center'>
                        Coming Soon
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-8 ps-md-5'>
                <div
                  className='accordion accordion-flush'
                  id='mentor-profile-accordian'
                >
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingOne'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseOne'
                        aria-expanded='true'
                        aria-controls='flush-collapseOne'
                      >
                        <h4>About the Mentor</h4>
                      </button>
                    </h2>
                    <div
                      id='flush-collapseOne'
                      className='accordion-collapse collapse show'
                      aria-labelledby='flush-headingOne'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div className='accordion-body'>
                        <p>
                          Entrepreneur I Certified Business Coach I Certified
                          Life coach I Public speaker I Startup mentor. With
                          more than 25 years’ experience in successful business
                          leadership, led teams and organizations to innovative,
                          build, implement business solutions & products in the
                          field of Information Technology and services for
                          customers across 20+ countries.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingTwo'>
                      <button
                        className='accordion-button'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseTwo'
                        aria-expanded='true'
                        aria-controls='flush-collapseTwo'
                      >
                        <h4>Experience Recognitions</h4>
                      </button>
                    </h2>
                    <div
                      id='flush-collapseTwo'
                      className='accordion-collapse collapse show'
                      aria-labelledby='flush-headingTwo'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div className='accordion-body'>
                        <div className='experience'>
                          <ul>
                            <li>
                              <h6>Founder & CEO, Mentorkart</h6>
                              <p>
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Iste voluptates laudantium
                                aliquid, mollitia ipsa deserunt amet ea
                                consequatur et suscipit numquam, natus fugit
                                reprehenderit aliquam at sed minus
                              </p>
                            </li>
                            <li>
                              <h6>Numer of the board Advisors</h6>
                              <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Doloremque doloribus ullam
                                nisi quaerat odit beatae officiis repellat
                                facere corporis minima.
                              </p>
                            </li>
                            <li>
                              <h6>Co-Founder</h6>
                              <p>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Tenetur animi quaerat sit in
                                sequi, ea illo est incidunt amet, beatae
                                veritatis ipsa tempora, maxime ratione.
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingThree'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseThree'
                        aria-expanded='false'
                        aria-controls='flush-collapseThree'
                      >
                        <h4>Awards & Achievements</h4>
                      </button>
                    </h2>
                    <div
                      id='flush-collapseThree'
                      className='accordion-collapse collapse'
                      aria-labelledby='flush-headingThree'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div className='accordion-body'>
                        <p>
                          MentorKart® has intelligent algorithms for matching a
                          mentee with a relevant and highly rated mentor. So you
                          can be assured of getting the best.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='accordion-item'>
                    <h2 className='accordion-header' id='flush-headingFour'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#flush-collapseFour'
                        aria-expanded='false'
                        aria-controls='flush-collapseFour'
                      >
                        <h4>Testimonials</h4>
                      </button>
                    </h2>
                    <div
                      id='flush-collapseFour'
                      className='accordion-collapse collapse'
                      aria-labelledby='flush-headingFour'
                      data-bs-parent='#accordionFlushExample'
                    >
                      <div className='accordion-body'>
                        <p>
                          Sign up on MentorKart® as a mentee and set your
                          professional and personal goals. You can set upto 6
                          goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
      <Footer />
    </div>
  );
};

export default MentorProfile;
