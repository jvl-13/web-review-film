import React from 'react'
import './Home.css'
import  Slider  from '../slider/Slider.js'
import SlickCarousel from '../slick-carousel/SlickCarousel'

function Home() {
  return (
    <div className='body'>
        <Slider />
        <div className='container'>
          <div className='group-top'>
            <h2 className='name'>Top Picks</h2>
            <SlickCarousel />
          </div>

          <div className='group-popular'>
            <h2 className='name'>Popular</h2>
            <SlickCarousel />
          </div>

          <div className='group-trending'>
            <h2 className='name'>Trending Now</h2>
            <SlickCarousel />
          </div>
        </div>
    </div>
  )
}

export default Home