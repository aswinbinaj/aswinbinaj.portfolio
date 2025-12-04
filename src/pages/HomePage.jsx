import React from 'react'
import { useEffect } from 'react'
import HeroSection from '../components/home/HeroSection'
import AboutMe from '../components/home/AboutMe'
import Projects from '../components/home/Projects'
import Skills from '../components/home/Skills'
import Services from '../components/home/Services'
import Blogs from '../components/home/Blogs'
import ContactForm from '../components/home/ContactForm'
import MyJourney from '../components/home/MyJourney'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <HeroSection/>
      <div id="about"><AboutMe/></div>
      <div id="projects"><Projects/></div>
      <div id="skills"><Skills/></div>
      <div id="services"><Services/></div>
      <div id="blogs"><Blogs/></div>
      {/* <MyJourney/> */}
      
      <ContactForm/>
    </div>
  )
}

export default HomePage
