import React, { useState } from 'react'
import { MenuList } from './MenuList'
import logo from '../assets/images/movieLogo.png'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';

function Navbar() {
    const [clicked, setClicked] = useState(false)
    const menuList = MenuList.map(({ url, title}, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName='active'>{title}</NavLink>
            </li>
        )
    })

    const handleClick = () => {
        setClicked(!clicked)
    }
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt='logo'></img>

        <div className='menu'>
            <ul className={clicked? 'links' : 'links close'}>{menuList}</ul>
        </div>
        
        <div className={clicked? 'search' : 'search close'}>
          <SearchIcon />
          <input type="text" placeholder='Search movies...'></input>
        </div>

        <div className='button'>
          <button className='sign-in'>Sign in</button>
        </div>

        <div className='menu-icon' onClick={handleClick}>
            {clicked ? <Close className='icon'/> : <MenuIcon className='icon'/>}
        </div>
    </div>
  )
}

export default Navbar