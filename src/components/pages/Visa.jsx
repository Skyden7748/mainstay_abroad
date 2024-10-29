import React from 'react'
import './Visa.css'
import { useHref } from 'react-router-dom'

function Visa() {
  return (
    <div className='visa-main'>
        <div className='visa-heading'>
            <div className='visa-sub-heading'>
                <h1>VISA</h1>
                <p>Discover easy and efficient visa processing tailored to your travel needs.</p>
            </div>
        </div>
        <div className='visa-content'>
          <div className='visa-content-heading he'>
            <h1>Your Gateway to Hassle-Free Travel</h1>
            <p>Navigating the visa application process can be daunting, but at Mainstay Abroad, we make it simple and stress-free. </p>
          </div>
          <div className='visa-content-start'>
            <div className='visa-content-left'>
                <div className='visa-content-left-heading'><h1>Comprehensive Visa Assistance</h1></div>
                <div className='visa-content-left-line'>
                    <h1></h1>
                    <p>Our Comprehensive Visa Assistance services cover all your visa needs, ensuring a smooth process. For Tourist Visas, whether it’s a short vacation or an extended holiday, we help you secure your visa with ease. Our Business Visa services streamline corporate travel with tailored solutions to meet business requirements. If you’re a student heading abroad, our Student Visa assistance ensures you obtain the necessary permits for your studies. For professionals, our Work Visa support simplifies the process of securing work permits for various global destinations. We’re here to guide you at every step, providing personalized support for your unique visa needs.</p>


                </div>
                <div className='visa-content-left-button '>
                    <h1>By clicking the button below, you can fill a form. You can choose the type of visa and services you need.</h1>
                    <button onClick={() => window.location.href = 'https://form.jotform.com/243020447050038'}>Lets get started</button>
                </div>
                {/* <div className='visa-content-left-line'>
                    <a href='/business_visa'>Business Visas</a>
                    <p>Streamline your business travel plans with our efficient business visa services, tailored to meet corporate needs.</p>
                </div>
                <div className='visa-content-left-line'>
                    <a href='/student_visa'>Student Visas</a>
                    <p>Embarking on an educational journey abroad? Our team assists in obtaining the necessary student visa for your studies.</p>
                </div>
                <div className='visa-content-left-line'>
                    <a href='/work_visa'> Work Visas</a>
                    <p>Ready to take your career overseas? We offer support in securing work visas for various international destinations.</p>
                </div> */}
               
            </div>
            <div className='visa-content-right'>
             <div className='visa-content-left-heading'><h1 >Why Choose Us for Your Visa Needs</h1></div>
            <div className='visa-content-left-line'>
                    <h1>Expert Guidance</h1>
                    <p>Our experienced visa consultants provide personalized advice and support tailored to your specific travel plans.</p>
                </div>
                <div className='visa-content-left-line'>
                    <h1>Document Preparation</h1>
                    <p>We assist you in gathering and organizing all necessary documents, ensuring your application is complete and accurate.</p>
                </div>
                <div className='visa-content-left-line'>
                    <h1>Application Submission</h1>
                    <p>We handle the submission process, liaising with consulates and embassies to facilitate timely processing.</p>
                </div>
                <div className='visa-content-left-line'>
                    <h1>Status Updates</h1>
                    <p>Stay informed with regular updates on the status of your visa application, so you always know where you stand.</p>
                </div>
                <div className='visa-content-left-line'>
                    <h1>Problem Resolution</h1>
                    <p>Encountered an issue? Our team is adept at resolving common visa application problems quickly and efficiently.</p>
                </div>


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
    </div>
  )
}

export default Visa