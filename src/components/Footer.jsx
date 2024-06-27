import React from 'react'
import './Footer.css'
import { FaYoutube, FaGithub, FaFacebook, FaInstagram, FaTwitter ,FaMapMarkerAlt , FaPhone , FaEnvelope} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">

    <div className="sub-footer">
   
       <div className="footer_1st">
        <div className="footer_1st_top">
            <h1>Mainstay Abroad</h1>
           
            
            
        </div>
        <div className='footer_1st_bottom_container'>
        <div className='footer_1st_bottom'>
        <h1><FaFacebook/></h1>
        <h1><FaInstagram/></h1>
        <h1><FaTwitter/></h1>
        </div>
        </div>
       </div>
       <div className="footer_2nd">
        <div className="footer_2nd_top">
        <h1>Contact Us</h1>
        </div>
        <p><span className='iconsss'>< FaMapMarkerAlt /></span> A-102, Janaki Bhawan, 3rd Floor,Nayapalli,Bhubaneswar</p>
        <p><span className='iconsss'>< FaPhone /></span> +91 9178017011</p>
        <p><span className='iconsss'>< FaEnvelope /></span>   mainstayorg.info@gmail.com</p>
       </div>
       <div className="footer_3rd">

        <div className='footer_3rd_top'>
            <h1>Policy Links</h1>
           
        </div>
        <div className='footer_3rd_bottom'>
            <a href="">Terms and Conditions</a>
            <a href="">Refund and Return Policy</a>
            <a href="">Payment Policy</a>
            </div>
       </div>
   
    </div>
   
   </div>
  )
}

export default Footer