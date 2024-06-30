import React from 'react'
import './About.css'
function About() {
  return (
    
    <div className='about-main'>
        <div className='about-heading'>
          <div className='about-sub-heading'>
          <h1>About Us</h1>
          <p>Learn more about our journey and how we create unforgettable travel experiences.</p>
          </div>
        </div>
        <div className='about-content'>
         <div className='about-content-left'>
            <div className='about-content-left-lines black'>
                <h1>Who We Are</h1>
                <p>Welcome to Mainstay Abroad, your trusted partner in crafting memorable travel experiences and seamless visa assistance. At Mainstay Abroad, we are a dedicated team of travel enthusiasts and visa experts committed to making your travel dreams a reality. Whether you're planning a relaxing getaway, a business trip, or an adventure-filled holiday, we've got you covered.</p>
            </div>
            
            
            <div className='about-content-left-lines black'>
                <h1>Our Values</h1>
                <p><span className='about-span'>Customer-Centric:</span> Your satisfaction is our top priority. We listen, understand, and deliver beyond expectations.</p>
                <p><span className='about-span'>Expertise:</span> With years of experience in the travel and visa industry, our knowledgeable team ensures you receive the best advice and service.</p>
                <p><span className='about-span'>Integrity:</span> We operate with transparency and honesty, building trust with our clients through every interaction.</p>
                <p><span className='about-span'>Innovation:</span> Continuously improving our services by embracing new technologies and ideas to enhance your travel experience.</p>


            </div>
            <img src="/images/flights.png" alt="about" />
            
            <div className='about-content-left-lines'>
                <h1>Join Us on Your Next Adventure</h1>
                <p>Embark on your next journey with confidence, knowing that [Your Agency Name] is here to support you every step of the way. Whether you’re traveling for leisure, work, or study, we’re here to ensure your experience is smooth and enjoyable. Reach out to us today and let’s start planning your next adventure!</p>
            </div>

     
         </div>
         <div className='about-content-right'>
            <img src="/images/travellerone.png" alt="about" />
            <div className='about-content-left-lines'>
                <h1>Our Mission</h1>
                <p>Our mission is to simplify the travel and visa process, offering personalized services that cater to your unique needs. We believe that travel should be an enjoyable and stress-free experience, and we strive to provide exceptional service from the moment you contact us to the time you return from your trip.</p>
            </div>
            <div className='about-content-left-lines black'>
                <h1>Our Story</h1>
                <p>Mainstay Abroad began with a simple idea: to make travel accessible and enjoyable for everyone. Over the years, we have grown into a full-service agency, helping countless clients explore new destinations and create lasting memories. Our passion for travel drives us to continuously enhance our services and expand our offerings to meet the evolving needs of our clients.</p>
            </div>
            <div className='about-content-left-lines black'>
                <h1>What We Offer</h1>
                <p> <span className='about-span'>Personalized Travel Planning:</span> Tailored itineraries designed to fit your interests, budget, and schedule.</p>
                <p><span className='about-span'>Visa Assistance:</span> Comprehensive support to help you navigate the visa application process with ease.</p>
                <p><span className='about-span'>Visa Assistance:</span> Comprehensive support to help you navigate the visa application process with ease.</p>
                <p><span className='about-span'>24/7 Support:</span> Reliable customer service available around the clock to assist you during your travels.</p>
            </div>
         </div>
         

        </div>


    </div>
  )
}

export default About