import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutimage from '../assets/Aboutimage.jpeg'
import Footer from '../components/Footer'
import Aboutus from '../components/Aboutus'

export default function About() {
  return (
    <>
      <Navbar/>
     <Hero 
     cName="hero-about"
     heroImg={Aboutimage}
     title="About"
     btnClass="hide"
    
     />
     <Aboutus/>
     <Footer/>
    </>
   
  )
}
