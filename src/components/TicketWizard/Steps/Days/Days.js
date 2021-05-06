import React from 'react'
import Buttons from '../Buttons/Buttons'
import Input from '../Input/Input'

const Days = ({ setForm, formData, navigation, index }) => {
    const { days } = formData
    return (
        <div className='step is-active'>
            <h3>How long are you planning to stay?</h3>
            <Input
                name="days"
                value={days}
                onChange={setForm}
                type='number'
                label=' days'
            />
            <Buttons controls={navigation} index={index} />
        </div>
    )
}
export default Days