import React from 'react'
import './Programs.css'


function IELTS() {
  return (
    <div className='program-main'>
      
        <div className='visa-heading'>     
            <div className='visa-sub-heading'>
                <h1>Programs</h1>
                <p>Achieve your goals with expert IELTS preparation customized for you.</p>
            </div>
           

        </div>
        <div className='program-content'>
               <div className='program-content-heading'>
                  <h1>Achieve Your Goals with Expert Preparation</h1>
                  <p>Are you planning to study abroad, migrate, or enhance your career opportunities? Mastering an English proficiency test is a crucial step. Whether you choose IELTS, TOEFL, or PTE, our comprehensive resources and expert guidance will help you succeed.</p>
               </div>
               <div className='proogram-content-left'>
               <div className='visa-content-left-heading'><h1>Comprehensive Test Preparation</h1></div>
                <div className='visa-content-left-line'>
                  <a href="/ielts">IELTS 'International English Language Testing System'</a>
                  <p>Achieve your desired IELTS score with our tailored preparation programs, practice tests, and expert tips.</p>
                </div>
                <div className='visa-content-left-line'>
                  <a href="/toefl">TOEFL 'Test of English as a Foreign Language'</a>
                  <p>Boost your TOEFL score with our comprehensive preparation guides, sample questions, and study materials.</p>
                </div>
                <div className='visa-content-left-line'>
                  <a href="/pte">PTE 'Pearson Test of English'</a>
                  <p>Enhance your PTE performance with our expert-led preparation courses, practice tests, and valuable insights.</p>
                </div>
                <div className='visa-content-left-line'>
                  <a href="/oet">OET 'Occupational English Test'</a>
                  <p>Excel in the OET with our specialized preparation resources designed for healthcare professionals aiming to work or study in an English-speaking environment.</p>
                </div>
               </div>
            </div>
    </div>
  )
}

export default IELTS