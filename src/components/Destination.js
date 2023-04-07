import React from 'react'
import Destinationdata from '../components/Destinationdata'
import './Destinatio.css'
import image1 from '../assets/Dubai1.jpeg'
import image2 from '../assets/Dubai2.jpeg'
import image3 from '../assets/rome1.jpg'
import image4 from '../assets/rome2.jpeg'
export default function Destination() {
  return (
    <div className="destination">
        <h1>Popular Destinations</h1>
        <p>“All journeys have secret destinations of which the traveler is unaware.”</p>
        <Destinationdata
        className="first-des"
        heading="Dubai, United Arab Emirates"
        text="Dubai is a destination that mixes modern culture with history, adventure with world-class shopping and entertainment. Catch a show at the Dubai Opera, see downtown from atop the Burj Khalifa and spend an afternoon along Dubai Creek exploring the gold, textile and spice souks. If you’re looking for thrills, you can float above the desert dunes in a hot air balloon, climb aboard a high-speed ride at IMG Worlds of Adventure or skydive over the Palm Jumeirah. "
        image1={image1}
        image2={image2}

        
        />
        <Destinationdata className="first-des-reverse"
        heading="Rome"
        text="Rome wasn't built in a day--and you'll need much more than a day to take in this timeless city. The city is a real-life collage of piazzas, open-air markets, and astonishing historic sites. Toss a coin into the Trevi Fountain, contemplate the Colosseum and the Pantheon, and sample a perfect espresso or gelato before spending an afternoon shopping at the Campo de’Fiori or Via Veneto. Enjoy some of the most memorable meals of your life here, too, from fresh pasta to succulent fried artichokes or a tender oxtail stew. "
        image1={image3}
        image2={image4}

        
        />
       
    </div>
  )
}
