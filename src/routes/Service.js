import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Aboutimage from '../assets/hometravel.jpeg'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

export default function Service() {
  return (
    <>
     <Navbar/>
     <Hero 
     cName="hero-about"
     heroImg={Aboutimage}
     title="Service"
     btnClass="hide"
     />
     <Trip/>
     <Footer/>
    </>
   
  )
}
