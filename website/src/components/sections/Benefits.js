import React from 'react'
import "./benefits.css"

const Benefits = () => {
  return (
    <div className='benefits'>
        <div className='benefitsSection one'>
            <h2 className='integerText'>01</h2>   
            <p className='benefitsSectionText'>
                A personalized
                dashboard
                ensures clients
                seamless
                navigation
            </p>  
        </div>
        <div className='benefitsSection two'>
            <h2 className='integerText'>02</h2>   
            <p className='benefitsSectionText'>
            A client'
            s
            Investment is
            secured in the
            blockchain,
            handing the client
            100% control
            </p>
        </div>
        <div className='benefitsSection three'>
        <h2 className='integerText'>03</h2>   
            <p className='benefitsSectionText'>
            With as low as
            $100, Anyone now
            has the luxury of
            investing in share
            of any real estate
            of their choice
            </p>
        </div>
    </div>
  )
}

export default Benefits