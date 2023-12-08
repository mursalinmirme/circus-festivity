import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const service = useLoaderData()

//    console.log(currentService);
    return (
        <div className="pt-20 w-11/12 lg:w-9/12 mx-auto">
            <img className="w-full mt-8 h-[300px] md:h-[400px] lg:h-[600px]" src={service.image} alt="" />
            <h2 className="text-2xl md:text-3xl mt-5 font-bold text-gray-700">{service.title}</h2>
            <p className="text-base md:text-lg mt-5 font-medium text-gray-500">{service.description}</p>
            <h3 className="font-bold text-2xl mt-5">Starting from: <span className="text-orange-500">{service.price}$</span></h3>

        </div>
    );
};

export default ServiceDetails;