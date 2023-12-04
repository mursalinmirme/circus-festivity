import { useEffect, useState } from 'react';
import {BsCheckCircleFill, BsDot} from 'react-icons/bs'
import Ticket from './Ticket';
const Tickets = () => {

    const [tickets, setTickets] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4600/tickets')
        .then(response => response.json())
        .then(data => setTickets(data))
    }, [])
    return (
        <div className="w-11/12 mx-auto mt-12">
            <h3 className="text-center font-bold text-xl text-orange-600 uppercase">Purchase Ticket</h3>
            <h2 className="text-center font-bold text-3xl md:text-4xl mt-3">November 2023 Buy Ticket</h2>
            <p className="text-center mt-3 text-gray-500">Experience Thrilling Circus Acts - Secure Your <br></br>Tickets for Unforgettable Entertainment</p>
            {/* tickets cards wrap */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
                {
                    tickets.map(ticket => <Ticket key={ticket._id} ticket={ticket}></Ticket>)
                }
            </div>
        </div>
    );
};

export default Tickets;