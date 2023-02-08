
import React, { useState } from 'react';
import './App.css';
import { Header, About, Portfolio, Contact, Resume, Footer } from './components'

function App() {

  const [currentPage, setCurrentPage] = useState("About");

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === "About" && <About />}
      {currentPage === "Portfolio" && <Portfolio />}
      {currentPage === "Contact" && <Contact />}
      {currentPage === "Resume" && <Resume />}
      
      <br></br>
      <Footer />
    </>
  );
}

export default App;