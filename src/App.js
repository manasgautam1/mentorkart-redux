import FindMentorSection from './components/find-mentor-section/FindMentorSection';
import Header from './components/header-section/Header';
import JoinMentorkart from './components/join-mentokart/JoinMentorkart';
import PartnersSection from './components/partners/PartnersSection';
import ProgramsSection from './components/programs-section/ProgramsSection';
import Footer from './components/footer/Footer';
import BlogsSection from './components/blogs/BlogsSection';
import FeaturedSection from './components/featured/FeaturedSection';
import Testimonials from './components/testimonials/Testimonials';
import BannerSection from './components/banner/BannerSection';
import Blogs from './components/blogs/Blogs';
import Courses from './components/programs-section/Courses';
import BeAMentor from './components/BeAMentor';
import About from './components/About';
import OurTeam from './components/OurTeam';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Switch, Route } from 'react-router-dom';
import Mentors from './components/find-mentor-section/Mentors';
import AsAOrganisation from './components/AsAOrganisation';
import AsACampus from './components/AsACampus';
import PrivacyPolicy from './components/PrivacyPolicy';
import RefundPolicy from './components/RefundPolicy';
import TermsCondi from './components/TermsCondi';
import Faq from './components/Faq';
import MentorProfile from './components/MentorProfile';
import SingleBlog from './components/SingleBlog';
import FindAMentor from './components/FindAMentor';
import YoutubeSection from './components/youtube-section/YoutubeSection';
import SubscriptionSection from './components/subscription-section/SubscriptionSection';
import Packages from './components/packages-section/Packages';
import PackagesSection from './components/packages-section/PackagesSection';
import DetailsSection from './components/details-section/DetailsSection';
import CampusSection from './components/campus/CampusSection';
import BrandVideosSection from './components/brand-videos-section/BrandVideosSection';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <Header />
          <ToastContainer />
          <PackagesSection />
          <FindMentorSection />
          <DetailsSection />
          <BannerSection />
          <JoinMentorkart />
          <ProgramsSection />
          <SubscriptionSection />
          <BrandVideosSection />
          <PartnersSection />
          <Testimonials />
          <FeaturedSection />
          <BlogsSection />
          <CampusSection />
          <YoutubeSection />
          <Footer />
        </Route>
        <Route path='/our-blogs'>
          <Blogs />
        </Route>
        <Route path='/courses'>
          <Courses />
        </Route>
        <Route path='/packages'>
          <Packages />
        </Route>
        <Route path='/be-a-mentor'>
          <BeAMentor />
        </Route>
        <Route path='/all-mentors'>
          <Mentors />
        </Route>
        <Route path='/as-a-campus'>
          <AsACampus />
        </Route>
        <Route path='/as-a-organisation'>
          <AsAOrganisation />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/our-team'>
          <OurTeam />
        </Route>
        <Route path='/faq'>
          <Faq />
        </Route>
        <Route path='/privacy-policy'>
          <PrivacyPolicy />
        </Route>
        <Route path='/refund-policy'>
          <RefundPolicy />
        </Route>
        <Route path='/terms-conditions'>
          <TermsCondi />
        </Route>
        <Route path='/find-a-mentor'>
          <FindAMentor />
        </Route>
        <Route
          path='/mentor-profile/:username/:id'
          component={MentorProfile}
        ></Route>
        <Route path='/blog/:id' component={SingleBlog}></Route>
      </Switch>
    </div>
  );
}

export default App;
