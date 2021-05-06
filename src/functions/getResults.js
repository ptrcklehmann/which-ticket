import { ticketList } from '../data/data'

export function getResults(results) {
    const { days, travellers, bike: { amount } } = results
    console.log(days, 'results from function')
    switch (Number(days)) {
        case (1):
            if (Number(travellers) === 5) return { ticket: ticketList.twentyFourGroup, bike: ticketList.bicycle }
            if (Number(amount) > 0) return { ticket: ticketList.dayTicket, bike: ticketList.bicycle }
            return { ticket: ticketList.dayTicket }
        case (2):
            console.log(amount)
            if (Number(travellers) === 5) return { ticket: ticketList.twentyFourGroup, bike: ticketList.bicycle }
            if (Number(amount) > 0) return { ticket: ticketList.cityTourCard.twoDays, bike: ticketList.bicycle }
            return { ticket: ticketList.cityTourCard.twoDays }
        case (3):
            if (Number(travellers) === 5) return { ticket: ticketList.twentyFourGroup, bike: ticketList.bicycle}
            if (Number(amount) > 0) return { ticket: ticketList.cityTourCard.threeDays, bike: ticketList.bicycle }
            return { ticket: ticketList.cityTourCard.threeDays }
        case (4):
            if (Number(travellers) === 5) return { ticket: ticketList.twentyFourGroup, bike: ticketList.bicycle }
            if (Number(amount) > 0) return { ticket: ticketList.cityTourCard.fourDays, bike: ticketList.bicycle }
            return { ticket: ticketList.cityTourCard.fourDays }
        case (5):
            if (Number(travellers) === 5) return { ticket: ticketList.twentyFourGroup, bike: ticketList.bicycle }
            if (Number(amount) > 0) return { ticket: ticketList.cityTourCard.fiveDays, bike: ticketList.bicycle }
            return { ticket: ticketList.cityTourCard.fiveDays }
        case (7):
            if (Number(travellers) === 5) return { ticket: ticketList.sevenDay, bike: ticketList.bicycle }
            if (Number(amount) > 0) return { ticket: ticketList.sevenDay, bike: ticketList.bicycle }
            return { ticket: ticketList.sevenDay }
        default: return null
    }
}