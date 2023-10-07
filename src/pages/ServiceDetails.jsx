import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const [currentService, setCurrentService] = useState({});
    const allServices = useLoaderData()
    const {id} = useParams();

    useEffect(() => {
        const currentItem = allServices.find(item => item.id == id);
        setCurrentService(currentItem);
    }, [])
//    console.log(currentService);
    return (
        <div className="pt-20 w-11/12 mx-auto">
            <h2 className="text-3xl mt-14 text-center font-bold text-gray-700">{currentService.title}</h2>
            <img className="w-full mt-8 h-[600px]" src={currentService.image} alt="" />
            <p className="text-lg mt-5 font-medium text-gray-500">{currentService.description}</p>
        </div>
    );
};

export default ServiceDetails;