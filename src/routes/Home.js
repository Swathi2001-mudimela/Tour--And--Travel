import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Homeimage from '../assets/Travel1.jpeg'
import Destination from '../components/Destination'
import Trip from '../components/Trip'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero 
     cName="hero"
     heroImg={Homeimage}
     title="Your Journey Your Story"
     text="Choose your favourite destination"
     buttonText="Travel Plan"
     btnClass="show"
     url="/"
     />
     <Destination/>
     <Trip/>
     <Footer/>
    </>
   
  )
}
