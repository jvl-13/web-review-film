import React from 'react'
import logo from '../assets/images/movieLogo.png'
import './Signup.css'

class Signup extends React.Component{
  state={
            email:'',
            pwd:'',
            cfpwd:''
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
        <div className='signup'>
        <div className='signup-signin'>
            <div className='signup-logo'>
                <img className='logo' src={logo} alt='logo'></img>
            </div>
            <div className='signup-form'>
                    <form onSubmit = {this.handleSubmit}>
                    <input type='email' name='email' placeholder='Email...' required onChange={this.handleChange}/>
                    <input type='password' name='pwd' placeholder='Password...' required onChange={this.handleChange}/>
                    <input type='password' name='cfpwd' placeholder='Confirm password...' required onChange={this.handleChange}/>
                    <button onSubmit={this.handleSubmit}>Sign up</button>
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
}
export default Signup