
import React, { useState } from 'react';
import './App.css';
import { Header, About, Portfolio, Contact, Resume, Footer, Home } from './components'

function App() {

  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "About" && <About />}
      {currentPage === "Portfolio" && <Portfolio />}
      {currentPage === "Contact" && <Contact />}
      {currentPage === "Resume" && <Resume />}
      {currentPage === 'Home' && <Home />}
      <br></br>
      <Footer />
    </>
  );
}

export default App;