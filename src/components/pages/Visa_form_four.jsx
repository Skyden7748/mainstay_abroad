import React from 'react'

function Visa_form_four() {
  return (
    <div className='visa-form'>
    <div className='visa-title'> <h1>Work Visa</h1></div>
    <div className='form-handler'>
    <form className="form">
      <div className="title">Contact us</div>
      <input type="text" placeholder="Name" className="input" />
      <input type="text" placeholder="Email Id" className="input" />
      <input type="text" placeholder="Phone Number" className="input" />
      <textarea placeholder="Message" className="textarea"></textarea>
      <button type="submit">Submit</button>
    </form>
    </div>
     
    </div>
  )
}

export default Visa_form_four