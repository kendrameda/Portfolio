import React from 'react'
import '../code.css'

const pages = ['About', 'Portfolio', 'Contact', 'Resume'];

const Header = ({ currentPage, setCurrentPage}) => {
  const linkStyle = { border: '1px black', padding: '5px'};
  return (
    <header>
      <h1 style={ {fontSize: '50px'}}>Welcome to the world of Kendra Gibson</h1>
      <div class="back"></div>
      <nav>
        <a href="portfolio\src\components\About.js">About</a>
        <a href="portfolio\src\components\Portfolio.js">Portfolio</a>
        <a href="portfolio\src\components\Home.js">Home</a>
        <a href="portfolio\src\components\Resume.js">Resume</a>
        <a href="portfolio\src\components\Contact.js">Contact me</a>
      </nav>
      
    </header>
  )
}

export default Header