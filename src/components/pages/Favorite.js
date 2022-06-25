import React from 'react'
import './Movies.css'
import Star from '../assets/images/star_16px.png'
import {useState, useEffect} from 'react'
import axios from 'axios'
import moment from 'moment'
import { useSelector } from 'react-redux'
import { generatePath, useNavigate } from 'react-router-dom'

function Favorite() {
  const userStoreId = useSelector(state => state.user.userId)
  const userStoreToken = useSelector(state => state.user.accessToken)
  const userRole = useSelector(state => state.user.role)
  const [movies, setMovies] = useState([])

  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/api/favorite/${userStoreId}`,
      {
        headers: {'Authorization' : `Bearer ${userStoreToken}`},
      }
      ).then((getData) => {
      setMovies(getData.data)
      //console.log(getData?.data)
    })
    } catch (error) {
      
    }
  })
  const history = useNavigate()

  const handleProceed = (e, id) => {
    id && history(generatePath('/movies/detailfilm/:id', {id}))
  }

  const handleDelete = async (e, id) => {
    e.preventDefault()

    try {
      axios.delete(`http://localhost:8000/api/favorite/${id}`,
      {
        headers: {'Authorization' : `Bearer ${userStoreToken}`},
      }
      )
      history('/favorite')
    } catch (error) {
      
    }
  }

  return (
      <div className='movies' >
      <div className='filter' >
      <h2 style={{letterSpacing: '1px', fontSize: '26px', marginLeft: '15px'}}>Your Favorites</h2>
        <div className='list-movies' style={{marginRight: '20px', marginLeft: '20px'}}>
          {movies.map((item) => (
            <div className='ct-movies'>

              <img onClick={(e) => handleProceed(e, item.movie_id._id)} className='ct-img-movie' src={item.movie_id.img} alt={item.movie_id.tittle} />
              
              <div className='ct-content'>
                <div className='ct-title-rate'>
                  <h2 onClick={(e) => handleProceed(e, item.movie_id._id)} className='fv-title'>{item.movie_id.tittle}</h2>
                  <p className='fv-rate'>{item.movie_id.average_vote} <img className='ct-star' src={Star} alt='star'/> </p>
                </div>

                <p className='fv-date'>{moment(item.movie_id.release_date).utc().format('MM-DD-YYYY')}</p>

                <div className='ct-overview'>
                  <p className='ct-over'>Overview: </p>
                  <p className='ct-text'>{item.movie_id.overview} </p>
                </div>

                <button onClick={(e) => handleDelete(e, item.movie_id._id)} className='remove'>Remove from list</button>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Favorite