import React, { useState } from 'react'
import "./navbar.css"
import PrimaryBTN from '../buttons/PrimaryBTN'
import { BsList } from 'react-icons/bs'
import { TfiClose } from 'react-icons/tfi'

const Navbar = () => {

    const [menu, setMenu] = useState(false);

    const handleCloseMenu = () => {
        setMenu(false)
    }

    const handleShowMenu = () => {
        setMenu(true);
      };

  return (
    <div className='header'>
        <div className="headerSection1">
                <div className="logo"><img className="logo_img" src="img/mixfits-tokenized-logo.png" alt="mixfits-tokenized-logo"/></div>
            </div>
            <div className="headerSection2">
                {/* <i id="hamburger" className="bi bi-list"></i> */}
                <BsList className='mobileMenuIcon' onClick={handleShowMenu} />
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
                    <PrimaryBTN />
                </div>
                {menu && (
                <div className='mobileNav'>
                    <TfiClose className='mobileMenuIcon close' onClick={handleCloseMenu} />
                    <ul className='mobileNavItems'>
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
                </div>
                )}
            </div>
    </div>
  )
}

export default Navbar