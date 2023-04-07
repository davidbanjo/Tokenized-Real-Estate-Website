import React from 'react'
import { BsArrowUpRight, BsInstagram, BsLinkedin, BsTelephone, BsTwitter } from 'react-icons/bs';
import "./footer.css"

const Footer = () => {
  return (
    <div className='footer' id='contact'>
      <div className='footer-container'>
        <div className='footerLogoContainer'>
          <img className='footerLogo' src='img/mixfits-tokenized-logo.png' alt='footer-logo' />
          <a href="tel:08032417068">
            <p className='phoneNum'>+234-803-241-7068</p>
          </a>
        </div>
        <div className='contactContainer'>
          <h2 className='contactUsText'>For inquiries, <span className='contactUs'>contact us<BsArrowUpRight className='BsArrowUpRight'/></span></h2>
          <div className='socials'>
            <div className='socialIconsContainer'>
              <a href='https://www.instagram.com/mixfits_/' >
                <BsInstagram className='socialIcons' />
              </a>
            </div>
            <div className='socialIconsContainer'>
              <a href='https://twitter.com/MixfitsN' >
                <BsTwitter className='socialIcons' />
              </a>
            </div>
            <div className='socialIconsContainer'>
              <a href='https://www.linkedin.com/company/mixfits/'>
                <BsLinkedin className='socialIcons' />
              </a>
            </div>
            <div className='socialIconsContainer'>
              <a href="tel:08032417068">
                <BsTelephone className='socialIcons' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer