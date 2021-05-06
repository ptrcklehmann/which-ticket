import React from 'react'
import Name from './Name/Name'
import Days from './Days/Days'
import Arrival from './Arrival/Arrival'
import Travellers from './Travellers/Travellers'
import Bike from './Bike/Bike'
import Kids from './Kids/Kids'
import Results from './Results/Results'
import './StepsStyles.css'

export default function Steps({ props }) {
    const { id } = props
    switch (id) {
        case 'name': return <Name {...props} />
        case 'days': return <Days {...props} />
        case 'arrival': return <Arrival {...props} />
        case 'travellers': return <Travellers {...props} />
        case 'bike': return <Bike {...props} />
        case 'kids': return <Kids {...props} />
        case 'results': return <Results {...props} />
        default:
            return null;
    }
}
