import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './pages/AboutPage'
import Courses from './pages/CoursesPage'
import Contact from './pages/ContactPage'
import Home from './pages/Home'
import Admission from './pages/AdmissionPage'

import './App.css'
import ChatbotComponent from './components/Chatbot/ChatbotComponents'
import Footer from './components/Footer/Footer'
import DeveloperInfoPopup from './components/DevloperInfo/DeveloperInfoPopup'

const App = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <>
    <div>
      <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Madhura Ananda Patil"
          studentPhotoUrl="/madhura1.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
    </div>
    
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
    </>
    
  )
}
export default App