import React from 'react'
import './Footer.css'

import footer_logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>AeroWear</p>
      </div>
      <ul className="footer-links">
        <li>Brand</li>
        <li>Products</li>
        <li>Services</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2023 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
