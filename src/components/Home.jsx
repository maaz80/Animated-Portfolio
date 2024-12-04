import React from 'react';
import Name from './Name';
import Three from '../components/three';
import About from './About';
import Leaf from './images/Leaf.png';
import Rope from './images/Rope.png';
import Leaf1 from './images/leaf1.png';
import WoodenFrame from './images/WoodenFrame.png';
import Experience from './Experience';
import Tech from './Tech';
import Works from './Works';
import Contact from './Contact';
import Eyes from './Eyes/Eyes';
import { useNav } from './NavContext';

function Home() {
  const { homeRef, aboutRef, experienceRef, worksRef, techRef, contactRef } = useNav();

  return (
    <div className="w-full h-screen relative">
      <div ref={homeRef} className="w-[100%] bg-gradient-to-r from-black to-emerald-900 relative z-10 text-white h-full flex flex-col justify-center gap-4 section" id='home'>
        <div className='absolute flex w-full h-screen'>
          <img src={Leaf} alt="Leaf" className='z-30 w-[100%] md:w-[50%] h-screen' />
          <img src={Leaf} alt="Leaf" className='z-20 w-[50%] h-screen hidden md:block' />
        </div>
        <Name />
      </div>



      <div className="w-[100%] flex justify-center items-center bg-gradient-to-r from-black to-emerald-900 pt-20  section h-screen " id='empty'>
        <div className='absolute flex  w-full h-screen'>
          <img src={Leaf} alt="Leaf" className=' z-20 hidden md:block w-[50%] h-screen' />
        </div>
        <img src={Rope} alt="Leaf" className='flex z-10 w-[100%] md:w-[40%] mt-80' />
        <img src={Leaf1} alt="Leaf" className='absolute z-50 w-[90%] md:w-[60%] right-0 ' />
      </div>

      <div ref={aboutRef} className="section bg-gradient-to-r  from-black to-emerald-900   pt-60 pb-40" id='about'>
        <div className='absolute flex  w-full h-screen'>
          <img src={Leaf} alt="Leaf" className=' z-40 w-[100%] md:w-[50%] h-screen' />
          <img src={Leaf} alt="Leaf" className='z-30 w-[50%] h-screen hidden md:block' />
        </div>
        <div className='w-[100%] xl:w-[55%] z-20 relative right-0 xl:right-10 ml-auto'>
          <img src={WoodenFrame} alt="Frame" className='h-[328px] sm:h-auto' />
          <About />
        </div>
      </div>

      <div ref={worksRef} className="section bg-gradient-to-r from-black to-emerald-900 min-h-screen" id='experience'>
        <Experience />
      </div>

      <div ref={experienceRef} className="section bg-gradient-to-r from-black to-emerald-900 min-h-screen" id='works'>
        <Works />
      </div>

      <div ref={techRef} className="section bg-gradient-to-r from-black to-emerald-900 min-h-screen" id='tech'>
        <Tech />
      </div>

      <div className="section bg-gradient-to-r from-black to-emerald-900 hidden md:block" id='eyes'>
        <Eyes />
      </div>

      <div ref={contactRef} className="section bg-gradient-to-r from-black to-emerald-900 z-40" id='contact'>
        <Contact />
      </div>

      <div>
        <Three />
      </div>
    </div>
  );
}

export default Home;
