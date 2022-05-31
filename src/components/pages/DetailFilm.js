import React from 'react'
import PrehistoricPlanet from '../assets/images/prehistoricplanet.jpg'
import './DetailFilm.css'

function DetailFilm() {
  return (
    <div className='detail-film'>
        <div className='intro'>
            <img className='movie-img' src={PrehistoricPlanet} alt='movie name' />
            <iframe className='movie-trailer'
            src="https://www.youtube.com/embed/mqqft2x_Aa4"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
        />{" "}    
        </div>
        
        
    </div>
  )
}

export default DetailFilm