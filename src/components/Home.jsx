import React from 'react';
import Name from './Name';
import Three from '../components/three';
import About from './About';
import Leaf from './images/Leaf.png'
import WoodenFrame from './images/WoodenFrame.png'
import Experience from './Experience';
import Tech from './Tech';
import Works from './Works';

function Home() {
  return (
    <div className="w-full h-screen relative ">

      <div className="w-[100%]  bg-gradient-to-r from-black to-emerald-900 relative z-10 text-white h-full flex flex-col justify-center gap-4 section " id='home'>
        <div className='absolute flex  w-full h-screen'>
          <img src={Leaf} alt="Leaf" className=' z-30 w-[100%] md:w-[50%] h-screen' />
          <img src={Leaf} alt="Leaf" className='z-20 w-[50%] h-screen hidden md:block' />
        </div>
        <Name />
      </div>

      <div className="w-[100%]  bg-gradient-to-r from-black to-emerald-900 pt-20  section h-screen " id='empty'>
      <div className='absolute flex  w-full h-screen'>
          <img src={Leaf} alt="Leaf" className=' z-20 w-[100%] md:w-[50%] h-screen' />
          <img src={Leaf} alt="Leaf" className='z-20 w-[50%] h-screen hidden md:block' />
        </div>
      </div>

      <div className="section bg-gradient-to-r  from-black to-emerald-900  p-8 pt-60 pb-40" id='about'>
      <div className='absolute flex  w-full h-screen'>
          <img src={Leaf} alt="Leaf" className=' z-20 w-[100%] md:w-[50%] h-screen' />
          <img src={Leaf} alt="Leaf" className='z-30 w-[50%] h-screen hidden md:block' />
        </div>
        <div className='w-[100%] md:w-[55%] relative right-0 md:right-10 ml-auto'>
          <img src={WoodenFrame} alt="Frame" className='h-[328px] md:h-auto' />
          <About />
        </div>
      </div>

      {/* <div className="section bg-gradient-to-r from-black to-emerald-900 h-screen" id='tech'>
        <Tech />
      </div> */}

      <div className="section bg-gradient-to-r from-black to-emerald-900 min-h-screen" id='experience'>
        <Experience />
      </div>

      <div className="section bg-gradient-to-r from-black to-emerald-900 min-h-screen" id='works'>
        <Works />
      </div>
      <div>
        {/* <Three /> */}
      </div>
    </div>
  );
}

export default Home;
