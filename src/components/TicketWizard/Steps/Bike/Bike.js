import React from 'react'
import Buttons from '../Buttons/Buttons'

import Input from '../Input/Input'

const Bike = ({ setForm, formData, navigation, index }) => {
    const { bike } = formData

    return (
        <div className='step'>
            <h3>Are you bringing your bike?</h3>
            <div className="multi">
                <div className='radio-inputs'>
                    <Input
                        name='bike.present'
                        type="radio"
                        value='false'
                        id='no'
                        checked={bike.present === 'false'}
                        onChange={setForm}
                        label='no'
                    />
                    <Input
                        name='bike.present'
                        value='true'
                        type="radio"
                        id='yes'
                        checked={bike.present === 'true'}
                        onChange={setForm}
                        label='yes'
                    />
                </div>

                {(bike.present === 'true') && (
                    <div className='inputs'>
                        <h3>How many?</h3>
                        <Input
                            name="bike.amount"
                            value={bike.amount}
                            onChange={setForm}
                            type='number'
                            label={(bike.amount > 1) ? 'bikes' : 'bike'}
                        />
                    </div>
                )}
            </div>
            <Buttons controls={navigation} index={index} />
        </div>
    )
}
export default Bike