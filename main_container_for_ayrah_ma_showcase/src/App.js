import React, { useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Process from './components/Process';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Add additional CSS styles specific to the components when the component mounts
  useEffect(() => {
    // This is where we would add any global event listeners or initialization code
    document.title = 'Ayrah M&A Advisory | Strategic Business Growth';
  }, []);

  return (
    <div className="app">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
