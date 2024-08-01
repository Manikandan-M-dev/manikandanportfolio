import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import Header from './Pages/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Footer from './Pages/Footer';
import './App.css';

const App = () => (
<div className="app">
    <Header />
    <main className="main-content">
      <Home/>
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default App;
