import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutimage from '../assets/Travel5.jpeg'
import Footer from '../components/Footer'
import Contactform from '../components/Contactform'

export default function Contact() {
  return (
    <>
     <Navbar/>
     <Hero 
     cName="hero-about"
     heroImg={Aboutimage}
     title="Contact"
     btnClass="hide"
    
     />
     <Contactform/>
     <Footer/>
    </>
   
  )
}
