// App.js
import React, { useRef } from 'react';
import NavBar from './page/navBar/navBar';
import AboutMe from './page/aboutMe/aboutMe';
import Header from "./page/header/header";
import Resume from "./page/resume/resume";
import Projects from './page/projects/projects';
import Contact from './page/contact/contact';
import Footer from './page/footer/footer';

const App = () => {
  const contactRef = useRef(null);

  return (
    <div>
      <section id="nav">
        <NavBar />
      </section>
      <section id="home">
        <Header contactRef={contactRef} />
      </section>
      <section id="about"  >
        <AboutMe contactRef={contactRef} />
      </section>
      <section id="resume">
        <Resume />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact" ref={contactRef}>
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
