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
            <h2 className="text-3xl">{currentService.title}</h2>
            <img src={currentService.image} alt="" />
        </div>
    );
};

export default ServiceDetails;