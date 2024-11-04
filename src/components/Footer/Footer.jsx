import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footerContent">
        <div className="footerLeft">
        <div className="logo">FavFood</div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere fugiat minus ut sed?</p>
      
        </div>
        <div className="footercenter">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>privacy policy</li>
            </ul>
        </div>
        <div className="footerright">
        <h2>Get in touch</h2>
        <ul>
            <li>01557862096</li>
            <li>SSaeedseyam@gmail.com</li>
        </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-right">
       Made With Love By saeedSeyam © 2024
      </p>
    </div>
  )
}

export default Footer
