import React from 'react'
import { Navnar } from './components/Header/Navnar'
import { Home } from './components/PersonalData/Home'
import { About } from './components/PersonalData/About'
import { Skills } from './components/PersonalData/Skills'
import { Education } from './components/PersonalData/Education'
import { Contact } from './components/PersonalData/Contact'

export const App = () => {
  return (
    <div>

      <Navnar/>
      <Home/>
      <About/>
      <Skills/>
      <Education/>
      <Contact/>

    </div>
  )
}

