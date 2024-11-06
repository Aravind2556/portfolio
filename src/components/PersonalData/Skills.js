import { useContext } from 'react'
import { DContext } from '../DataContext'


import React from 'react'


export const Skills = () => {
    const {mySkills}=useContext(DContext)
  return (
   
   
      
      <div className="flex  justify-center items-center relative  bottom-11">
      <div className="Skills_box grid grid-cols-5 gap-10 justify-center">
        {
          mySkills.map((skill, index)=>{
            return(
              <div className="Skills_border border-solid border-white w-60 border-1 grid justify-center bg-black text-white text-center text-lg font-bold" key={index}>
                <div className="grid  justify-center">
                  <img src={skill.img} alt='..' className="Skill_img w-20 h-20"/>
                  <h1>{skill.title}</h1> 
                  </div> 
                  <div className="progress w-52 my-2" role="progressbar" aria-label="Animated striped example" aria-valuenow={skill.score} aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: skill.score}}>{skill.score}</div>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
   
   
  )
}
