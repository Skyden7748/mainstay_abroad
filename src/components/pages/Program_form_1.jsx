import React from 'react'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Popup from '../Popup';
import './Program_form_1.css'
function Program_form_1() {

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
            <h1>IELTS</h1>
            <p>Achieve your dreams with our comprehensive IELTS preparation tailored for success.</p>
        </div>
    </div>
    
    <div className='program-cards'>

    <div className="the_service_card1 card1">


         <h1>Writing</h1>

    </div>
    <div className="the_service_card1 card2 ">


         <h1>Reading</h1>

    </div>
    <div className="the_service_card1 card3">


         <h1>Listening</h1>

    </div>
    <div className="the_service_card1 card4">


         <h1>Speaking</h1>

    </div>
    


    </div>

    <div className='about-ielts'>
     <p>
     Mainstay Abroad provides Academic and General IELTS training. It is a 40 hours training program. You can choose offline and online training. There are tests, review, remarks, study materials, faculty interaction and exam registration services. You can avail practical training with exam guidance how to score targeted band. Our training module is based on exam patterns and additional skills for language proficiency is given high priority. Mainstay Abroad has a professional team of faculties who conduct training sessions and help learner achieve his or her target in the speculated time. Those who are also trying for PR in Canada or any other countries can apply for training, Students who are planning to study abroad cab obtain best training course for academic section. We also provide training support for UKVI. 
     </p>
    </div>

    <div className='visa-content'>
     
      <div className='visa-content-start'>
        <div className='visa-content-left'>
        <div className='visa-content-left-heading'><h1 >IELTS training details</h1></div>
        <div className='visa-content-left-line'>
                <h1>offline and online training</h1>
                <p>Mainstay Abroad offers flexible IELTS training programs in both offline and online formats, allowing students to choose the mode that best fits their schedule and preferences. Whether learning from home or attending in-person sessions, learners have access to a robust curriculum designed for interactive and effective learning.</p>
            </div>
            <div className='visa-content-left-line'>
                <h1>Regular Tests and Review</h1>
                <p>To monitor progress and ensure steady improvement, Mainstay Abroad provides regular tests and detailed reviews. After each test, learners receive personalized feedback, which includes remarks on strengths and areas for improvement. Study materials are also provided, enabling students to refine their skills continuously and be well-prepared for the actual IELTS exam.</p>
            </div>
            <div className='visa-content-left-line'>
                <h1>IELTS Details and Exam Registration</h1>
                <p>Mainstay Abroad not only offers training but also supports students through the IELTS registration process. With detailed insights into the exam pattern and structured exam guidance, learners are informed about how to strategically approach each section. Additionally, personalized coaching is available to help candidates achieve their targeted band scores.</p>
            </div>
            <div className='visa-content-left-line'>
                <h1>Expert Faculty Interaction and Guidance</h1>
                <p>Mainstay Abroad's team of experienced instructors delivers targeted training sessions, focusing on both exam-related skills and overall language proficiency. Faculty members are available for one-on-one interactions, offering practical tips and strategies to help students aiming for Canadian PR or studying abroad achieve their desired IELTS scores within a specified timeframe.</p>
            </div>
            
           
        </div>
        <div className='visa-content-right'>
        <form className="form"  ref={form} onSubmit={sendEmail}  >
      <div className="title">Contact us</div>
      <input type="text" placeholder="Name" className="input" required name="p_name" />
      <input type="text" placeholder="Email Id" className="input" required name="e_mail"/>
      <input type="text" placeholder="Mobile Number" className="input"required name="mob"  />
     
      {/* <select  placeholder="Country" className="inputf" name="country">

        <option>USA</option>
        <option>CANADA</option>
        <option>JAPAN</option>
        <option>SINGAPORE</option>
        <option>UK</option>
        <option>GERMANY</option>
        <option>FRANCE</option>
        <option>MALASIA</option>
        
        

      </select> */}
      <textarea placeholder="Your Requirement" className="textarea" name="message"></textarea>
        <div className='sep'><h1 >Multiple choice*</h1></div>
      <div class="checkbox-group">
                <label><input type="checkbox" name="choice" value="IELTS General Training" /> IELTS General Training</label>
                <label><input type="checkbox" name="choice" value="IELTS Academic" /> IELTS Academic</label>
                <label><input type="checkbox" name="choice" value="IELTS General UKVI" /> IELTS General UKVI</label>
                <label><input type="checkbox" name="choice" value="IELTS Academic UKVI" /> IELTS Academic UKVI</label>
            </div>

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

export default Program_form_1