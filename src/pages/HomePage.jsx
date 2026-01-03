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
import { Helmet } from 'react-helmet'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
<Helmet>
  <title>Freelance Full-Stack Web Developer in Kollam | React, WordPress & Shopify Expert</title>
  <meta name='description' content="I'm Aswin Binaj, a freelance full-stack web developer in Kollam specializing in React, WordPress, Shopify, Laravel, and WooCommerce. I build fast, scalable, and user-friendly websites."/>
  <meta name='keywords' content='Freelance Full-Stack Web Developer in Kollam, WordPress and Shopify Developer,React and Laravel Developer,WooCommerce Expert in Kerala,Responsive Website Development,Custom E-commerce Website Development'/>
</Helmet>
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
