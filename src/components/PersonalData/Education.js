import React from 'react'
import { useContext } from 'react'
import { DContext } from '../DataContext'

export const Education = () => {
    const {myEducation}=useContext(DContext)
  return (
   
    <div className="flex  justify-center  relative top-8">
    <div className=" grid grid-cols-3 gap-10 justify-center">
        {
          myEducation.map((Education,index)=>{
            return(
              
                <div className="border-solid border-white w-96 h-24 border-1 grid justify-center items-center bg-black  text-center  font-bold" key={index}>
                  <div className="grid justify-center">
                    <h1 className="text-2xl text-blue-800">{Education.course}</h1>
                    <h1 className="text-lg text-white">{Education.institute}</h1>
                    <h1 className="text-white text-base">{Education.passout}</h1>
                  </div>
                  </div>
                  
             
            )
          })
        }
      </div>
    </div>
   
  )
}
