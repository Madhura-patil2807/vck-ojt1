import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/AboutPage'
import Courses from './pages/CoursesPage'
import Contact from './pages/ContactPage'
import Home from './pages/Home'
import Admission from './pages/AdmissionPage'

import './App.css'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/admission" element={<Admission/>} />
        </Routes>
        <div>
          <ChatbotComponent/>
          
        </div>
      </Router>
      
    
      
  




    </div>
    
  )
}
export default App