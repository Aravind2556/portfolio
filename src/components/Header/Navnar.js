import { useContext } from 'react';
import { DContext } from '../DataContext';

import React from 'react'

export const Navnar = () => {
    const {HeaderSection}=useContext(DContext)
  return (
    <div className="Navbar_header flex w-full h-20 text-center items-center justify-around bg-black fixed z-30">
        <div className="Navvar_icon font-semibold text-3xl text-gray-600">
          <div>
            <p>{HeaderSection.logo}</p>
            </div>
            {/* <div className="Navvar_icon_icon">
              <p><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></p>
            </div> */}
        </div>
        <div className="Navbar_content flex gap-10">
            <p  className="Navbar_content_title bg-black hover:border-2 hover:border-solid hover:border-gray-300 text-white font-light w-28 h-10 flex justify-center items-center rounded-xl">{HeaderSection.home}</p>
            <p className="Navbar_content_title bg-black hover:border-2 hover:border-solid hover:border-gray-300 text-white font-light w-28 h-10 flex justify-center items-center rounded-xl">{HeaderSection.about}</p>
            <p className="Navbar_content_title bg-black hover:border-2 hover:border-solid hover:border-gray-300 text-white font-light w-28 h-10 flex justify-center items-center rounded-xl">{HeaderSection.skills}</p>
            <p className="Navbar_content_title bg-black hover:border-2 hover:border-solid hover:border-gray-300 text-white font-light w-28 h-10 flex justify-center items-center rounded-xl">{HeaderSection.education}</p>
            <p className="Navbar_content_title bg-black hover:border-2 hover:border-solid hover:border-gray-300 text-white font-light w-28 h-10 flex justify-center items-center rounded-xl">{HeaderSection.project}</p>
            <p className="Navbar_content_title bg-black hover:border-2 hover:border-solid hover:border-gray-300 text-white font-light w-28 h-10 flex justify-center items-center rounded-xl">{HeaderSection.expricence}</p>
            
        </div>
    </div>
  )
}
