import React from 'react'
import Navbar from './components/Navbar/Navbar'
import {Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Message from './components/Message/Message';
import Education from './pages/Education';
import Project from './components/Project/Project';
import Footer from './components/Footer/Footer';
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className='pt-10'>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message" element={<Message />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      <Footer/>
    </div>
  )
}

export default App
