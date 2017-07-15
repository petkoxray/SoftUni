function main(tickets,criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let result = [];

    for (let ticket of tickets) {
        let [destination, price, status] = ticket.split('|');
        let currentTicket = new Ticket(destination, Number(price), status);
        result.push(currentTicket);
    }

    if (criteria === 'price')
        return result.sort((a, b) => a.price - b.price);
    return result.sort((a, b) => a[criteria].localeCompare(b[criteria]));
}

console.log(main(
    ['Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'],
    'destination'
));