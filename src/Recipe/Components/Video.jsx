import React from 'react';
// import { Parallax } from 'react-parallax';
import video from "../assets/Food Promo Video - Manual Mode Productions..mp4"

const ParallaxVideo = () => {
  return (
    <div className='flex-grow'>
        <div className=' h-96 relative'>
        
          <video autoPlay loop muted src={video} 
          className='w-full h-full opacity-85 relative object-cover object-center bg-blend-multiply' />
        <div className='absolute h-full w-full left-0 top-0 bg-blend-overlay bg-red-300/30'></div>
        </div>
    </div>
  );
};


export default ParallaxVideo;
