import React from 'react'
import './Footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import Logo from '../assets/images/movieLogo.png'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <img className='flogo' src={Logo} alt='logo' />
            <div className='social'>
                <a href='/#' ><FacebookIcon style={{fontSize: '35px'}}/></a>
                <a href='/#' ><InstagramIcon style={{fontSize: '35px'}}/></a>
                <a href='/#' ><TwitterIcon style={{fontSize: '35px'}}/></a>
                <a href='/#' ><YouTubeIcon style={{fontSize: '35px'}}/></a>
            </div>
            <div className='relative'>
                <h3>THE BASICS</h3>
                <ul>
                    <li><a href='/#'>About Review</a></li>
                    <li><a href='/#'>Contact Us</a></li>
                    <li><a href='/#'>Support Forum</a></li>
                    <li><a href='/#'>System Status</a></li>
                </ul>
            </div>
            <div className='legal'>
                <h3>LEGAL</h3>
                <ul>
                    <li><a href='/#'>Term of Use</a></li>
                    <li><a href='/#'>Privacy Policy</a></li>
                    <li><a href='/#'>Help</a></li>
                </ul>
            </div>
        </div>
        {/* <div className='social'>
            <img className='logo' src={Logo} alt='logo' />
            <ul className='link'>
                <li><a href='#' ><FacebookIcon /></a></li>
                <li><a href='#' ><InstagramIcon /></a></li>
                <li><a href='#' ><TwitterIcon /></a></li>
                <li><a href='#' ><YouTubeIcon /></a></li>
            </ul>
        </div>
        <div className='relative'>
            <ul>
                <li><a href='#'>Download App</a></li>
                <li><a href='#'>Download App</a></li>
                <li><a href='#'>Download App</a></li>
                <li><a href='#'>Download App</a></li>
                <li><a href='#'>Download App</a></li>

            </ul>
        </div> */}
        <p className='copyright'>All Right reserved by &copy;conceptial 2022</p>
    </div>
  )
}

export default Footer