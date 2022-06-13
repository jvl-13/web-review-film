import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/instagram.svg'
import './Signup.css';
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
                {/* <div className='Signup-poster'>
                    <img src='https://cdn.shopify.com/s/files/1/0581/5012/5749/products/fefab4_27d87781f56b4c50b6ef5c18e83c11e4_mv2_475x700.jpg?v=1625650528'/>
                </div> */}
            <div className='signup-signup'>
                <div className='signup-logo'>
                    <Logo/>
                </div>
                <div className='big-form'>
                    <form onSubmit = {this.handleSubmit}>
                        <input type='email' name='email' placeholder='Email' required onChange={this.handleChange}/>
                        <input type='password' name='pwd' placeholder='Password' required onChange={this.handleChange}/>
                        <input type='password' name='cfpwd' placeholder='Confirm password' required onChange={this.handleChange}/>
                        <button onSubmit={this.handleSubmit}>Sign up</button>
                    </form>
                    
                </div>
            </div>
            <div className='signup-login'>
                <div>
                    Have an account? <br/>
                    </div>
                <div> 
                    
                    <Link to="/Signin">Login</Link>
                    
                </div>
            </div>
            </div>
           
        )
    }
}
export default Signup;
