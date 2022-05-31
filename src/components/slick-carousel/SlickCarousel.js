import React from 'react'
import Slider from 'react-slick'
import { TopMovies } from './TopMovies';
import Star from '../assets/images/star_16px.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SlickCarousel.css'

function SlickCarousel() {
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 6,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
    };
  return (
    <div className='slick'>
        <Slider {...settings}>
            {TopMovies.map((item) => (
                <div className='card'>
                    <div className='card-top'>
                        <img className='card-img' src={item.urlImg} alt={item.title} />
                        <h3 className='card-title'>{item.title}</h3>
                        
                        <p className='card-rate'>{item.rate} <img className='star' src={Star} alt='star'/> </p>
                        <p className='card-date'>{item.date}</p>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default SlickCarousel