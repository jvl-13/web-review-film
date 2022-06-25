import React, { useState } from 'react'
import './Movies.css'
import { CategoriesList } from './CategoriesList'
import Star from '../assets/images/star_16px.png'
import axios from "axios"
import { generatePath, Link, useNavigate } from 'react-router-dom'
import moment from 'moment'

function Movies() {
  // const Movie = props => {
  //   const [movies, setMovies] = useState([])
  //   const [searchTitle, setSearchTitle] = useState('')
  //   const [filter, setFilter] = useState('')
  //   const [movieId, setMovieId] = useState('')
  // }
  
  const [clicked, setClicked] = useState(false)
  const [filter, setFilter] = useState('All')

  const [movies, setMovies] = useState([])
  // useEffect(() => {
  //   axios.get(`http://localhost:8000/api/movie`).then((getData)=> {
  //       setMovies(getData.data)
  //   })
  // })

  //console.log(filter)

  if(!clicked) {
    try {
      axios.get(`http://localhost:8000/api/movie`).then((getData)=> {
          setMovies(getData.data)
      })
      setClicked(true)
    } catch (error) {
      
    }
  }


  const handleClick = async(e, param) => {
    e.preventDefault()
    //console.log(e);
    setFilter(param)
    try {
      if (filter === 'All') {
        await axios.get(`http://localhost:8000/api/movie`).then((getData)=> {
          setMovies(getData.data)
        })
      }
      else {
        await axios.get(`http://localhost:8000/api/movie?cat=${filter}`).then((getData) => {
          setMovies(getData.data)
        })
      }
    } catch (error) {
      
    }
  }

  const history = useNavigate()

  const handleProceed = (e, id) => {
    id && history(generatePath('/movies/detailfilm/:id', {id}))
  }

  const categoriesList = CategoriesList.map(({genre}, index) => {
    return (
      <button 
        onClick={(e) => handleClick(e, e.target.value)}
        className= 'btn-filer'
        value={genre}
        key={index}
      >
        {genre}
      </button>
    )
  })

  return (
    <div className='movies'>
      
      <div className='filter'>
        <h2 style={{letterSpacing: '1px', fontSize: '26px', marginLeft: '24px'}}>Categories</h2>
        <div className='btns-filter' style={{marginLeft: '24px'}}>
          {categoriesList}
        </div>

        <div className='list-movies'>
          {movies.map((item) => (
            <div class="row">
              <div class="column">
                {/* <Link to='detailfilm/:' style={{ textDecoration: 'none' }}>
                  <img className='col-img' src={item.img} alt={item.tittle}/>
                </Link> */}
                <img onClick={(e) => handleProceed(e, item._id)} className='col-img' src={item.img} alt={item.tittle}/>

                <div>
                    <h2 onClick={(e) => handleProceed(e, item._id)} className='ct-title'>{item.tittle}</h2>
                  
                  <p className='ct-rate'>{item.average_vote} <img className='ct-star' src={Star} alt='star'/> </p>
                  <p className='ct-date'>{moment(item.release_date).utc().format('MM-DD-YYYY')}</p>
                </div>
              </div>
            </div>
          ))}
          
        </div>

      </div>
    </div>
  )
}

export default Movies