
import "./Home.css";
import "./swiper.css";
import { Button } from "../Button";
import ButtonTwo from "../ButtonTwo";
import React, { useRef, useState,useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide,  } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';  // Ensure you import the autoplay styles



// import required modules
import { FreeMode, Pagination, Autoplay  } from 'swiper/modules';



export default function Home() {


  return (
    <div>
   <div className="main">
    <div className="sub-main">
      <h1 className="top1">Seamless Travel, </h1>
      <h1 className="bottomh1">Simplified Visas</h1>
      <Button text={"Get Started"}/>

    </div>
    
    <div className="sub-main2">
     
    </div>
        
    
   </div>
   
     <div className="about">
      <div className="sub-about">
        <div className="sub-about-left">
            <h1>Empowering Your Global Journey</h1>
            <p>At Mainstay Abroad, we are your dedicated partner in navigating the complexities of international ventures. As a comprehensive service provider, we are committed to enhancing your global experiences and helping you achieve your overseas aspirations. Our wide array of tailored services ensures that your journey towards success and exploration is smooth and fulfilling.</p>
        </div>
        <div className="sub-about-right">
           <img src="images/t4.png" alt="" />
          
        </div>
      </div>
     </div>
     <div className="why_us">
      <div className="why_us_heading">
        <h1>Why <span className="highlight">Choose Us</span></h1>
      </div>
      <div className="why_us_content">
       <div className="why_us_card">
        <div className="why_us_card_sub_div" >
        <div className="why_us_card_left">
          <h1>Competitive Pricing</h1>
          <p>Our competitive pricing ensures you get the best value for your travel needs, making quality services more accessible and affordable.</p>
        </div>
        <div className="why_us_card_right">
          <img src="images/why_card1.png" alt="" />
        </div>
        </div>
        
       </div>
       <div className="why_us_card">
       <div className="why_us_card_sub_div" >
        <div className="why_us_card_left">
          <h1>Best services</h1>
          <p>Our dedication guarantees top-tier services for your travel needs, blending quality, affordability, and reliability. Trust us for personalized assistance, ensuring an exceptional journey.</p>
        </div>
        <div className="why_us_card_right">
        <img src="images/why_card2.png" alt="" />
        </div>
        </div>
       </div>
       <div className="why_us_card">
       <div className="why_us_card_sub_div" >
        <div className="why_us_card_left">
          <h1>Worldwide Coverage</h1>
          <p>Our worldwide coverage ensures access to top-notch travel services no matter your destination, providing convenience and peace of mind.</p>
          
        </div>
        <div className="why_us_card_right">
        <img src="images/why_card3.png" alt="" />
        </div>
        </div>
       </div>
       

      </div>

     
        

     </div>
     <div className="discover">
        <div className="discover_content">
          <div className="discover_content_left">
            <h1>Discover the World's Top Destinations</h1>
            <p>Discover our curated selection of premier global destinations. Whether you're <span className="highlight">traveling for leisure</span>, <span className="highlight">pursuing educational opportunities</span>, or<span className="highlight"> seeking work abroad,</span> our guide provides the best options to suit your needs.</p>
          </div>
          <div className="discover_content_right">
            <img src="images/bag.png" alt="" />
          </div>
        </div>
      </div>

      
      
      <div className="services">
        <div className="services-heading">
          <div className="services-heading-left">
            <h1>Our Services</h1>
          </div>
          <div className="services-heading-right">
          </div>
        </div>
        <div className="services-content">
        <Swiper
        
        slidesPerView={3}
        spaceBetween={67}
        autoplay={{
          delay: 10000,
          disableOnInteraction: true,
        }} 
        loop={true}
       
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        
        breakpoints={{
          0: { // This will apply when the width is less than 900px
            slidesPerView: 1,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
        
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="the_service_card">

            <div className="the_service_card_left">
              <h1>Visa Services</h1>
              <p>Discover the world with our expert visa services and smooth application process. Enjoy your journey while we handle all the details.</p>
              <button className="card_button" onClick={() => window.location.href = '/visa  '}>know More</button>
            </div>
            <div className="the_service_card_right">
            <img src="images/visa.png" alt="" />
            </div>
          </div>
        </SwiperSlide>
       <SwiperSlide>
       <div className="the_service_card">

<div className="the_service_card_left">
  <h1>Hotel Booking</h1>
  <p>Discover the world with our expert travel services and seamless hotel bookings. Enjoy your journey while we handle all the details.</p>
  <button className="card_button" onClick={() => window.location.href = '/tours'}>know More</button>
</div>
<div className="the_service_card_right">
  <img src="images/ticket.png" alt="" style={{width:"90%"}} />
</div>
</div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="the_service_card">

<div className="the_service_card_left">
<h1>Prep Programs</h1>
<p>Excel in IELTS, TOEFL, PTE, and more with our expert test prep services. We provide the guidance and resources you need to succeed.</p>
<button className="card_button" onClick={() => window.location.href = '/ielts'}>know More</button>
</div>
<div className="the_service_card_right">
<img src="images/book.png" alt=""   />
</div>
</div>

       </SwiperSlide>
       <SwiperSlide>
       <div className="the_service_card">

<div className="the_service_card_left">
<h1>Attestation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h1>
<p>Ensure the authenticity of your documents with our fast and secure attestation services, trusted for all your certification needs.</p>
<button className="card_button" onClick={() => window.location.href = '/Attestation'}>know More</button>
</div>
<div className="the_service_card_right">
<img src="images/ats.png" alt=""   />
</div>
</div>

       </SwiperSlide>
       <SwiperSlide>
       <div className="the_service_card">

<div className="the_service_card_left">
<h1>Tour Packages</h1>
<p>Discover curated tour packages for every traveler. Explore scenic landscapes and historical landmarks with ease.</p>
<button className="card_button" onClick={() => window.location.href = '/tours'} >know More</button>
</div>
<div className="the_service_card_right">
<img src="images/photo.png" alt="" />
</div>
</div>
       </SwiperSlide>
       <SwiperSlide>
       <div className="the_service_card">

<div className="the_service_card_left">
<h1>Study Abroad</h1>
<p>Explore global education with Mainstay Abroad. We’re here to guide and support your study abroad ambitions.</p>
<button className="card_button" onClick={() => window.location.href = '/studyabroad'} >know More</button>
</div>
<div className="the_service_card_right">
<img src="images/pen.png" alt="" />
</div>
</div>
       </SwiperSlide>
    
   
    
   
    
   
     
       
        
      </Swiper>
        </div>
      </div>
      
      
      <div className="call">
         
          <div className="call_content_left">
            <p>Just give us a call, and we'll take care of the rest</p>
          </div>
          <div className="call_content_right">
             <h2>+91 9178017011 </h2>
             <h2>+91 6743130628</h2>
          </div>
         
      </div>


      <div className="testimonial">
        <div className="testimonial_heading">
          <h1>Testimonials</h1>
          <p> <span className="highlight">What our clients say...</span></p>

        </div>
        

      
      
      
      
      <Swiper
        
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }} 
        loop={true}
       
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        
        breakpoints={{
          0: { // This will apply when the width is less than 900px
            slidesPerView: 1,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 30,
          }
        }}
        
        modules={[FreeMode, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className="swipe_card">
        <div className="swipe_card_wrapper">
          <div className="swipe_card_top">
            <div className="swipe_card_avatar">
              
            </div>
          </div>
          <div className="swipe_card_bottom">
              <h1>client name</h1>
              <p> Their attention to detail and prompt assistance exceeded my expectations. Highly recommend for all your visa and travel needs!
              </p>
          </div>
          </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="swipe_card">
          <div className="swipe_card_wrapper">
          <div className="swipe_card_top">
            <div className="swipe_card_avatar">
              
            </div>
          </div>
          <div className="swipe_card_bottom">
          <h1>client name</h1>
              <p> Their attention to detail and prompt assistance exceeded my expectations. Highly recommend for all your visa and travel needs!
              </p>
          </div>
          </div>
          </div>
          </SwiperSlide>
        <SwiperSlide><div className="swipe_card">
          
        <div className="swipe_card_wrapper">
          <div className="swipe_card_top">
            <div className="swipe_card_avatar">
              
            </div>
          </div>
          <div className="swipe_card_bottom">
          <h1>client name</h1>
              <p> Their attention to detail and prompt assistance exceeded my expectations. Highly recommend for all your visa and travel needs!
              </p>
          </div>
          </div>
          
          
          
          
          </div></SwiperSlide>
        <SwiperSlide><div className="swipe_card">
        <div className="swipe_card_wrapper">
          <div className="swipe_card_top">
            <div className="swipe_card_avatar">
              
            </div>
          </div>
          <div className="swipe_card_bottom">
          <h1>client name</h1>
              <p> Their attention to detail and prompt assistance exceeded my expectations. Highly recommend for all your visa and travel needs!
              </p>
          </div>
          </div></div></SwiperSlide>
        <SwiperSlide><div className="swipe_card">
        <div className="swipe_card_wrapper">
          <div className="swipe_card_top">
            <div className="swipe_card_avatar">
              
            </div>
          </div>
          <div className="swipe_card_bottom">
          <h1>client name</h1>
              <p> Their attention to detail and prompt assistance exceeded my expectations. Highly recommend for all your visa and travel needs!
              </p>
          </div>
          </div></div></SwiperSlide>
          
        
      </Swiper>

      

      </div>
     
  </div>
  );
}
