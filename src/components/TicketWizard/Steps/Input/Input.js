import React from 'react'
import './Input.css'

const Input = ({ label, children, type, ...props }) => {
    return (
        <>
            { type === "radio" ?
                (<>
                    <input type={type} {...props} />
                    <label htmlFor={label}>{label}</label>
                </>)
                : type === "text" ?
                    <div className="row">
                        <span>
                            <input id={label} className="basic-slide" type={type} {...props} required />
                            <label htmlFor={label}>{label}</label>
                        </span>
                    </div>
                    : (<div className='input'>
                        <input type={type} {...props} />
                        <label htmlFor={label}>{label}</label>
                    </div>)
            }
        </>

    )
}
export default Input