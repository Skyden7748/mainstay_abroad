import React from 'react'
import './Study.css'

function Study() {
  return (
    <>
    <div className='heading'>
        <div className='sub-heading'>
          <h1>Study Abroad</h1>
          <p>Embark on your educational journey with Mainstay Abroad. We provide guidance and support to help you achieve your study abroad dreams.</p>
        </div>
      </div>

      <div className='study-cards'>
         
         
         <div className='study-card'>
          <h1>University Selection</h1>
          <p>We find suitable colleges or universities programmes for you. We also facilitate all supports end to end for admission and visa processing support. Our career analysists make counseling and create student profiles. We fully give professional support on CV,SOP, Cover Letter, Accommodation, Study Loan, Recruitments, LOR, Transcripts, MOI, and Documents.</p>
          <button className='study-btn' onClick={() => window.location.href = 'https://form.jotform.com/243033215867051'} >Get Started</button>
         </div>

         <div className='study-card'>
            <h1>VISA Services </h1>
            <p>We prepare proper checklists and help you arrange your documents for visa processing. Our team communicates with you for visa application and related supports to guide you for study visa. </p>
            <button className='study-btn' onClick={() => window.location.href = '/visa'} >Visa Assistance </button>

         </div>

      </div>

      <div className='career'>
          <h1>Career Guidance Services</h1>
          <p>Expert assistance for visas, education, and career opportunities tailored to your needs.</p>
          


      </div>
      <div className='study-cards'>
         
         
         <div className='study-card'>
          <h1>International Education</h1>
          <p>Guidance on course selection, university applications, and scholarship opportunities for aspiring students. At Mainstay Abroad, we are dedicated to helping you achieve your educational dreams on a global scale. Our expert team provides personalized guidance and support throughout your journey to study abroad, from choosing the right program to navigating the application process. With a vast network of partner institutions worldwide, we offer a diverse range of international education opportunities tailored to your goals and aspirations. Trust Mainstay Abroad to make your global education experience seamless and successful.</p>
          {/* <button className='study-btn'>Get Started</button> */}
         </div>

         <div className='study-card'>
            <h1>Visa Processing Help </h1>
            <p>Comprehensive support for various visa types including tourist, work, and student visas. Mainstay Abroad offers expert visa processing services to ensure a smooth and hassle-free application experience. With over a decade of experience, we guide clients through every step, from document preparation to submission, ensuring compliance with all regulations. Our professional team provides personalized support, making visa approval more efficient and less stressful. Trust Mainstay Abroad, "The way to reach," for all your visa needs, whether for study, work, or travel. </p>
            {/* <button className='study-btn'>Get Started</button> */}

         </div>

      </div>
      <div className='cnt'>
        <h1>USA <span className='difz'  >|</span> UK <span className='difz'>|</span> Canada <span className='difz'>|</span> Australia <span className='difz'>|</span> New Zealand <span className='difz'>|</span> Schengen <span className='difz'>|</span> Europ <span className='difz'>|</span> UAE & Asian</h1>
      </div>


      </>
  )
}

export default Study