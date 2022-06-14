import React from 'react'
import logo from '../assets/images/movieLogo.png'
import './Signup.css'

function Signup(){
    return(
        <div className='signup'>
        <div className='signup-signin'>
            <div className='signup-logo'>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
            <div className='signup-form'>
                    <form>
                    <input className='signup-input' type='email' name='email' placeholder='Email...' />
                    <input className='signup-input' type='text' name='username' placeholder='Username...' />
                    <input className='signup-input' type='password' name='pwd' placeholder='Password...'/>
                    <input className='signup-input' type='password' name='cfpwd' placeholder='Confirm password...'/>
                    <button className='signup-button'>Sign up</button>
                </form>
                
            </div>
            
        </div>
        <div className='signup-signup'>
                <div>
                    Have an account? <br/>
                </div>
                <div> 
                    Sign in
                    {/* <Link to="/pages/Signin">Signin</Link> */}
                </div>
            </div>
        </div>   
        )          
    }
export default Signup