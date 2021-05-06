import React from 'react'
import { useForm, useStep } from 'react-hooks-helper'
import Header from '../Header/Header';
import Steps from './Steps/Steps'
import ProgressBar from '../ProgressBar/ProgressBar'

const TicketWizard = ({ defaultData, steps }) => {
    const [formData, setForm] = useForm(defaultData);
    const { step, navigation, index } = useStep({ initialStep: 0, steps: steps });
    const { id } = step
    const currentStep = index
    const props = { formData, setForm, navigation, id, index }
    return (
        <div className='container'>
            <div className="content">
                <Header />
                <Steps {...{ props }} />
                <ProgressBar {...{ currentStep, steps }} />
            </div>
            <div className="photo" />
        </div>
    )
}
export default TicketWizard