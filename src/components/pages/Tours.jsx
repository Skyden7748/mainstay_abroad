import React from 'react'
import './Tours.css'

function Tours() {
  return (
    <div className='tours_main'>
       
       <div className='heading'>
        <div className='sub-heading'>
          <h1>Tour & Travel</h1>
          <p>Travel around the world with Mainstay Abroad, We can assist you with your travel plans.</p>
        </div>
      </div>

      <div className='travel-cards '>
         
         <div className='tarvel-card c1'>
           <div className='tarvel-card-img'>

           </div>
           <div>
             <h1>Travel</h1>
             <p>Travel around the world with Mainstay Abroad, We can assist you with your travel plans.</p>
           </div>
         </div>

         <div className='tarvel-card c2'>
            <div className='tarvel-card-img'>

            </div>
            <div>
              <h1>Visa Assistance for tourism</h1>
              <p>We provide end to end visa assistance for your destination. Contact us for more details.</p>
            </div>

         </div>
         


         <div className='tarvel-card c3'>
            <div className='tarvel-card-img'>

            </div>  
            <div>
              <h1>Bookings</h1> 
              <p>We help you book flights, hotels, sightseeing and activities. Contact us for more details.</p>   
            </div>
         </div>

      </div>
      <div className='travel-contact'>
         <div className='travel-contact-left'>
            <p>Reach out to us for personalized travel advice and visa assistance.</p>
         </div>
         
        <button className='travel_button' onClick={() => window.location.href = '/contact'} > Get in touch </button>
         
      </div>

      <div className='travel-content'>
       
       <div className='travel-content-top'>
        <h1>
          Our services
        </h1>
        <p> 
        Tailored Travel and Tour Packages by Mainstay Abroad
        </p>
       </div>

       <div className='travel-content-bottom-one'>
          <p>
          At Mainstay Abroad, we specialize in crafting customized travel and tour packages to suit the unique preferences of our clients. Whether it's a family holiday, romantic getaway, or an adventurous expedition, we curate itineraries that cater to every detail, from flights and accommodations to guided tours and local experiences. Our goal is to provide a seamless and enjoyable journey tailored to your budget and interests.
          </p>
       </div>
       <div className='travel-content-bottom-two'>
         <p>
         Client communication is at the heart of our service. From the initial inquiry to the final booking, we ensure clear, professional, and responsive communication. We work closely with our clients to understand their needs, offer expert advice, and provide full support throughout the planning and travel process. Our dedicated team is always available to assist with any questions or concerns, ensuring a smooth and worry-free
         </p>
       </div>
        
      </div>

      <div className='travel-content-two'>

        <div className='travel-content-two-element'>
            <h1>Visa Assistance</h1>
            <p>Navigating visa requirements can be tricky. Our expert team provides guidance and support to help you secure the necessary documentation for your destination, ensuring a hassle-free entry.</p>
        </div>
        <div className='travel-content-two-element'>
            <h1>Hotel Booking</h1>
            <p>Choose from a wide range of accommodations that fit your budget and preferences. Whether you're looking for luxury or affordability, we help you find the perfect place to stay.</p>
        </div>
        <div className='travel-content-two-element'>
            <h1>Flight Reservation</h1>
            <p>Enjoy competitive pricing and flexible options for your flights. Our team will assist you in finding the best routes and timings to suit your travel plans.</p>
        </div>
        <div className='travel-content-two-element'>
            <h1>Travel Itinerary Planning</h1>
            <p>We create personalized itineraries tailored to your interests, including must-see attractions, hidden gems, and local experiences, ensuring you make the most of your journey.</p>
        </div>
        <div className='travel-content-two-element'>
            <h1>Travel Insurance</h1>
            <p>Travel with peace of mind by opting for our comprehensive travel insurance plans. We help protect you against unexpected events, giving you confidence throughout your trip.</p>
        </div>
        <div className='travel-content-two-element'>
            <h1>Personal Travel Plans</h1>
            <p>Everyone’s travel needs are unique. Our dedicated consultants work with you to design a custom travel plan that aligns with your preferences, interests, and budget.</p>
        </div>
        <div className='travel-content-two-element'>
            <h1>Foreign Exchange Services</h1>
            <p>Get the best rates for your currency exchange. We ensure you have the local currency you need for a smooth experience abroad.</p>
        </div>
        <div className='travel-content-two-element'>
            <h1>Forex Cards</h1>
            <p>Our forex cards offer a secure and convenient way to manage your travel expenses. Load your card with multiple currencies and enjoy easy access to your funds.</p>
        </div>
        <div className='travel-content-two-element'>
            <h1>Activities Selection</h1>
            <p>Enhance your travel experience with our curated list of activities and excursions. Whether you’re looking for adventure, relaxation, or cultural immersion, we help you find the best options.</p>
        </div>
      </div>
     
    </div>
  )
}

export default Tours