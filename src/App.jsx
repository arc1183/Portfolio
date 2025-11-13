import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './sections/Hero/Hero.jsx';
import About from './sections/About/About.jsx';
import TechStack from './sections/Techstack/TechStack.jsx';
import ExpEdu from './sections/ExpEdu/ExpEdu.jsx';
import Projects from './sections/Projects/Projects.jsx';
import Contact from './sections/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import './App.css';
import React, { useEffect } from 'react';


function App() {
  useEffect(() => {
    const bg = document.createElement('div');
    bg.className = 'bg-cursor-effect';
    document.body.appendChild(bg);

    const rainDropCount = 9;
    const drops = [];
    for (let i = 0; i < rainDropCount; i++) {
      const drop = document.createElement('div');
      drop.className = 'bg-raindrop';
      drop.style.left = `${Math.random() * 100}vw`;
      drop.style.animationDelay = `${Math.random() * 2.5}s`;
      document.body.appendChild(drop);
      drops.push(drop);
    }
    return () => {
      document.body.removeChild(bg);
      drops.forEach(drop => document.body.removeChild(drop));
    };
  }, []);

  return (
    <div className="Main">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <TechStack />
        <ExpEdu/>
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
