export const steps = [
    { id: 'name' },
    { id: 'days' },
    { id: 'arrival' },
    { id: 'travellers' },
    { id: 'bike' },
    { id: 'kids' },
    { id: 'results' },
]

export const defaultData = {
    name: '',
    days: 1,
    arrival:
    {
        transport: 'train',
        airport: 'BER / Berlin Brandenburg Airport'
    },
    travellers: 1,
    bike:
    {
        present: 'false',
        amount: 0
    },
    kids:
    {
        present: 'false',
        amount: 0
    }
}

export const ticketList = {
    single: {
        price: 3,
        title: 'Single ticket Berlin AB ',
        perks: 'One journey in one direction; changes permitted Round and return trips are not permitted.',
        extention: 'Extension ticket A/C | €1.80'
    },
    dayTicket: {
        price: 8.80,
        title: '24-hour ticket Berlin AB',
        perks: '24 hours of unlimited travel on zones AB',
        extention: 'Extension ticket A/C | €3.70'
    },
    fourTrip: {
        price: 9.40,
        title: '4-trip ticket Berlin AB',
        perks: '120 minutes in any one direction. One journey in one direction; changes permitted; round and return trips are not permitted',
        extention: 'Not Available'
    },
    twentyFourGroup: {
        price: 25.50,
        title: '24-hour small group ticket Berlin AB',
        perks: 'Valid for any number of trips. The 24-hour small group ticket is issued for a group of individuals up to a maximum of 5 persons. The ticket is not transferable after the start of the journey.',
        extention: 'Not Available'
    },
    sevenDay: {
        price: 25.50,
        title: '7-day ticket VBB eco-ticket',
        description: 'The 7-day VBB eco-ticket is valid from time of validation (punched or pre-printed) for 7 consecutive days, e.g., from Monday to Sunday. The ticket is transferable.'
    },
    bicycle: {
        singleAB: {
            title: 'Bicycle single ticket AB',
            price: 2.10
        },
        singleBC: {
            title: 'Bicycle single ticket BC',
            price: 2.10
        },
        singleABC: {
            title: 'Bicycle single ticket ABC',
            price: 2.70
        },
        dayTicket:  {
            title: '24-hour bicycle ticket Berlin AB',
            price: 5.00
        }
    },
    cityTourCard: {
        twoDays: {
            title: '2 days AB | Berlin CityTourCard',
            perks: '24 hours of unlimited travel for 1 adult + up to 3 children (6–14 years old, under 6 years travel free on public transport). Up to 30% discount at 10 of Berlin’s TOP attractions',
            price: 19.90
        },
        threeDays: {
            title: '3 days AB | Berlin CityTourCard',
            perks: '3 days of unlimited travel for 1 adult + up to 3 children (6–14 years old, under 6 years travel free on public transport). Up to 30% discount at 10 of Berlin’s TOP attractions',
            price: 29.90
        },
        fourDays: {
            title: '4 days AB | Berlin CityTourCard',
            perks: '4 days of unlimited travel for 1 adult + up to 3 children (6–14 years old, under 6 years travel free on public transport). Up to 30% discount at 10 of Berlin’s TOP attractions',
            price: 39.90
        },
        fiveDays: {
            title: '5 days AB | Berlin CityTourCard',
            perks: '5 days of unlimited travel for 1 adult + up to 3 children (6–14 years old, under 6 years travel free on public transport). Up to 30% discount at 10 of Berlin’s TOP attractions',
            price: 42.90
        },
        sixDays: {
            title: '6 days AB | Berlin CityTourCard',
            perks: '7 days of unlimited travel for 1 adult + up to 3 children (6–14 years old, under 6 years travel free on public transport). Up to 30% discount at 10 of Berlin’s TOP attractions',
            price: 44.90
        }
    }
}