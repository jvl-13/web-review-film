import { Link, useNavigate } from 'react-router-dom'
import React, { useRef, useState, useEffect, useContext} from 'react'
import logo from '../assets/images/movieLogo.png'
import './Signin.css'
import Home from './Home'
//import AuthContext from '../context/AuthProvider'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { setUserAccess} from '../../features/users/userSlice'

function Signin(){
    const userStoreId = useSelector((state) => state.user.userId)
    const userStoreToken = useSelector((state) => state.user.accessToken)
  
    // console.log(userStoreId)
    // console.log(userStoreToken)
    
    const dispatch = useDispatch()

    //const {setAuth} = useContext(AuthContext)
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd])

    const history = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(`http://localhost:8000/api/auth/login`, JSON.stringify({email: user, password: pwd}),
                {
                    headers: {'Content-Type' : 'application/json'},
                    //withCredentials: true
                }
            )
            //console.log(JSON.stringify(response?.data))
            
            //const accessToken = response.data
            //setAuth({user, pwd, accessToken})
            dispatch(setUserAccess(response.data))
            //console.log(userStoreId)
            //console.log(userStoreToken)
    
            setUser('')
            setPwd('')
            setSuccess(true)
            history('/')
            
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing email or password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')
            } else if (err.response?.status === 404) {
                setErrMsg('Incorrect Password')
            } else {
                setErrMsg('Login failed')
            }
            errRef.current.focus()
        }
    }

    return(
        <>
            {success ? (
                <section>
                    {/* <NavbarUser /> */}
                    <Home />
                </section>
            ) : (
        <section>
            <div className='all'>
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive">{errMsg}</p>
            <div className='login'>
                <div className='login-signin'>
                    <div className='login-logo'>
                        <img className='logo' src={logo} alt='logo'></img>
                    </div>
                    <div className='login-form'>
                        <form onSubmit={handleSubmit}>
                            <label htmlFor='email'>Email:</label>
                            <input 
                                className='login-input' 
                                type='email' 
                                name='email' 
                                placeholder='Email...'
                                id='email'
                                ref={userRef}
                                autoComplete='off'
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                            />

                            <label htmlFor='password'>Password:</label>
                            <input 
                                className='login-input' 
                                type='password' 
                                name='pwd' 
                                placeholder='Password...'
                                id='password'
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                            />
                            <button className='login-button'>Login</button>
                        </form>
                    </div>
            
                    <div>
                        ------------------------------  or  -----------------------------<br/>
                    </div>
                    <div className='login-forgot-password'>
                        <a href='/#'>Forgot password</a>
                    </div> 
                </div>
                <div className='login-signup'>
                    <div>
                        Don't have an account? <br/>
                    </div>
                    <div> 
                    <Link to='/signup'>
                        Sign up
                    </Link>
                    </div>
                </div>
            </div>   
            </div>
        </section>
        )}
        </>
    )          
}
export default Signin