import React, { useState, useEffect } from 'react';
import Footer from '../footer/Footer';
import MyNavbar from '../header-section/MyNavbar';
import { Link } from 'react-router-dom';
import SingleMentorCard from './SingleMentor';

import Axios from 'axios';


const Mentors = () => {
  const [allMentors, SetAllMentors] = useState([]);
  const [studentsMentors, SetStudentsMentors] = useState([]);
  const [professionalsMentors, SetProfessionalsMentors] = useState([]);
  const [enterpreneursMentors, SetEnterpreneursMentors] = useState([]);
  const [name, SetName] = useState('');
  const [ filtered, SetFiltered ] = useState( [] );
  useEffect(() => {
    window.scrollTo(0, 0);
    Axios.get( 'https://mentorkart.org/api/sso-mentor-list' ).then( ( res ) =>
    {
      console.log(res.data)
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
      SetEnterpreneursMentors(
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
    <div className='mentors'>
      <MyNavbar />

      <div className='mentors-head'>
        <div className='container py-md-5 py-3'>
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
          <div className='tags d-flex mt-3 mb-md-5'>
            <span>For : </span>
            <ul className='d-flex '>
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
      <div className='mentors-content'>
        <div className='mentors-cards'>
          <div className='container py-md-5 pb-5'>
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
                        />
                      </div>
                    </div>
                  );
                })}
              {enterpreneursFilter &&
                enterpreneursMentors.map((mentor, index) => {
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
