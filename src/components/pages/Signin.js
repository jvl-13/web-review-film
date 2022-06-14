import React from 'react'
import logo from '../assets/images/movieLogo.png'
import './Signin.css'

class Signin extends React.Component{
  state={
            email:'',
            pwd:''
        }
    
        handleChange = (e) =>{
            const {name,value} = e.target
            this.setState({[name]:value})
        }
    
        handleSubmit = (e) =>{
            e.preventDefault()
            this.props.isLogin(true)
        }
  render(){ 
    return(
        <div className='login'>
        <div className='login-signin'>
            <div className='login-logo'>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
            <div className='login-form'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
                    <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
                    <button onSubmit={this.handleSubmit}>Login</button>
                </form>
                
            </div>
           
            <div>
                -----------------------  or  ----------------------<br/>
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
}
export default Signin




