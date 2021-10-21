import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import MyNavbar from '../header-section/MyNavbar';
import SingleMentorCard from './SingleMentor';

import Axios from 'axios';

const Mentors = () => {
  const [allMentors, SetAllMentors] = useState([]);
  const [studentsMentors, SetStudentsMentors] = useState([]);
  const [professionalsMentors, SetProfessionalsMentors] = useState([]);
  const [entrepreneursMentors, SetentrepreneursMentors] = useState([]);
  const [name, SetName] = useState('');
  const [filtered, SetFiltered] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get('https://mentorkart.org/api/sso-mentor-list').then((res) => {
      console.log(res.data);
      SetFiltered(res.data.data);

      SetAllMentors(res.data.data);
      // console.log(res.data.data);
      SetStudentsMentors(
        res.data.data.filter((x) => {
          if (x.user_categories) {
            return x.user_categories.split(',').includes('STUDENT');
          }
          return false;
        })
      );
      SetProfessionalsMentors(
        res.data.data.filter((x) => {
          if (x.user_categories) {
            return x.user_categories.split(',').includes('PROFESSIONAL');
          }
          return false;
          // return x.user_categories.split(',').includes('PROFESSIONAL');
        })
      );
      SetentrepreneursMentors(
        res.data.data.filter((x) => {
          if (x.user_categories) {
            return x.user_categories.split(',').includes('ENTREPRENEUR');
          }
          return false;

          // return x.user_categories.split(',').includes('ENTREPRENEUR');
        })
      );
    });
  }, []);

  const filterMentor = (x) => {
    SetFiltered(
      allMentors.filter((mentor) => {
        if (mentor.area_of_experties) {
          let index = mentor.area_of_experties
            .toLowerCase()
            .indexOf(x.toLowerCase());
          return index !== -1;
        } else {
          return false;
        }
      })
    );
  };

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
    <div className='mentors'>
      <MyNavbar />

      <div className='mentors-head'>
        <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 py-3'>
          <h1>Our Mentors</h1>
          <form
            action='/search-mentors'
            className='mentors-search d-flex justify-content-between align-items-center'
          >
            <div className='form-group'>
              <span>
                <i className='fas fa-search me-2 ms-1'></i>
              </span>
              <input
                type='text'
                name='search-text'
                placeholder='Search Mentor'
                value={name}
                onChange={(e) => {
                  SetName(e.target.value);
                  filterMentor(e.target.value);
                }}
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
      <div className='mentors-content'>
        <div className='mentors-cards'>
          <div className='container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-md-5 pb-5'>
            <div className='row'>
              {allFilter &&
                filtered.map((mentor, index) => {
                  return (
                    <div key={index} className='col-lg-4 col-md-6 col-12'>
                      <div className='mentors-card mb-4'>
                        <SingleMentorCard
                          id={mentor.id}
                          img={mentor.profile_image}
                          name={mentor.first_name + ' ' + mentor.last_name}
                          designation={mentor.designation}
                          categories={mentor.user_categories}
                          charges={mentor.mentor_cost}
                          position={mentor.current_position}
                        />
                      </div>
                    </div>
                  );
                })}
              {studentsFilter &&
                studentsMentors.map((mentor, index) => {
                  return (
                    <div key={index} className='col-lg-4 col-md-6 col-12'>
                      <div className='mentors-card mb-4'>
                        <SingleMentorCard
                          id={mentor.id}
                          img={mentor.profile_image}
                          name={mentor.first_name + ' ' + mentor.last_name}
                          designation={mentor.designation}
                          categories={mentor.user_categories}
                          charges={mentor.mentor_cost}
                          position={mentor.current_position}
                        />
                      </div>
                    </div>
                  );
                })}
              {professionalsFilter &&
                professionalsMentors.map((mentor, index) => {
                  return (
                    <div key={index} className='col-lg-4 col-md-6 col-12'>
                      <div className='mentors-card mb-4'>
                        <SingleMentorCard
                          id={mentor.id}
                          img={mentor.profile_image}
                          name={mentor.first_name + ' ' + mentor.last_name}
                          designation={mentor.designation}
                          categories={mentor.user_categories}
                          charges={mentor.mentor_cost}
                          position={mentor.current_position}
                        />
                      </div>
                    </div>
                  );
                })}
              {entrepreneursFilter &&
                entrepreneursMentors.map((mentor, index) => {
                  return (
                    <div key={index} className='col-lg-4 col-md-6 col-12'>
                      <div className='mentors-card mb-4'>
                        <SingleMentorCard
                          id={mentor.id}
                          img={mentor.profile_image}
                          name={mentor.first_name + ' ' + mentor.last_name}
                          designation={mentor.designation}
                          categories={mentor.user_categories}
                          charges={mentor.mentor_cost}
                          position={mentor.current_position}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mentors;
