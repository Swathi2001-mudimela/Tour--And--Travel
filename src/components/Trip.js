import React from 'react'
import Tripdata from './Tripdata'
import image1 from '../assets/Dubai1.jpeg'
import image2 from '../assets/Dubai2.jpeg'
import image3 from '../assets/rome1.jpg'
import image4 from '../assets/rome2.jpeg'
import image5 from  '../assets/France.jpeg'
import image6 from  '../assets/Vietnam.jpg'
import image7 from  '../assets/Niagara.jpeg'
import './Tripstyles.css'

export default function Trip() {
  return (
    <div className='trip'>
        <h1>Recent Destinations</h1>
        <p>“A journey of a thousand miles must begin with a single step.”</p>
        <div className='tripcard'>
        <Tripdata
        heading="France"
        text="There's much more to France than Paris—from the fairy-tale châteaux of the Loire Valley to the lavender fields of Provence, and the French Riviera's celebrity-studded beaches. World-famous gastronomy and fine wines provide the perfect complement to the country's alpine views and architectural masterpieces."
        image1={image5}
        />
         <Tripdata
        heading="Vietnam"
        text="The jungles and monsoon forests of Vietnam are diverse ecosystems that are alive with unique wildlife. Trekking is a popular activity here, particularly the mountains of Sapa and the primeval landscape of Cuc Phuong National Park. For a more urban escape, take a guided food tour of Ho Chi Minh City, making sure to squeeze in visits to the historic Hoi Truong Thong Nhat palace and the intricately adorned Emperor Jade Pagoda."
        image1={image6}
        />
         <Tripdata
        heading="Niagara Falls"
        text="We won't lie: Niagara Falls is uber-touristy. There are wax museums and a Ripley's Believe It or Not Museum, and if it's a fast-food chain, you can probably find it here. But even the most jaded hipster shouldn't pass up a chance to visit this town, because the Falls themselves are spectacular."
        image1={image7}
        />
        </div>
    </div>
  )
}
