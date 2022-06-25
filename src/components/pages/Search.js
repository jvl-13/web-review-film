import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import Star from '../assets/images/star_16px.png'
import { generatePath, Link, useNavigate } from 'react-router-dom'
import moment from 'moment'
import './Movies.css'

function Search() {
    const [movies, setMovies] = useState([])
    const {text} = useParams()

    useEffect(() => {
        axios.post(`http://localhost:8000/api/movie/search/${text}`).then((getData)=> {
                setMovies(getData.data)
            //console.log(JSON.stringify(getData?.data))
        })
    }, [text])

    const history = useNavigate()

    const handleProceed = (e, id) => {
        id && history(generatePath('/movies/detailfilm/:id', {id}))
    }

  return (
    <div className='searchpage' >
        <div className='filter'>
    <div className='list-movies'>
        <p style={{fontSize: '20px', marginLeft: '10px', marginBottom: '10px', fontWeight: 'bold'}}>Search for '{text}'</p>
            <div>
            {movies.map((item) => (
                <div class="row">
                    <div class="column">
                    {/* <Link to='detailfilm/:' style={{ textDecoration: 'none' }}>
                        <img className='col-img' src={item.img} alt={item.tittle}/>
                    </Link> */}
                    <img onClick={(e) => handleProceed(e, item._id)} className='col-img' src={item.img} alt={item.tittle}/>
        
                    <div>
                        <Link to='detailfilm' style={{ textDecoration: 'none' }}>
                        <h2 className='ct-title'>{item.tittle}</h2>
                        </Link>
                        <p className='ct-rate'>{item.average_vote} <img className='ct-star' src={Star} alt='star'/> </p>
                        <p className='ct-date'>{moment(item.release_date).utc().format('MM-DD-YYYY')}</p>
                    </div>
                    </div>
                </div>
                ))}
                </div>
        
    </div>
    </div>
    </div>
  )
}

export default Search