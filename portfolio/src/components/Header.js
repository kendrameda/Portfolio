import React from 'react'
// import Nav from 'react-boostrap/Nav';

const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

const Header = ({ currentPage, setCurrentPage}) => {
  const linkStyle = { border: '1px black', padding: '5px'};
  return (
    <header>
      <h1 >Welcome to the world of Kendra Gibson!</h1>
      <nav className="main-header-menu">
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <div style={linkStyle}>
          <a href="portfolio\src\components\About.js">About Kendra</a>
        </div>
        <div style={linkStyle}>
          <a href="portfolio\src\components\Portfolio.js">Portfolio</a>
        </div>
        <div style={linkStyle}>
          <a href="portfolio\src\components\Resume.js">Resume</a>
        </div>
        <div style={linkStyle}>
          <a href="portfolio\src\components\Contact.js">Contact</a>
        </div>
      </section>
    </nav>
    </header>
  )
}

export default Header