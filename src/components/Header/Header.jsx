import { useState } from 'react'
import '../Header/Header.css'

import { Link } from 'react-router-dom'



const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <header>
            <nav className='navbar'>
                <div className="logo">Vivekanand College</div>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>&#9776;</div>
            
                <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <span className="hamburger-icon"></span>
                <span className="hamburger-icon"></span>
                <span className="hamburger-icon"></span>

                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/courses">Courses</Link>
                <Link to="/contact">Contact</Link>
                <a href="Admission"><button className='green'>Apply Now</button></a>
            </div>
            </nav>

        </header>
    )
}

export default Header