import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>We bring your favorite flavors closer to you with fast, fresh, and reliable food delivery. Enjoy great taste, anytime, anywhere.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""  />
                    <img src={assets.twitter_icon} alt=""  />
                    <img src={assets.linkedin_icon} alt=""  />
                </div>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 703-445-4443</li>
                    <li>contact@tomato.com</li>
                </ul>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 @ Tomato.con - All Rights Reserved.</p>

    </div>
  )
}

export default Footer