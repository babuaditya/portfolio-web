import React from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutMe from '../components/AboutMe/AboutMe';
import Skill from '../components/Skills/Skill';
import Experience from '../components/Experience/Experience';
import RecentProject from '../components/RecentProject/RecentProject';
import Portfolio from '../components/Portfolio/Porfolio';
import ContactMe from '../components/ContactMe/ContactMe';
import useIntersectionObserver from './hooks/useIntersectionObserver';
import useScrollDirection from './hooks/useScrollDirection';
import useDesktopMode from './hooks/useDesktopMode';
import Modal from '../components/Modal/Modal';
import './App.css';

function App() {
  const {showModal,isDesktopMode} = useDesktopMode(); // Call the custom hook

  const scrollDirection = useScrollDirection();
  const [heroRef, heroInView] = useIntersectionObserver({ threshold: 0.1 });
  const [skillRef, skillInView] = useIntersectionObserver({ threshold: 0.1 });
  const [experienceRef, experienceInView] = useIntersectionObserver({ threshold: 0.1 });
  const [serviceRef, serviceInView] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <>
      {isDesktopMode&&<Modal 
        message="This web app is currently available only for desktop devices. For mobile, it will be available soon."
        isVisible={showModal}
      />}
      <div className='bg-[#F9E7DB] grid font-inter '>
        <div className='mx-[110px] grid-cols-12 gap-5'>
          <Header />
          {scrollDirection === 'down' && (
            <div className='fixed top-0 left-0 w-full bg-white py-4 shadow-md z-50 transition-transform duration-300 transform translate-y-0 '>
              <Header />
            </div>
          )}

          <div ref={heroRef as React.LegacyRef<HTMLDivElement>} className={`transition-opacity duration-1000 ${heroInView ? 'opacity-100' : 'opacity-0'}`}>
            <Hero />
          </div>
        </div>
      </div>
      <div className='mx-[40px] grid-cols-12 gap-5'>
        <AboutMe />
        <div ref={skillRef as React.LegacyRef<HTMLDivElement>} className={`transition-opacity duration-1000 ${skillInView ? 'opacity-100' : 'opacity-0'}`}>
          <Skill />
        </div>
        <div ref={experienceRef as React.LegacyRef<HTMLDivElement>} className={`transition-opacity duration-1000 ${experienceInView ? 'opacity-100' : 'opacity-0'}`}>
          <Experience />
        </div>
        <div ref={serviceRef as React.LegacyRef<HTMLDivElement>} className={`transition-opacity duration-1000 ${serviceInView ? 'opacity-100' : 'opacity-0'}`}>
        <Portfolio />
        </div>
        <RecentProject />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
