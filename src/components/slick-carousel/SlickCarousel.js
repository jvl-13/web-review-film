import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import Star from '../assets/images/star_16px.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './SlickCarousel.css'
import axios from "axios"
import {Link, useNavigate, generatePath} from 'react-router-dom'
import moment from "moment"

function SlickCarousel(props) {
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

    const [movies, setMovies] = useState([])
    useEffect(() => {
      axios.get(`http://localhost:8000/api/movie?cat=${props.cat}`).then((getData)=> {
        setMovies(getData.data)
      })
    })

    const history = useNavigate()

    const handleProceed = (e, id) => {
      id && history(generatePath('/movies/detailfilm/:id', {id}))
    }

  return (
    <div className='slick'>
        <Slider {...settings}>
            {movies.map((item) => (
                <div className='card'>
                    <div className='card-top'>
                        {/* <Link to='/movies/detailfilm' style={{ textDecoration: 'none' }}> */}
                          <img onClick={(e) => handleProceed(e, item._id)} className='card-img' src={item.img} alt={item.tittle} />
                        {/* </Link> */}
                        
                        <h3 className='card-title'>{item.tittle}</h3>
                        
                        <p className='card-rate'>{item.average_vote} <img className='star' src={Star} alt='star'/> </p>
                        <p className='card-date'>{moment(item.release_date).utc().format('MM-DD-YYYY')}</p>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
  )
}

export default SlickCarousel