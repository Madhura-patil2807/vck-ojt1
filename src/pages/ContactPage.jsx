import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const Contact = () => {
    return (
        <div>
            <h1 className="contact-title">Contact Us</h1>
      <p>We'd love to hear from you! Whether you have questions about admissions, programs, or campus life, our team is here to help.</p>

        <div className="section">
        <h2 className="class">General Enquiries</h2>
        
        <p><strong>Vivekanand College Main Campus</strong></p>
        <p>2130, E Ward, Tarabai Park, Kolhapur, Maharashtra, 416003, India</p>
        <p>Phone: <strong>‪+91 12345 67890‬</strong></p>
        <p>Email: <strong>info@vivekanandcollege.edu</strong></p>
        <p>Office Hours: Monday - Friday, 9:00 AM - 5:00 PM IST</p>
      </div>

      <div className="section">
        <h2 className="class">Admissions Office</h2>
        <p>For all admission-related queries regarding undergraduate or postgraduate programs:</p>
        <p>Phone: <strong>‪+91 98765 43210‬</strong></p>
        <p>Email: <strong>admissions@vivekanandcollege.edu</strong></p>
      </div>

      <div className="section">
        <h2 className="class">Student Support Services</h2>
        <p>For current student support, academic advising, or general assistance:</p>
        <p>Phone: <strong>‪+91 87654 32109‬</strong></p>
        <p>Email: <strong>studentsupport@vivekanandcollege.edu</strong></p>
      </div>

      <div className="section">
        <h2 className="class">Find Us on the Map</h2>
        <p>[You can embed a Google Map here later using an iframe or a React map library.]</p>
        <a href="https://www.google.com/maps?q=2130,+E+Ward,+Tarabai+Park,+Kolhapur,+Maharashtra,+416003" target="_blank" rel="noopener noreferrer">
          View on Google Maps
        </a>
      </div>

      <div className="section">
        <h2 className="class">Send Us a Message</h2>
        <p>[A contact form with fields for Name, Email, Subject, Message can be added here.]</p>
        </div>

            
        <Footer/>
        </div>

    )
}
export default Contact