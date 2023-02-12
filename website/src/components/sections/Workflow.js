import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import "./workflow.css"

const Workflow = () => {
  return (
    <div className='workflowContainer'>
        <h3>When you make a property investment, you would earn daily returns on the appreciation of the property.</h3>
        <div>
            <div>
                <img src='' alt='' />
                <p>Create a Free account</p>
            </div>
            <BsFillArrowRightCircleFill />
            <div>
                <img src='' alt='' />
                <p>Invest in a Property</p>
            </div>
            <BsFillArrowRightCircleFill />
            <div>
                <img src='' alt='' />
                <p>Start Earning</p>
            </div>
        </div>
    </div>
  )
}

export default Workflow