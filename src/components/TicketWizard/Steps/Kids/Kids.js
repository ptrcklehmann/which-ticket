import React from 'react'
import Buttons from '../Buttons/Buttons'
import Input from '../Input/Input'

const Kids = ({ setForm, formData, navigation, index }) => {
    const { kids, travellers } = formData
    const { next } = navigation
    if (travellers > 1) {
        return (
            <div className='step is-active'>
                <h3>Are you with any child under 6?</h3>
                <div className='radio-inputs'>
                <Input
                    name='kids.present'
                    type="radio"
                    value='false'
                    id='no'
                    checked={kids.present === 'false'}
                    onChange={setForm}
                    label='no'
                />
                <Input
                    name='kids.present'
                    value='true'
                    type="radio"
                    id='yes'
                    checked={kids.present === 'true'}
                    onChange={setForm}
                    label='yes'
                />
                </div>
                {(kids.present === 'true') && (
                    <div className='step is-active'>
                        <h3>How many?</h3>
                        <div className='radio-inputs'>
                        <Input
                            name="kids.amount"
                            value={kids.amount}
                            onChange={setForm}
                            type='number'
                        />
                        </div>
                    </div>
                )}
                <Buttons controls={navigation} index={index} />
            </div>
        )
    } else {
        return (
            <div className='buttons'>
                    <button className="nav-button" onClick={next}>
                        <span className="top-key"></span>
                        <p>results</p>
                        <span className="bottom-key-1"></span>
                        <span className="bottom-key-2"></span>
                    </button>
                </div>
        )
    }
}

export default Kids