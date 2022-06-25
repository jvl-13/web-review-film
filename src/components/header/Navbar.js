import React, { useState, useEffect } from 'react'
import { MenuList } from './MenuList'
import logo from '../assets/images/movieLogo.png'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import { Link, NavLink, useNavigate, generatePath } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import {setGuest} from '../../features/users/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Navbar() {
    const userStoreId = useSelector(state => state.user.userId)
    const userStoreToken = useSelector(state => state.user.accessToken)
    const userRole = useSelector(state => state.user.role)
    const usernaem = useSelector(state => state.user.username)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [clicked, setClicked] = useState(false)
    const menuList = MenuList.map(({ url, title}, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName='active'>{title}</NavLink>
            </li>
        )
    })
    const history = useNavigate()

    useEffect(() => {
      // console.log(userStoreId)
      // console.log('navbar')
    },[userStoreId])

  const handleProceed = (e, text) => {
    text && history(generatePath('/search/:text', {text}))
    setSearch('')
  }

    const handleClick = () => {
        setClicked(!clicked)
    }

    const logout = async(e) => {
      e.preventDefault()
      await dispatch(setGuest())
      history('/')
    }
  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt='logo'></img>

        <div className='menu'>
            <ul className={clicked? 'links' : 'links close'}>
              <li>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
              </li>
              <li>
                <NavLink exact to='/movies' activeClassName='active'>Category</NavLink>
              </li>
              
              <li className={userRole === 0 ? 'link-hide' : 'link-favorite'}>
                <NavLink exact to='/favorite' activeClassName='active'>Favorite</NavLink>
              </li>
              <li className={userRole === 2 ? 'link-admin' : 'link-hide' }>
                <NavLink exact to='/admin' activeClassName='active'>Admin</NavLink>
              </li>
            </ul>
        </div>
        
        <div className={clicked? 'search' : 'search close'}>
          <input 
            type="text" 
            placeholder='Search movies...'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          ></input>
          <SearchIcon onClick={(e) => handleProceed(e, search)} style={{cursor: 'pointer'}}/>
        </div>

        {userStoreId === null ? (<div className='button'>
          <Link to='/signin'>
            <button className='sign-in'>Sign in</button>
          </Link>
        </div>): (<div className='user_logo'>
          
            {/* <AccountCircleRoundedIcon style={{ fontSize: '40px' }}/> */}
              <h5 className='user_name' style={{ fontSize: '16px' }}>{usernaem}</h5>
            <ExitToAppIcon onClick={(logout)} style={{ fontSize: '25px', cursor:'pointer' }}/>
        </div>)}
        
        <div className='menu-icon' onClick={handleClick}>
            {clicked ? <Close className='icon'/> : <MenuIcon className='icon'/>}
        </div>
    </div>
  )
}

export default Navbar