import axios from "axios";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const PurcheseTicket = () => {
    const [errMsg, setErrMsg] = useState();
    const {ticketId} = useParams();
    const tickt = useLoaderData();
    const handlePuchaseTickets = (e) => {
        e.preventDefault();
        setErrMsg('');
        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const numbersofTickets = form.numsTickets.value;
        const ticketPrice = form.price.value;
        const duration = form.duration.value;
        const address = form.address.value;
        const newOrder = {name, type, numbersofTickets, ticketPrice, duration, address};
        if(!name){
            setErrMsg("Please enter your name.")
            return
        }
        if(!numbersofTickets){
            setErrMsg("Please write how much ticket you want.")
            return
        }
        if(!address){
            setErrMsg("Please enter your address.")
            return
        }
        axios.post('http://localhost:4600/purchase-ticket', newOrder)
        .then(res => {
            if(res.data.acknowledged){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Ticket Purchase Successfully",
                    text: "Please pay and confirm the tickets",
                    showConfirmButton: false,
                    timer: 2500
                  });
                  form.reset();
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="w-11/12 mx-auto pt-28">
            {/* <h3 className="font-bold text-gray-700 text-center mt-10 text-2xl">Tickets:/ {tickt?.type}</h3> */}
            <div className="flex justify-center mt-10">
                <div className="w-full lg:w-[650px] px-6 py-12 border">
                <h3 className="text-center text-gray-700 font-bold pb-3 text-2xl">Ticket Reservation Form</h3>
                {
                    errMsg && <p className="text-red-600 text-center font-medium">{errMsg}</p>
                }
                <form onSubmit={handlePuchaseTickets}>
                    <div className="flex flex-col mt-6">
                        <label className="text-base font-semibold text-gray-500" htmlFor="">Name</label>
                        <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="text" name="name" id="" />
                    </div>
                    <div className="flex flex-col mt-6">
                        <label className="text-base font-semibold text-gray-500" htmlFor="">Ticket Type</label>
                        <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="text" name="type" value={tickt?.type} readOnly />
                    </div>
                    <div className="flex flex-col mt-6">
                        <label className="text-base font-semibold text-gray-500" htmlFor="">Number of Tickets</label>
                        <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="number" name="numsTickets" id="" />
                    </div>
                    
                    <div className="lg:flex gap-4">
                        <div className="flex flex-1 flex-col mt-6">
                            <label className="text-base font-semibold text-gray-500" htmlFor="">Ticket price</label>
                            <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="text" name="price" id="" value= {tickt?.price + '$'} readOnly />
                        </div>
                        <div className="flex flex-1 flex-col mt-6">
                            <label className="text-base font-semibold text-gray-500" htmlFor="">Purchases Term</label>
                            <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="text" name="duration" id="" value= "Monthly" readOnly />
                        </div>
                    </div>
                    <div className="flex flex-col mt-6">
                        <label className="text-base font-semibold text-gray-500" htmlFor="">Address</label>
                        <input className="border mt-1 px-3 py-2.5 font-semibold border-none outline-none bg-gray-100 text-gray-700" type="text" name="address" id="" placeholder="Enter your address" />
                    </div>
                    <button type="submit" className="btn bg-orange-500 w-full mt-8 text-white hover:text-gray-700">Confirm Pruchase</button>
                </form>
                </div>
            </div>
        </div>
    );
};

export default PurcheseTicket;