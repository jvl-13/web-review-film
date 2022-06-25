import {useRef, useState, useEffect} from 'react'
import logo from '../assets/images/movieLogo.png'
import './Signup.css'
import { Link } from 'react-router-dom'
import CloseIcon from '@material-ui/icons/Close'
import CheckIcon from '@material-ui/icons/Check'
import Signin from './Signin'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

function Signup(){
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    //const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    const [name, setName] = useState('')

    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)

    const [matchPwd, setMatchPwd] = useState('')
    const [validMatch, setValidMatch] = useState(false)
    const [matchFocus, setMatchFocus] = useState(false)

    const [errMsg, setErrMsg] = useState('')
    const [success, setSuccess] = useState(false)

    const history = useNavigate()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        console.log(user)
    }, [user])

    useEffect(() => {
        const result = PWD_REGEX.test(pwd)
        // console.log(result)
        // console.log(pwd)
        setValidPwd(result)
        const match = pwd === matchPwd
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(() => {
        setErrMsg('')
    }, [user, pwd, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const v1 = PWD_REGEX.test(pwd)
        if (!v1) {
            setErrMsg('Invalid Entry')
            return
        }
        try {
            const response = await axios.post(`http://localhost:8000/api/auth/register`,
                JSON.stringify({name: name, email: user, password: pwd}), 
                {
                    headers: {'Content-Type' : 'application/json'}
                }
            )
            // console.log(response.data)
            // console.log(JSON.stringify(response))
            history('/signin')
            setSuccess(true)
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response')
            } else if (error.response?.status === 401) {
                setErrMsg('Email already existed')
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus()
        }
    }

    return(
        <>
        {/* {success ? (
            <section>
                <Signin />
            </section>
        ) : ( */}
        <section>
            <div className='all'>
            <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}
            aria-live="assertive">{errMsg}</p>
            <div className='signup'>
            <div className='signup-signin'>
                <div className='signup-logo'>
                    <img className='logo' src={logo} alt='logo'></img>
                </div>
                <div className='signup-form'>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='email' >
                            Email:
                        </label>
                        <input 
                            className='signup-input' 
                            id='email'
                            type='email' 
                            name='email' 
                            placeholder='Email...' 
                            ref={userRef}
                            autoComplete='off'
                            onChange={(e) => setUser(e.target.value)}
                            required
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />

                        <label htmlFor='user-name' >
                            User Name: 
                        </label>
                        <input 
                            className='signup-input' 
                            type='text' 
                            name='username' 
                            placeholder='Username...' 
                            required
                            onChange={(e) => setName(e.target.value)}
                        />

                        <label htmlFor='password' className='labelpwd'>
                            Password:
                            <span className={validPwd ? 'valid' : 'hide'}>
                                <CheckIcon style={{fontSize: '15px'}}/>
                            </span>
                            <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
                                <CloseIcon style={{fontSize: '14px'}}/>
                            </span>
                        </label>
                        <input 
                            className='signup-input' 
                            type='password' 
                            name='pwd' 
                            placeholder='Password...'
                            id='password'
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? 'false' : 'true'}
                            aria-describedby='pwdnote'
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p style={{ marginBottom: '15px' }} id='pwdnote' className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
                            8 to 24 characters. <br />
                            Must include uppercase and lowercase letters, a number and a special character. <br/>
                            Allowed special characters: <span aria-label="exclamation mark">!</span>
                            <span aria-label="at symbol">@</span>
                            <span aria-label="hashtag">#</span>
                            <span aria-label="dollar sign">$</span>
                            <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor='confirm_pwd' >
                            Confirm Password:
                            <span className={validMatch && matchPwd ? 'valid' : 'hide'}>
                                <CheckIcon style={{fontSize: '15px'}}/>
                            </span>
                            <span className={validMatch || !matchPwd ? 'hide' : 'invalid'}>
                                <CloseIcon style={{fontSize: '15px'}}/>
                            </span>
                        </label>

                        <input 
                            className='signup-input'
                            type='password' 
                            name='cfpwd' 
                            placeholder='Confirm password...'
                            id='confirm_pwd'
                            onChange={(e) => setMatchPwd(e.target.value)}
                            required
                            aria-describedby='confirmnote'
                            aria-invalid={validMatch ? 'false' : 'true'}
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                        />
                        {/* <p id='confirmnote' className={matchFocus && !validMatch ? 'instruction' : 'offscreen'}>
                            Must match the first password input field.
                        </p> */}

                        <button className='signup-button'>
                            
                                Sign up
                        </button>
                        {/* // disabled={!validPwd || !validMatch ? true : false}> */}
                    </form>
                    
                </div>
                
            </div>
            <div className='signup-signup'>
                    <div>
                        Have an account? <br/>
                    </div>
                    <div> 
                    <Link to='/signin'>
                        Sign in
                    </Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
           
    {/* )} */}
    </> 
    )     
}
export default Signup