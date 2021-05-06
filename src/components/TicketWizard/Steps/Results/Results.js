import React from 'react'
import Buttons from '../Buttons/Buttons'
import { getResults } from '../../../../functions/getResults'

const Results = ({ formData, navigation, index }) => {
    const data = formData
    const { ticket, bike } = getResults(data)
    console.log(bike)
    return (
            <div className="results">
            <h3>Hi, {data.name}</h3>
                <p>
                    
                    You are staying {data.days}{(data.days > 1) ? ' days' : ' day'} in Berlin, arriving at <strong>{
                        (data.arrival.transport === 'plane') ?
                            `${data.arrival.airport} airport.` :
                            `Berlin Central Station.`} </strong>
                    {(data.bike.present === 'true') && ` and you are bringing ${data.bike.amount} ${(Number(data.bike.amount) > 1) ? `bikes` : `bike`} with you.`}
                </p>
                <p>
                    <h3>The best ticket option is:</h3>
                    <strong>{ticket.title}</strong><br />
                    <strong>Price: </strong> {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(ticket.price)} {(Number(data.travellers) === 5) ? ' per day for the whole group.' : ' per person.'}
                    <br />
                </p>
                <p>
                    <strong>Ticket Includes: </strong> </p>
                <p>{ticket.perks}
                </p>
                <p>      
                {(bike != null) && `You can get a ${bike.dayTicket.title} for ${new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(bike.dayTicket.price)}, or if just for a single bike trip, you can get a ${bike.singleAB.title}`}
                </p>  
                <Buttons controls={navigation} index={index} />
            </div>
            

    )
}
export default Results