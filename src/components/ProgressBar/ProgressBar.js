import React from 'react'
import './ProgressBarStyle.css'

const ProgressBar = ({currentStep, steps}) => {

    console.log(steps.length, 'total steps')

    function percentage(percent, total) {
        return (100 * percent) / total;
     } 
    const done = percentage(currentStep, (steps.length-1))
    console.log(done, '% done')

    const newStyle = {
        opacity: 1,
        width: `${done}%`
    }
    // setStyle(newStyle);

    return (
        <div className="progress">
            <div className="progress-done" style={newStyle}>
              {` `}  
			</div>
        </div>
    )
}
export default ProgressBar