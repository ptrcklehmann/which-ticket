import React from 'react'
import Buttons from '../Buttons/Buttons'

import ItemForm from '../Input/Input'

const Name = ({ setForm, formData, navigation, index }) => {

    const { arrival } = formData
    const setAirport = e => {
        setForm(e)
        let step = document.querySelector('.step');
        if (step) {
            step.classList.add('is-active')
            console.log(step, 'step')
        }
    }
    const setTransport = e => {
        let step = document.querySelector('.step');
        if (step) {
            step.classList.add('is-active')
            console.log(step, 'step')
        }
        setForm(e)
    }
    return (

        <div className='step'>
            <h3>How are you getting there?</h3>
            <div className="multi">
                <div className='radio-inputs'>
                    <ItemForm
                        name='arrival.transport'
                        type="radio"
                        value='train'
                        id='train'
                        checked={arrival.transport === 'train'}
                        onChange={setTransport}
                        label='train'
                    />
                    <ItemForm
                        name='arrival.transport'
                        value='plane'
                        type="radio"
                        id='plane'
                        checked={arrival.transport === 'plane'}
                        onChange={setTransport}
                        label='plane'
                    />
                    <ItemForm
                        name='arrival.transport'
                        value='bus'
                        type="radio"
                        id='bus'
                        checked={arrival.transport === 'bus'}
                        onChange={setTransport}
                        label='bus'
                    />
                </div>

                {(arrival.transport === 'plane') && (
                    <>
                        <h3>Which airport do you arrive?</h3>
                        <div className='radio-inputs'>
                            <ItemForm
                                name='arrival.airport'
                                type="radio"
                                value='BER / Berlin Brandenburg Airport'
                                id='BER / Berlin Brandenburg Airport'
                                checked={arrival.airport === 'BER / Berlin Brandenburg Airport'}
                                onChange={setAirport}
                                label='BER / Berlin Brandenburg Airport'
                            />
                            <ItemForm
                                name='arrival.airport'
                                type="radio"
                                value='TXL / Berlin-Tegel Airport'
                                id='TXL / Berlin-Tegel Airport'
                                checked={arrival.airport === 'TXL / Berlin-Tegel Airport'}
                                onChange={setAirport}
                                label='TXL / Berlin-Tegel Airport'
                            />
                        </div>
                    </>
                )}
            </div>
            <Buttons controls={navigation} index={index} />

        </div>

    )
}
export default Name