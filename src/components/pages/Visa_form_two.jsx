import React from 'react'
import './visa-form-two.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../Popup';

function Visa_form_two() {


  const [showPopup, setShowPopup] = React.useState(false);

  const form = useRef();
  
 



  const sendEmail = (e) => {

    setShowPopup(true);
    e.preventDefault();

    emailjs
      .sendForm('service_cv66ulo', 'template_vp190bm', form.current, {
        publicKey: 'jpLHwZ4Nr6v4ozupx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      setTimeout(() => {
        form.current.reset();
      }, 500);
    };

  return (
    <div className='visa-main'>
    <div className='visa-heading'>
        <div className='visa-sub-heading1'>
            <h1>BUSINESS VISA</h1>
            <p>Streamlined business visa solutions designed for your professional travel needs.</p>
        </div>
    </div>
    <div className='visa-content'>
      <div className='visa-content-heading bizz'>
        <h1>Your Gateway to Hassle-Free Travel</h1>
        <p>Navigating the visa application process can be daunting, but at Mainstay Abroad, we make it simple and stress-free. </p>
      </div>
      <div className='visa-content-start'>
        <div className='visa-content-left'>
        <div className='visa-content-left-heading'><h1 >Tourist Visa details</h1></div>
        <div className='visa-content-left-line'>
                <h1>Expert Guidance</h1>
                <p>Our experienced visa consultants provide personalized advice and support tailored to your specific travel plans.</p>
            </div>
            <div className='visa-content-left-line'>
                <h1>service details</h1>
                <p>We assist you in gathering and organizing all necessary documents, ensuring your application is complete and accurate.</p>
            </div>
            <div className='visa-content-left-line'>
                <h1>service details</h1>
                <p>We handle the submission process, liaising with consulates and embassies to facilitate timely processing.</p>
            </div>
            <div className='visa-content-left-line'>
                <h1>service details</h1>
                <p>Stay informed with regular updates on the status of your visa application, so you always know where you stand.</p>
            </div>
            
           
        </div>
        <div className='visa-content-right'>
        <form className="form"  ref={form} onSubmit={sendEmail}  >
      <div className="title">Contact us</div>
      <input type="text" placeholder="Name" className="input" required name="p_name" />
      <input type="text" placeholder="Email Id" className="input" required name="e_mail"/>
      <input type="text" placeholder="Mobile Number" className="input"required name="mob"  />
     
      <select  placeholder="Country" className="inputf" name="country">

        <option>USA</option>
        <option>CANADA</option>
        <option>JAPAN</option>
        <option>SINGAPORE</option>
        <option>UK</option>
        <option>GERMANY</option>
        <option>FRANCE</option>
        <option>MALASIA</option>
        
        

      </select>
      <textarea placeholder="Message" className="textarea" name="message"></textarea>
      <button type="submit">Submit</button>
    </form>


        </div>
        
      </div>
      <div className='contires-new'>
      <div class="slider">
<div class="slide-track">
<div class="slide">
  <img src="/images/canada.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/usa.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/england.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/japan.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/eu.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/china.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/uae.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/sa.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/aus.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/bra.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/thai.svg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/pore.jpg" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/mal.png" height="100" width="200" alt="" />
</div>
<div class="slide">
  <img src="/images/Flag-Indonesia.webp" height="100" width="200" alt="" />
</div>
</div>
</div>
</div>
    </div>
    <Popup trigger={showPopup} setTrigger={setShowPopup}>
      <h3>ThankYou!! your details have been submitted.</h3>
    </Popup>
</div>
  )
}

export default Visa_form_two