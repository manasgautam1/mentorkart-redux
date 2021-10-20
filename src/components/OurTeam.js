import React, { useEffect } from 'react';
import 'react-phone-input-2/lib/style.css';

import Footer from './footer/Footer';
import MyNavbar from './header-section/MyNavbar';

const OurTeam = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <MyNavbar />
      <div className='our-team'>
        <header className='pt-sm-0 pt-5'>
          <div className='container container-xxl px-xxl-0 px-lg-5 px-md-4 px-sm-3 py-5'>
            <img className='guru-img' src='/images/mentorkartguru.png' alt='' />
            <h1 className='mb-1'>MEET OUR TEAM</h1>
          </div>
        </header>
        <main className='text-lg-left text-center'>
          <div className='team py-5'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-7 order-lg-1 order-2 mt-lg-0 mt-4'>
                  <h2 className='mb-0'>Ashish Khare</h2>
                  <span className='lead'>
                    <strong>Chief Executive Officer (CEO) & Founder</strong>
                  </span>
                  <p className='mt-4'>
                    Entrepreneur I Certified Business Coach I Certified Life
                    coach I Public speaker I Startup mentor With more than 25
                    years’ experience in successful business leadership, led
                    teams and organizations to innovate, build, implement
                    business solutions & products in the field of Information
                    Technology and services for customers across 20+ countries.
                  </p>
                </div>
                <div className='col-lg-5 order-lg-2 order-1 text-center'>
                  <img
                    src='/images/team/ashishkhare.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='team team-alt py-5'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-7 order-2 mt-lg-0 mt-4'>
                  <h2 className='mb-0'>SK Mohanty</h2>
                  <span className='lead'>
                    <strong>Chief Technology Officer (CTO) & Co-Founder</strong>
                  </span>
                  <p className='mt-4'>
                    Technology Leader | Fintech Leader | Entrepreneur |
                    Management Professional SK is an entrepreneur, technology
                    leader, institution builder, a mentor to numerous
                    entrepreneurs, and above all an ecosystem evangelist.
                    Facilitator and builder of world-class technology management
                    and product development teams, with a specialty in both
                    start-up and scaled growth stages.
                  </p>
                </div>
                <div className='col-lg-5 order-1 text-center'>
                  <img
                    src='/images/team/skmohanty.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='team py-5'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-7 order-lg-1 order-2 mt-lg-0 mt-4'>
                  <h2 className='mb-0'>Harsh Srivastva</h2>
                  <span className='lead'>
                    <strong>
                      Vice President – Strategic Alliance and Marketing
                    </strong>
                  </span>
                  <p className='mt-4'>
                    Harsh has been active in Startup Ecosystem for the past
                    5years. He was the Curator of E-Cell of one of the renowned
                    universities. He is an advisor to many startups which have
                    got good customer acceptance.
                  </p>
                </div>
                <div className='col-lg-5 order-lg-2 order-1 text-center'>
                  <img
                    src='/images/team/harsh.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='team team-alt py-5'>
            <div className='container'>
              <div className='row align-items-center'>
                <div className='col-lg-7 order-2 mt-lg-0 mt-4'>
                  <h2 className='mb-0'>Priyank Saini</h2>
                  <span className='lead'>
                    <strong>Vice President – Product Growth & Strategy</strong>
                  </span>
                  <p className='mt-4'>
                    Priyank has been working in the startup ecosystem for about
                    4 years. He has previously cofounded a startup and has
                    experience working in multiple sectors including healthcare,
                    real estate, etc across various domains. Priyank is skilled
                    in Product Management, Operations, and Growth & Strategy.
                    Priyank is a Computer Science Engineer by profession and an
                    avid traveler.
                  </p>
                </div>
                <div className='col-lg-5 order-1 text-center'>
                  <img
                    src='/images/team/priyank.png'
                    alt=''
                    className='img-fluid'
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default OurTeam;
