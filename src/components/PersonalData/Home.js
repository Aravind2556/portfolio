import React from 'react'
import { useContext } from 'react'
import { DContext } from '../DataContext'
import { useState } from 'react'


export const Home = () => {
    const {HomeSection,HomeBackgroundImage}=useContext(DContext)
    const [currentIndex, setCurrentIndex]=useState(0)
    const updateImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  };

  // Get the current image from the array
  const currentImage = HomeBackgroundImage[currentIndex]?.img;
  return (
    <div className=" relative top-20">
      <div className=" grid justify-center">
        <div>

          <div>
          <img src={currentImage} alt={currentImage} className="Home_backGround"/>
          </div>
          <div className="flex justify-end">
          <div className="relative bottom-32 text-white w-10 h-10 flex justify-center items-center text-center bg-gray-800 rounded-2xl cursor-pointer animate-bounce" onClick={updateImage}>
          <button>⚫</button>
          </div>
          </div>
          
        </div>

        <div className=" flex justify-center">
          <div className="flex justify-center relative w-2/4 border-2 border-dotted h-56 rounded-full bottom-96 hover:animate-bounce text-white items-center">
          <div className=" inline p-10">
 
        <div className="text-4xl font-semibold text-white"> 
            <p>{HomeSection.fname}</p>
        </div>
        <div className=" text-sm font-light">
          <p>{HomeSection.role}</p>
        </div>
        <div className="font-bold text-blue-500 text-xl">
          <p>{HomeSection.me}</p>
        </div>
        <div className="flex justify-center cursor-wait">
          <marquee className="flex justify-center hover:border-2 hover:border-white hover:border-solid w-36  h-8 rounded-full">
          <p>{HomeSection.resume}</p></marquee>
        </div>
        </div>
        </div>
        </div>
            </div>
            </div>
  )
}
