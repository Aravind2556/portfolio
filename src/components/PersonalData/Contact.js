import React from 'react'
import { useContext } from 'react'
import { DContext } from '../DataContext'

export const Contact = () => {
    const {myContact}=useContext(DContext)
  return (
    <div className="Footer_top grid relative top-28 w-full h-64 z-10">
        <div className="Footer_head text-white text-2xl flex justify-center relative top-10 font-semibold font-serif">
            <h1>Let's Connect</h1>
        </div>
        
        
      
    <div className="Footer_bg bg-black border-t-2  font-bold w-full h-64 flex text-white items-center justify-around">
        <div className="footer_number grid items-center relative ">
           
            <h1 className="Footer_num text-xl font-mono text-gray-500">Contact:+91 82482-21211</h1>
            <h1 className="Footer_num text-xl font-mono text-gray-500">Email:aravindaravind2556@gmail.com</h1>

        </div>
        <div className="Footer_option flex gap-1 relative right-3 font-thin">
      
        <a href='/' className="w-10 h-10 bg-gray-700 justify-center flex items-center rounded-md" title='home'>1</a>
        <a href='/about' className="w-10 h-10 bg-gray-700 justify-center flex items-center  rounded-md " title='about me'>2</a>
        <a href='/do' className="w-10 h-10 bg-gray-700 justify-center flex items-center rounded-md " title='what i do'>3</a>
        <a href='/resume' className="w-10 h-10 bg-gray-700 justify-center flex items-center rounded-md " title='resume'>4</a>
        <a href='/project' className="w-10 h-10 bg-gray-700 justify-center flex items-center rounded-md " title='portfolio'>5</a>
        <a href='/expricence' className="w-10 h-10 bg-gray-700 justify-center flex items-center rounded-md " title='expricence'>6</a>
      
        </div>
        <div className="Footer_contact flex gap-2">
            {
                myContact.map((Contact,index)=>{
                    return(
                        <div key={index}>
                            
            <a href={Contact.link} target="_blank" rel="noreferrer"><img src={Contact.img} alt='..' title={Contact.title} className=" w-8 h-8"/></a>
            </div>
            
                    )
                })
            }
            
        </div>
        
        
</div>
<div className="Footer_developer flex justify-center text-blue-900 bg-black w-full text-xl font-serif">
            <h1>Developed by Aravindan, Built using React.js.</h1>

        </div>
       
</div>
  )
}
