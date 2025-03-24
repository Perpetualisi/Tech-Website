import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
    <div>
  <Navbar/>
  <Hero/>
  <Services/>
  <About/>
  <Contact/>
  <Footer/>

    </div>
  )
}

export default App
