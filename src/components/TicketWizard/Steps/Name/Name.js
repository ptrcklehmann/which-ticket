import React from 'react'
import Buttons from '../Buttons/Buttons'

import Input from '../Input/Input'

const Name = ({ setForm, formData, navigation, index }) => {
    const { name } = formData
    return (
        <div className='step'>
            <div className="inputs">
            <Input
                name='name'
                value={name}
                onChange={setForm}
                type='text'
                label='What is your name?'
            />
            </div>
            <Buttons controls={navigation} index={index} />
        </div>
    )
}
export default Name