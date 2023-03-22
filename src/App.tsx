import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'; 
import Hero from './components/Hero';
import Article from './components/Article';
import Support from './components/Support';
import AllInOne from './components/AllInOne';
import Pricing from './components/pricing';
import Footer from './components/Footer';

function App() {
  
  return (
    <>
      <Navbar />
      <Hero />
      <Article />
      <Support />
      <AllInOne />
      <Pricing />
      <Footer />

    </>
  )
} 

export default App
 