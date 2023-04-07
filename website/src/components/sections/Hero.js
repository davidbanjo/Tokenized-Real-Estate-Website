import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import "./hero.css"
import SecondaryBTN from '../buttons/SecondaryBTN';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero_section_1">
            <h1 className="hero_title">Own your very own property <br /><span className="colouredText"><b>Real Estate</b></span><br /> Worldwide</h1>
            <p className="heroSubTitle">The home of digital real estate in africa</p>
            <SecondaryBTN />
        </div>
        <div className="heroLottieContainer">
        <Player
            // ref={this.player} // set the ref to your class instance
            autoplay={true}
            loop={true}
            controls={false}
            speed={0.6}
            src="https://assets6.lottiefiles.com/packages/lf20_kuiykf08.json"
            style={{ height: '900px', width: '900px' }}
        ></Player>
        {/* <lottie-player className="heroLottie" src="https://assets6.lottiefiles.com/packages/lf20_kuiykf08.json"  background="transparent"  speed="0.6"  loop autoplay></lottie-player> */}
        {/* style="width: 600px; height: 600px;" */}
        {/* <lottie-player className="mobileOnlyLottie" src="https://assets6.lottiefiles.com/packages/lf20_kuiykf08.json"  background="transparent"  speed="0.6"  style="width: 250px; height: 250px;"  loop autoplay></lottie-player> */}
        </div>
    </div>
  )
}

export default Hero