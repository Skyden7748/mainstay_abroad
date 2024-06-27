import React from 'react';
import './Contact.css';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Contact() {
  return (
    
    <div className='main-stuff'>
      <div className='heading'>
        <div className='sub-heading'>
          <h1>Get In Touch</h1>
          <p>Reach out to us for personalized travel advice and visa assistance.</p>
        </div>
      </div>
      <div className='content'>
        <div className='map'>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7484.677548086258!2d85.81123500000001!3d20.28624!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190941ffccc009%3A0xd61b67e834a31cfc!2sMAINSTAY%20ABROAD!5e0!3m2!1sen!2sin!4v1719154205435!5m2!1sen!2sin" 
          width="1920" 
          height="300" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
        <div className='contact-us'>
         <div className='contact-us-left'> 
          <div className='contact-us-left-lines-container'>
                <div className='contact-us-line'>
                     <h1>Address</h1>
                     <p><span className='iconss'>< FaMapMarkerAlt /></span> A-102, Janaki Bhawan, 3rd Floor,Nayapalli,Bhubaneswar</p>
                 </div>
                 <div className='contact-us-line'>
                     <h1>Mobile</h1>
                     <p><span className='iconss'>< FaPhone /></span> +91 9178017011</p>
                  </div>
                 <div className='contact-us-line'>
                     <h1>Email</h1>
                     <p><span className='iconss'>< FaEnvelope /></span> mainstayorg.info@gmail.com</p>
                 </div>
          </div> 
          
           </div>
         <div className='contact-us-right'> 
             <div className='form-container'>
             <form className="form">
      <div className="title">Contact us</div>
      <input type="text" placeholder="Name" className="input" />
      <input type="text" placeholder="Email Id" className="input" />
      <input type="text" placeholder="Subject" className="input" />
      <textarea placeholder="Message" className="textarea"></textarea>
      <button type="submit">Submit</button>
    </form>
            </div> 
          </div>
        </div>
      </div>
     
    </div>
  );
}

export default Contact;
