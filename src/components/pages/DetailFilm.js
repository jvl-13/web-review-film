import React from 'react'
import './DetailFilm.css'
import Star from '../assets/images/star_16px.png'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'
import { useParams } from 'react-router-dom'
import {useState, useEffect, useRef} from 'react'
import axios from 'axios'
import moment from 'moment'
import { useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
import UpdateReview from './UpdateReview'
import BorderColorIcon from '@material-ui/icons/BorderColor'
import DeleteIcon from '@material-ui/icons/Delete'

function DetailFilm() {
  const userStoreId = useSelector(state => state.user.userId)
  const userStoreToken = useSelector(state => state.user.accessToken)
  const userRole = useSelector(state => state.user.role)

  const {id} = useParams()
  const [cat, setCat] = useState([])
  const [movie, setMovie] = useState('')
  const [reviews, setReviews] = useState([])
  const [errMsg, setErrMsg] = useState('')
  const [errMsgFav, setErrMsgFav] = useState('')
  const [post, setPost] = useState('')

  
  useEffect(() => {
    axios.get(`http://localhost:8000/api/movie/${id}`).then((getData)=> {
        setMovie(getData.data)
        setCat(getData.data.categories)

        //console.log(JSON.stringify(getData?.data))
    })
  }, [id])

  useEffect(() => {
    try {
      axios.get(`http://localhost:8000/api/review/${id}`).then((getData) => {
      setReviews(getData.data)
      //console.log(getData?.data)
    })
    } catch (error) {
      
    }
  })
  // console.log(JSON.stringify(movie))
  // console.log(cat)

  //console.log(id)
  const errRef = useRef()
  useEffect(() => {
    setErrMsg('')
  }, [post])

  const errFavRef = useRef()
  useEffect(() => {
    setErrMsgFav('')
  }, [])

  

  const handlePost = async (e) => {
    e.preventDefault()
    // console.log(userStoreId)
    // console.log(userStoreToken)
    if (userStoreId === null) {
      setErrMsg('Please Login')
    }
    else {
      try {
        const response = await axios.post(`http://localhost:8000/api/review`,
          JSON.stringify({content: post, user_id: userStoreId, movie_id: id}),
          {
            headers: {'Content-Type' : 'application/json',
                      'Authorization' : `Bearer ${userStoreToken}`},
          }
        )
        // console.log(response)
        console.log(JSON.stringify(response?.data))
        setPost('')
  
      } catch (err) {
        if(!err?.response) {
          setErrMsg('No Server Response')
        } else if (err.response?.status === 404) {
          setErrMsg('Review can not be empty')
        } else {
          setErrMsg('Post failed')
        }
      }
      errRef.current.focus()
    }   
  }

  const handleLike = async (e) => {
    e.preventDefault()
    if (userStoreId === null) {
      setErrMsgFav('Please Login')
    } else {
      try {
        await axios.post(`http://localhost:8000/api/favorite`,
          JSON.stringify({user_id: userStoreId, movie_id: id}),
          {
            headers: {'Content-Type' : 'application/json',
                      'Authorization' : `Bearer ${userStoreToken}`},
          }
        )
        // console.log(response)
        // console.log(JSON.stringify(response?.data))
      } catch (err) {
        if(!err?.response) {
          setErrMsgFav('No Server Response')
        } else if (err.response?.status === 401) {
          setErrMsgFav('Already in your list')
        } else {
          setErrMsgFav('Like failed')
        }
      }
      errRef.current.focus()
    }   
  }

  const handleDelete = async (e, id) => {
    //console.log(id)
    e.preventDefault()
    try {
      await axios.delete(`http://localhost:8000/api/review/${id}`,
        {
          headers: {'Authorization' : `Bearer ${userStoreToken}`},
        }
      )
    } catch (err){

    }
  }

  //console.log(userStoreId)

  return (
    <div className='detail-film'>
      <div className=''>
      <div className='fcontainer'>
          <div className='info'>
            <div className='film'>
              <h2 className='fname'>{movie.tittle}</h2>
              <p className='frate'>{movie.average_vote}<img src={Star} alt='star' style={{marginLeft: '4px'}}/> </p> 
            </div>
          
            <div className='fdate'>
              <p>{moment(movie.release_date).utc().format('MM-DD-YYYY')}</p>
            </div>
            
            <div className='btn-categories'>
              {/* {movie.categories.map((cat) => 
                <button className='btn'>{cat}</button>
              )} */}
              {cat.map((item) => 
                <button  className='btn'>{item}</button>
              )}
              
            </div>

            <div className='overview fover'>
              <h4 className='title'>Overview : </h4>
              <p className='ftext'>{movie.overview}</p>
            </div>
            
          </div>
        
          <div className='btn-favorite'>
              <button className='favorite' onClick={handleLike} ><FavoriteRoundedIcon style={{ fontSize: '40px', marginTop: '5px' }}/></button>
              
          </div>
          
        </div>
        <p style={{marginLeft: '90px', marginRight: '90px'}} ref={errFavRef} className={errMsgFav ? 'errmsglike' : 'offscreen'}
            aria-live="assertive">{errMsgFav}</p>
        <div className='intro'>
            <img className='movie-img' src={movie.img} alt='movie name' />
            <iframe className='movie-trailer'
            src={movie.trailer_id}
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />{" "}    
        </div>
      </div>
      <div className='all-review'>
        <div className='review'>
          <h2 className='label'>Reviews</h2>
          <div>
            <div className='add-review'>
              <AccountCircleRoundedIcon style={{ fontSize: '40px'}}/>
              <textarea 
                placeholder='Add your reviews here...'
                onChange={(e) => setPost(e.target.value)}
                value={post}
              ></textarea>
              
              {/* <input type="text" placeholder='Add your reviews here...'></input> */}
            </div>
            <button 
              className='post-btn'
              onClick={handlePost}
            >Post</button>
              <p ref={errRef} className={errMsg ? 'errpostmsg' : 'offscreen'}
              aria-live="assertive">{errMsg}</p>
            
          </div>
          {reviews !== [] ? (
            <div>
            {reviews.map((item) => (
            <div className='review-detail'>
              <div className='info-review'>
                <img src='https://drive.google.com/uc?export=view&id=1aWyBc77-oo6VGZ2D_P472iJdDPGalg6n' className='author-img' alt='avatar'/>
                <div className='author-info'>
                  <p className='author'>{item.user_id.name}</p>
                  <p className='date-review'>{moment(item.updatedAt).utc().format('MM-DD-YYYY')}</p>
                </div>
                <div className='group-btn' >
                  <Popup modal trigger={<button className='btn-editpost' style={{marginRight: '30px'}} disabled={ item.user_id._id !== userStoreId || userRole === 0 ? true : false}><BorderColorIcon /></button>}>
                    <UpdateReview id={item._id} text={item.content}/> 
                  </Popup>

                  <button className='btn-deletepost'
                    disabled={ item.user_id._id !== userStoreId || userRole === 0 ? true : false}
                    onClick={(e) => handleDelete(e, item._id)}
                    >
                      <DeleteIcon />
                  </button>
                </div>
                
              </div>
              <div className='detail'>
                <p>{item.content}</p>
              </div>
              
            </div>
          ))}
            </div>
          ): (
            <p>No review yet</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default DetailFilm