import React from 'react'

function Signin() {
  return (
    <div>Signin</div>
  )
}

export default Signin


// import React from 'react';
// import {Link} from 'react-router-dom'
// import Signin from '../Signin/Signin';
// import {ReactComponent as Logo} from '../../assets/instagram.svg'
// import './login.css';
// import { Route } from 'react-router-dom';
// class Login extends React.Component{
//     state={
//         email:'',
//         pwd:''
//     }

//     handleChange = (e) =>{
//         const {name,value} = e.target
//         this.setState({[name]:value})
//     }

//     handleSubmit = (e) =>{
//         e.preventDefault()
//         this.props.isLogin(true)
//     }
//     render(){
//         return(
//             <div className='login'>
//                 {/* <div className='login-poster'>
//                     <img src='https://cdn.shopify.com/s/files/1/0581/5012/5749/products/fefab4_27d87781f56b4c50b6ef5c18e83c11e4_mv2_475x700.jpg?v=1625650528'/>
//                 </div> */}
//             <div className='login-signin'>
//                 <div className='login-logo'>
//                     <Logo/>
//                 </div>
//                 <div className='big-form'>
//                         <form onSubmit = {this.handleSubmit}>
//                         <input type='email' name='email' placeholder='email...' required onChange={this.handleChange}/>
//                         <input type='password' name='pwd' placeholder='password...' required onChange={this.handleChange}/>
//                         <button onSubmit={this.handleSubmit}>Login</button>
//                     </form>
                    
//                 </div>
//                 <div>
//                     -------------------  or  -----------------<br/>
//                 </div>
//                 <div className='login-forgot-password'>
//                     <a href={'https://www.youtube.com/watch?v=7xuKwIa5x9Q'}>Forgot password?</a>
//                 </div> 
//             </div>
//             <Route>
//                 <div className='login-signup'>
//                     <div>
//                         Don't have an account? <br/>
//                     </div>
//                     <div> 
//                         <Link to="/Pages/Signin">Signin</Link>
//                     </div>
//                 </div>
//                 <Route path="/Pages/Signin">
//                     <Signin />
//                 </Route>
//             </Route>
            
//             </div>
           
//         )
//     }
// }
// export default Login;


