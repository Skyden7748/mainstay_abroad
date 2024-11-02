import React from 'react'
import './Attes.css'

function Attes() {
  return (
    <div className='at-main'>
     
        <div className='at-heading'>
          <div className='at-sub-heading'>
          <h1>Embassy Document Attestation</h1>
          <p>Get our assistance for documents Legalization, Apostille, Attestation, Authentication, Stamping and Translation Requirement</p>
          </div>
        </div>
        <div className='at-content1'>
          <div className='at-content1-1'>
            <div className='at-box ind'>
              <p>INDIA</p>
            </div>
            <div className='at-box uaemofa'>
              <p>UAE MOFA</p>
            </div>
            <div className='at-box uae'>
              <p>UAE</p>
            </div>
            <div className='at-box oman'>
              <p>OMAN</p>
            </div>
            <div className='at-box canada'>
              <p>CANADA CRIMINAL RECORD CERTIFICATE</p>
            </div>
            <div className='at-box finland'>
              <p>FINLAND</p>
            </div>
          </div>
        </div>
        
          <div className='at-content2'>
            <p>At Mainstay Abroad, we specialize in providing comprehensive attestation services for all your documentation needs. Whether you're navigating international regulations or ensuring your documents meet embassy requirements, our expert team is here to assist you every step of the way.
            Our Services Include:</p>
          </div>
          <div className='at-content3'>
            <h3>Our Services Include:</h3>
            <p><span className='highlight'>Embassy Attestation:</span> Seamlessly authenticate your documents for use in foreign countries.</p>
            <p><span className='highlight'>HRD Attestation:</span>Ensure your educational qualifications are recognized globally.</p>
            <p><span className='highlight'>MEA Attestation:</span>Get your documents verified by the Ministry of External Affairs for international acceptance.</p>
            <p><span className='highlight'>Apostille Attestation:</span>Simplify the process of document verification for countries part of the Hague Convention.</p>
            <p><span className='highlight'>Educational Attestation:</span>Validate your academic credentials with ease.</p>
            <p><span className='highlight'>Document Attestation:</span>Comprehensive services for all types of documents.</p>
            <p><span className='highlight'>Non-Educational Attestation:</span>Ensure your non-educational documents are properly attested.</p>


          </div>
          <div className='travel-contact ates'>
       <button onClick={() => window.location.href = '/contact'} className='travel_button'>
        Get in touch 
       </button >
       <p>Let us know about your requirements.</p>
      </div>
        
    </div>
  )
}

export default Attes