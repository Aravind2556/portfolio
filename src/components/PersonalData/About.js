import { useContext } from 'react'
import { DContext } from '../DataContext'
import { useState } from 'react'

import React from 'react'

export const About = () => {
    const {HomeBackgroundImage,AboutSection}=useContext(DContext)
    const [currentIndex, setCurrentIndex]=useState(0)
    const updateImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  // Get the current image from the array
  const currentImage = HomeBackgroundImage[currentIndex]?.profileimg;
  return (
    <div className="grid w-full h-96 justify-center items-center relative top-10 bg-black text-white">
        <div className="relative grid justify-center bottom-48 z-10 ">
            <img src={currentImage} alt={currentImage} className=" w-56 h-56 rounded-full"></img>
        </div>
        
        
        <div className="relative bottom-72 border-2 border-solid border-red-950 flex justify-center w-full items-center text-center h-72">
        
            <p>{AboutSection.aboutme}</p>
         
        </div>
        <div onClick={updateImage} className=" relative  flex justify-center bottom-96 z-20 animate-spin">
        <button className="items-center flex text-4xl justify-center text-center">🛞</button>
        </div>

        

    </div>
    
    
    
  )
}
