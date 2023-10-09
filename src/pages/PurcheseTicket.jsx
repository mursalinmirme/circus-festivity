import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PurcheseTicket = () => {
    const [pursesTicket, setPursesTicket] = useState({});
    const {ticketId} = useParams();
    const allTickets = useLoaderData();
    useEffect(() => {
        const currentTicket = allTickets.find(tiket => tiket.id == ticketId);
        setPursesTicket(currentTicket);
    }, [])
    console.log(ticketId);
    return (
        <div className="w-11/12 mx-auto pt-28">
            {/* <h3 className="font-bold text-gray-700 text-center mt-10 text-2xl">Tickets:/ {pursesTicket?.type}</h3> */}
            <div className="flex justify-center mt-10">
                <div className="w-full lg:w-[650px] px-6 py-12 border">
                <h3 className="text-center text-gray-700 font-bold pb-3 text-2xl">Ticket Reservation Form</h3>
                <form>
                    <div className="flex flex-col mt-6">
                        <label className="text-base font-semibold text-gray-500" htmlFor="">Name</label>
                        <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="text" name="" id="" />
                    </div>
                    <div className="flex flex-col mt-6">
                        <label className="text-base font-semibold text-gray-500" htmlFor="">Ticket Type</label>
                        <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="text" name="" value={pursesTicket.type} readOnly />
                    </div>
                    <div className="flex flex-col mt-6">
                        <label className="text-base font-semibold text-gray-500" htmlFor="">Number of Tickets</label>
                        <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="number" name="" id="" />
                    </div>
                    
                    <div className="lg:flex gap-4">
                        <div className="flex flex-1 flex-col mt-6">
                            <label className="text-base font-semibold text-gray-500" htmlFor="">Ticket price</label>
                            <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="text" name="" id="" value= {pursesTicket.price + '$'} readOnly />
                        </div>
                        <div className="flex flex-1 flex-col mt-6">
                            <label className="text-base font-semibold text-gray-500" htmlFor="">Purchases Term</label>
                            <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="text" name="" id="" value= "Monthly" readOnly />
                        </div>
                    </div>
                    <div className="flex flex-col mt-6">
                        <label className="text-base font-semibold text-gray-500" htmlFor="">Address</label>
                        <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="text" name="" id="" placeholder="Enter your address" />
                    </div>
                    <button className="btn bg-orange-500 w-full mt-8 text-white hover:text-gray-700">Confirm Pruchase</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default PurcheseTicket;