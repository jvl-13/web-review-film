import React from 'react'
import './Movies.css'
import { SliderImage } from '../slider/SliderImage'
import Star from '../assets/images/star_16px.png'

function Favorite() {

  return (
    <div className='movies'>
      <div className='filter'>
      <h2 style={{letterSpacing: '1px', fontSize: '26px'}}>Your Favorites</h2>
        <div className='list-movies'>
          {SliderImage.map((item) => (
            <div className='ct-movies'>
              <img className='ct-img-movie' src={item.urls} alt={item.title} />
              
              <div className='ct-content'>
                <div className='ct-title-rate'>
                  <h2 className='ct-title'>{item.title}</h2>
                  <p className='ct-rate'>{item.rating} <img className='ct-star' src={Star} alt='star'/> </p>
                </div>

                <p className='ct-date'>{item.date}</p>

                <div className='ct-overview'>
                  <p className='ct-over'>Overview: </p>
                  <p className='ct-text'>{item.description} </p>
                </div>

                <button className='remove'>Remove from list</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favorite