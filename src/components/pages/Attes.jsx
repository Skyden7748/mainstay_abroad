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
            <div className='at-box'>
              <p>INDIA</p>
            </div>
            <div className='at-box'>
              <p>UAE MOFA</p>
            </div>
            <div className='at-box'>
              <p>UAE</p>
            </div>
            <div className='at-box'>
              <p>OMAN</p>
            </div>
            <div className='at-box'>
              <p>CANADA CRIMINAL RECORD CERTIFICATE</p>
            </div>
            <div className='at-box'>
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
          <div className='form-container1'>
             <form className="form">
      <div className="title">Get in touch</div>
      <input type="text" placeholder="Name" className="input" />
      <input type="text" placeholder="Phone Number" className="input" />
      <input type="text" placeholder="Email Id" className="input" />
      <textarea placeholder="Query" className="textarea"></textarea>
      <button type="submit">Submit</button>
    </form>
            </div>
        
    </div>
  )
}

export default Attes