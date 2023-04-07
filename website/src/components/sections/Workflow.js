import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import "./workflow.css"

const Workflow = () => {
  return (
    <div className='workflowContainer'>
        <h2 className='workflowText'>When you purchase a property investment, you would earn<br /> daily returns on the appreciation of the property.</h2>
        <div className='workfLowStages'>
            <div className='stagesBox'>
                <img className='newAccountIcon' src='img/new-account.png' alt='' />
                <p className='stagesBoxText'>Create a Free account</p>
            </div>
            <BsFillArrowRightCircleFill className='arrowsFilled' />
            <div className='stagesBox'>
                <img className='newAccountIcon' src='img/investinaproperty.png' alt='' />
                <p className='stagesBoxText'>Invest in a Property</p>
            </div>
            <BsFillArrowRightCircleFill className='arrowsFilled' />
            <div className='stagesBox'>
                <img className='newAccountIcon' src='img/startearning.png' alt='' />
                <p className='stagesBoxText'>Start Earning</p>
            </div>
        </div>
    </div>
  )
}

export default Workflow