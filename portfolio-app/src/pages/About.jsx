import React from 'react'
import Skills from './Skills'
import Home from './Home'
import Contact from './Contact'
import Courses from './Courses'
import Projects from './Projects'
import Experience from './Experience'


function About() {
  return (
    <div>
      <Home/>
      <Skills />
      <Experience/>
      <Courses />
      <Projects/>
      <Contact />
    </div>
  )
}

export default About
