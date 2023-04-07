import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='about' id="about">
        <div className='workfLowStages aboutContainer'>
            <div>
                <img className='houseImg' src='img/house.png' alt='about_mixfits'/>
            </div>
            <div>
                <p className='aboutDesc'>
                    We are an <b>Afrocentric</b> tokenized real estate start-up organization. Inspired to create various lasting solutions to real life problems using the blockchain and also create similar real experiences on the blockchain to help close the gap between African real estate and its customer. Our Vision at mixfits is to revolutionize the traditional real estate investment landscape. We aim to provide our clients with a new and innovative way to invest in and own real estate assets, making the market more accessible, transparent, and secure.
                </p>
            </div>
        </div>
        <div className='workfLowStages cardsContainer beforeWorkflow'>
        <div className='stagesBox circleVariant vision'>
                <img className='newAccountIcon' src='img/vision.png' alt='vision'/>
                <h3>VISION</h3>
                <p className='circleVariantDesc'>By utilizing blockchain technology and tokenization, we aim to remove barriers and limitations associated with traditional real estate investments, such as high transaction costs and illiquidity.</p>
            </div>
            <div className='stagesBox circleVariant'>
                <img className='newAccountIcon' src='img/goal.png' alt='mission' />
                <h3>MISSION</h3>
                <p className='circleVariantDesc'>Our mission is to empower investors to participate in the real estate market with confidence, and to provide them with a seamless and secure investment experience</p>
            </div>
            <div className='stagesBox circleVariant'>
                <img className='newAccountIcon' src='img/values.png' alt='values'/>
                <h3>VALUES</h3>
                <p className='circleVariantDesc'>We are committed to delivering exceptional investment opportunities, through our rigorous acquisition, management, and disposal processes.</p>
            </div>
        </div>
    </div>
  )
}

export default About