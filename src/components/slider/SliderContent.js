import React, { useEffect, useState } from 'react'
import Star from '../assets/images/star_16px.png'
import axios from 'axios'
import moment from 'moment'
import { generatePath, useNavigate } from 'react-router-dom'

function SliderContent( {activeIndex} ) {
    const [movies, setMovies] = useState([])
    useEffect(() => {
        try {
            axios.get(`http://localhost:8000/api/select/top4`).then((getData)=> {
                setMovies(getData.data)
            })
        } catch (error) {
            
        }
    })

    const history = useNavigate()

    const handleProceed = (e, id) => {
    id && history(generatePath('/movies/detailfilm/:id', {id}))
  }


  return (
    <section>
        {movies.map((slide,index) => (
            <div
                key = {index}
                className = {index === activeIndex ? 'slides active' : 'inactive'}>
                    <img onClick={(e) => handleProceed(e, slide._id)} className='slide-image' src={slide.img} alt={slide.tittle} />
                    <div className='content'>
                        <h3 onClick={(e) => handleProceed(e, slide._id)} className='slide-title'>{slide.tittle}</h3>

                        <div className='overview'>
                            <h4 className='title'>Overview : </h4>
                            <p className='slide-text'>{slide.overview}</p>
                        </div>
                        
                        <div className='date'>
                            <h4 className='title'>Date : </h4>
                            <p className='slide-date'>{moment(slide.release_date).utc().format('MM-DD-YYYY')}</p>
                        </div>

                        <div className='rate'>
                            <h4 className='title'>Rating : </h4>
                            <p className='slide-rate'>{slide.average_vote} <img src={Star} alt='star'/> </p> 
                        </div>

                        <div className='categories'>
                            <h4 className='title'>Categories : </h4>
                            {slide.categories.map((item) => (
                                <p className='slide-categories'>{item}</p>
                            ))}
                        </div>
                    </div>
                </div>
        ))}
    </section>
    )
}

export default SliderContent