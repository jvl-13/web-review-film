import React from 'react'
import logo from '../assets/images/movieLogo.png'
import './Signin.css'

function Signin(){

    return(
        <div className='login'>
        <div className='login-signin'>
            <div className='login-logo'>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
            <div className='login-form'>
                    <form>
                    <input className='login-input' type='email' name='email' placeholder='email...'/>
                    <input className='login-input' type='password' name='pwd' placeholder='password...'/>
                    <button className='login-button'>Login</button>
                </form>
                
            </div>
           
            <div>
                ------------------------------  or  -----------------------------<br/>
            </div>
            <div className='login-forgot-password'>
                <a href={'https://www.youtube.com/watch?v=7xuKwIa5x9Q'}>Forgot password?</a>
            </div> 
        </div>
        <div className='login-signup'>
                <div>
                    Don't have an account? <br/>
                </div>
                <div> 
                    Sign up
                    {/* <Link to="/pages/Signin">Signin</Link> */}
                </div>
            </div>
        </div>   
        )          
    }
export default Signin




