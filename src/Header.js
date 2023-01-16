import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

function Header() {
  return (
    <div className='header'>
      {/* Header */}
 
      <div className="header__left">
        
        <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="" />

        <div className="header__search">
          {/* Search icon */}
          <SearchIcon />
          <input type="text" />
        </div>

      </div>

      <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>

      </div>
      
    </div>
  )
}

export default Header
