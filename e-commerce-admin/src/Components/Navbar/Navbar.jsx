import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/logo.png'
import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='nav'>
  <div className='nav-left'>
    <img src={navlogo} className='nav-logo' alt="" />
    <p className='nav-text'>AeroWear</p>
  </div>
  <img src={navprofileIcon} className='nav-profile' alt="" />
</div>

  )
}

export default Navbar
