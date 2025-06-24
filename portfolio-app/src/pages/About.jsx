import React from 'react'
import Skills from './Skills'
import Home from './Home'
import Contact from './Contact'
import Courses from './Courses'
import Projects from './Projects'
import Experience from './Experience'


function About() {
  return (
    <div className='light:bg-gray-100 dark:bg-gray-950'>
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
