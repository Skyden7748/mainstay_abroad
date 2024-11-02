import React from 'react'
import './Work.css'

function work() {
  return (

<>
       <div className='heading'>
        <div className='sub-heading'>
          <h1>Work Abroad</h1>
          <p>Expand your career horizons with Mainstay Abroad. We’re here to guide and support your work abroad aspirations.</p>
        </div>
        </div>

        <div className='travel-cards '>
         
         <div className='tarvel-card c11'>
           <div className='tarvel-card-img'>

           </div>
           <div>
             <h1>Profile Set up</h1>
             <p>V, Resume, LOR, SOP, MOI, Certificates, LOM, LinkedIn, Emails, Job Search, Profile Matching.</p>
           </div>
         </div>

         <div className='tarvel-card c22'>
            <div className='tarvel-card-img'>

            </div>
            <div>
              <h1>Appointment</h1>
              <p>
              Interviews Questionnaire, Personal Interaction, VISA interview, Counseling, Job Interviews</p>
            </div>

         </div>
         


         <div className='tarvel-card c33'>
            <div className='tarvel-card-img'>

            </div>  
            <div>
              <h1>Work VISA</h1> 
              <p>We assist for documentations, review, application and submission.</p>   
            </div>
         </div>

      </div>
      
      <div className='work-content-one' >
          
          <h1 >Comprehensive Job Seeking Support</h1>
          <p >At Mainstay Abroad, we offer comprehensive job-seeking assistance for individuals aspiring to work abroad. Our services include professional CV/resume creation, certificate verification, and profile matching to connect you with the best-suited opportunities. We also handle job applications on your behalf, ensuring you have the best chance of success in securing a position overseas.</p>
            
      </div>

      <div className='travel-content-two'>

        <div className='travel-content-two-element'>
            <h1>IELTS/PTE / TOEFL /OET Training </h1>
            <p>Proficiency training for IELTS, PTE, TOEFL, and other language exams to enhance your skills. It helps the applicants to showcase the language proficiency level to meet up the requirements of work abroad</p>
        </div>
        <div className='travel-content-two-element'>
            <h1>Visa Processing Services</h1>
            <p>Expert assistance with various visa types including tourist, work, and student visas.</p>
        </div>
        <div className='travel-content-two-element'>
            <h1>Career Counseling</h1>
            <p>Guidance on overseas job placements and education opportunities tailored to your profile. We prepare documents for employers and as per job opportunities.</p>
        </div>
        
      </div>
      <div className='travel-contact'>
       <button onClick={() => window.location.href = '/contact'} className='travel_button'>
        Get in touch 
       </button >
       <p>Let us know about your requirements.</p>
      </div>


        </> 
    
  )
}

export default work