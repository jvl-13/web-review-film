import React from 'react'

function NavbarUser() {
    const menuList = MenuList.map(({ url, title}, index) => {
        return (
            <li key={index}>
                <a href={url}>{title}</a>
            </li>
        )
    })
    return (
        <div className='navbar'>
            <img className='logo' src={logo} alt='logo'></img>
    
            <div className='menu'>
                <ul className='links'>{menuList}</ul>
            </div>
            
            <div className='search'>
              <SearchIcon />
              <input type="text" placeholder='Search movies...'></input>
            </div>
    
            <div className='user_logo'>
              <Avatar />
              <h5 className='user_name'>Lai Vo</h5>
            </div>
    
            <div className='menu-icon'>
                <i className='icon'><MenuIcon /></i>
            </div>
        </div>
      )
}

export default NavbarUser