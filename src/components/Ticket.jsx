import { BsCheckCircleFill, BsDot } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Tickets.css';
const Ticket = ({ticket}) => {
    return (
        <div className="border p-7 ticketsBody">
                    <div className='mt-4 flex justify-center gap-1 items-end'>
                        <h4 className='text-6xl font-bold text-gray-700 ticketPrice'>{ticket?.price}$</h4>
                        </div>
                        <p className='text-center mt-2 flex items-center justify-center font-semibold'>
                            <span className='text-gray-500 my-2'>Per Month</span>
                            <BsDot className='text-3xl text-orange-500'></BsDot>
                        </p>
                        <h3 className='text-center text-2xl font-bold text-gray-700 mt-5'>{ticket?.type}</h3>
                    <ul className='mt-9 space-y-4'>
                        {
                            ticket?.facilities.map(facility => {
                                return <>
                                <li className='flex items-center gap-2 justify-center'>
                                <BsCheckCircleFill className='text-orange-500'></BsCheckCircleFill>
                                    <span>{facility}</span>
                                </li>
                                </>
                            })
                        }
                    </ul>
                    <div className='text-center mt-10 mb-6'>
                       <Link to={`/purchase-tickets/${ticket.id}`}>
                       <button className='btn text-base font-semibold bg-orange-500 text-white px-8 rounded-full hover:text-gray-600'>Buy Now</button></Link>
                    </div>
                </div>
    );
};

export default Ticket;