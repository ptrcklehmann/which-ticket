import React from 'react'
import Buttons from '../Buttons/Buttons'

import Input from '../Input/Input'

const Travellers = ({ setForm, formData, navigation, index }) => {
    const { travellers } = formData
    return (
        <div className='step is-active'>
            <h3>How many of you are?</h3>
            <div className='inputs'>
            <Input
                name="travellers"
                value={travellers}
                onChange={setForm}
                type='number'
                label={(travellers > 1) ? ' travellers' : ' just me! 🙋'}
            />   
            </div>
            <Buttons controls={navigation} index={index} />
        </div>
    )
}
export default Travellers