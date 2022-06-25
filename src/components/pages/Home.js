import React from 'react'
import './Home.css'
import  Slider  from '../slider/Slider.js'
import SlickCarousel from '../slick-carousel/SlickCarousel'
import { useSelector } from 'react-redux'

function Home() {
  const userStoreId = useSelector(state => state.user.userId)
  const userStoreToken = useSelector(state => state.user.accessToken)
  console.log(userStoreId)
  console.log(userStoreToken)
  
  return (
    <div className='body'>
        <Slider />
        <div className='container'>
          <div className='group-top'>
            <h2 className='name'>Action</h2>
            <SlickCarousel cat='Action'/>
          </div>

          <div className='group-popular'>
            <h2 className='name'>Fantasty</h2>
            <SlickCarousel cat='Fantasty'/>
          </div>

          <div className='group-trending'>
            <h2 className='name'>Cartoon</h2>
            <SlickCarousel cat='Cartoon'/>
          </div>
        </div>
    </div>
  )
}

export default Home