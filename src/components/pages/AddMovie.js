import {useState} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import './AddMovie.css'
import { useNavigate } from 'react-router-dom'

function AddMovie() {
    const userStoreToken = useSelector(state => state.user.accessToken)

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [over, setOver] = useState('')
    const [img, setImg] = useState('')
    const [trailer, setTrailer] = useState('')
    const [rate, setRate] = useState('')
    const [total, setTotal] = useState('')
    const [cat, setCat] = useState([])

    const [success, setSuccess] = useState(false)
    const history = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post(`http://localhost:8000/api/movie`,
            JSON.stringify({tittle: title, release_date: date, overview: over, img: img, trailer_id: trailer, average_vote: rate, total_voted: total, categories: cat}),
                {
                    headers: {'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${userStoreToken}`},
                    //withCredentials: true
                }
            )
            console.log(JSON.stringify(res?.data))
            setTitle('')
            setDate('')
            setOver('')
            setImg('')
            setTrailer('')
            setRate('')
            setTotal('')
            setCat([])
            setSuccess(true)
            history('/admin')
        } catch (error) {
            
        }
    }

  return (
    <div className='all'>
<div className='addmovie'>
        <h2 className='met'>Add new Movie</h2>
        <form onSubmit={handleSubmit}>
            <label className='add-label'>Title: </label>
            <input 
                required
                className='add-input'
                onChange={(e) => setTitle(e.target.value)}></input>
            
            <label className='add-label'>Release date: </label>
            <input required onChange={(e) => setDate(e.target.value)} className='add-input'></input>
            
            <label className='add-label'>Overview</label>
            <textarea required onChange={(e) => setOver(e.target.value)} className='add-input-spe'></textarea>
            
            <label className='add-label'>Imange URL</label>
            <input required onChange={(e) => setImg(e.target.value)} className='add-input'></input>
            
            <label className='add-label'>Trailer URL</label>
            <input required onChange={(e) => setTrailer(e.target.value)} className='add-input'></input>
            
            <label className='add-label'>Average vote</label>
            <input required onChange={(e) => setRate(e.target.value)} className='add-input'></input>
            
            <label className='add-label'>Total voted</label>
            <input required onChange={(e) => setTotal(e.target.value)} className='add-input'></input>
            
            <label className='add-label'>Categories</label>
            <input required onChange={(e) => setCat(e.target.value)} className='add-input'></input>
            
            <br/>
            <button className='moi'>Add</button>
        </form>
    </div>
    </div>
    
  )
}

export default AddMovie