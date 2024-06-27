import { useState } from 'react'
import NavBar from './components/NavBar'

import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Footer from './components/Footer'
import Contact from './components/pages/Contact'
import About from './components/pages/About'
import Visa from './components/pages/Visa'
import IELTS from './components/pages/Programs'
import Visa_form_one from './components/pages/Visa_form_one'
import Visa_form_two from './components/pages/Visa_form_two'
import Visa_form_three from './components/pages/Visa_form_three'
import Visa_form_four from './components/pages/Visa_form_four'

import Program_form_2 from './components/pages/Program_form_2'
import Program_form_3 from './components/pages/Program_form_3'
import Program_form_1 from './components/pages/Program_form_1'
import Program_form_4 from './components/pages/Program_form_4'





function App() {
  const [count, setCount] = useState(0)

  return (
   
  <Router>
     <NavBar/>
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/contact' element={< Contact/>} />
     <Route path='/about' element={< About/>} />
     <Route path='/visa' element={< Visa/>} />
     <Route path='/programs' element={< IELTS/>} />
     <Route path='/tourist_visa' element={< Visa_form_one/>} />
     <Route path='/business_visa' element={< Visa_form_two/>} />
     <Route path='/student_visa' element={< Visa_form_three/>} />
     <Route path='/work_visa' element={< Visa_form_four/>} />
     
     <Route path='/toefl' element={< Program_form_2/>} />
     <Route path='/pte' element={< Program_form_3/>} />
     <Route path='/ielts' element={< Program_form_1/>} />
     <Route path='/oet' element={< Program_form_4/>} />
     




     </Routes>
     <Footer/>
     
   
  </Router>
      
    
  )
}

export default App
