import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


const About = () => {
  return (
    <div>
      <header>
        <h1 className="container">About Vivekanand College</h1>
        <p>
          Vivekanand College stands as a beacon of knowledge and integrity, committed to delivering transformative
          education since its inception in <strong>[Year of Establishment, e.g., 1980]</strong>. Located in the bustling heart
          of <strong>[City/Area, e.g., Chembur, Mumbai]</strong>, our college has consistently strived to uphold the highest
          standards of academic rigor and ethical values.
        </p>
        <p>
          Our vision is to empower students with critical thinking skills, a global perspective, and a strong sense of social responsibility. We aim to nurture individuals who are not only successful in their careers but also contributing members of society.
        </p>
      </header>

      <section>
        <h2 id="count">Our Mission</h2>
        <ul className="sign">
          <li>To provide high-quality, accessible education across various disciplines.</li>
          <li>To foster research, innovation, and creativity among students and faculty.</li>
          <li>To cultivate a diverse and inclusive learning environment.</li>
          <li>To instill strong ethical values and leadership qualities.</li>
        </ul>
      </section>

      <section>
        <h2 id="count">Our Values</h2>
        <p>
          Integrity, Excellence, Innovation, Community, and Respect are the pillars upon which Vivekanand College is built. We encourage open dialogue, intellectual curiosity, and a relentlesspursuit of knowledge.
          
        </p>
      </section>

      
        <h2 id="count">Our History</h2>
        <p>
          [Briefly describe the college's history - e.g., how it started, key milestones, growth over the years, famous alumni if any]. Our journey began with a vision to make quality education available to all, and we continue that legacy today.
          
        </p>
     
      <Footer/>
    </div>
  )
}
export default About