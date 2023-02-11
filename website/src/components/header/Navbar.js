import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='header'>
        <div className="headerSection1">
                <div className="logo"><img className="logo_img" src="img/mixfits-tokenized-logo.png" alt="mixfits-tokenized-logo"/></div>
            </div>
            <div className="headerSection2">
                <i id="hamburger" className="bi bi-list"></i>
                <div className="nav">
                    <ul className='navItems'>
                        {/* <li className="home">
                            <a href="#home">
                                Home
                            </a>
                        </li> */}
                        <li>
                            <a href="#about">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#faq">
                                Faq's
                            </a>
                        </li>
                        <li>
                            <a href="#contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <div className='primaryBTN'>
                        <h3 className='primaryBtnText'>JOIN THE WAITLIST</h3>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Navbar