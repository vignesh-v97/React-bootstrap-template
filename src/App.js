import React from 'react';
import About from './About';
import ContactForm from './ContactForm';
import Copyright from './Copyright';
import Footer from './Footer';
import Hero from './Hero';
import Navbar from './Navbar';
import Portfolio from './Portfolio';

const App = () => {
 return (
  <>
    <Navbar/>
    <Hero/>
    <Portfolio/>        
    <About/>        
    <ContactForm/>        
    <Footer/>
    <Copyright/>
  </>
 )
}

export default App;