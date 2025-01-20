import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import AboutMe from './aboutMe/AboutMe';
import Education from './education/Education';
import Skills from './skills/Skills';
import Projects from './projects/Projects';
import ContactMe from './contact/Contact';
import Footer from './footer/Footer';
const App = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <AboutMe />
            <Education />
            <Skills />
            <Projects />
            <ContactMe />
            <Footer/>
        </div>
    );
};

export default App;
