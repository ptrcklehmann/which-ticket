import React, { useState }  from 'react'
import './Buttons.css'



export default function Buttons(props) {
    const [showStep, setStep] = useState(false);
    const { previous, next } = props.controls
    const index = props.index

    switch (index) {
        case 0:
            return (<div className='buttons'>
                <button className="nav-button" onClick={next}>
                    <span className="top-key"></span>
                    <p>start</p>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>
            </div>)
        case 6:
            return (
                <div className='buttons'>
                    <button className="nav-button" onClick={next}>
                        <span className="top-key"></span>
                        <p>restart</p>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                </div>
            )
            default: return (
                <div className='buttons'>
                <button className="nav-button" onClick={previous}>
                    <span className="top-key"></span>
                    <p>previous</p>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>
                <button className="nav-button" onClick={next}>
                    <span className="top-key"></span>
                    <p>next</p>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>
            </div>
            )
    }
}
