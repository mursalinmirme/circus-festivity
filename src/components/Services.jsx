// import developer from "../assets/developer.jpg";

import Service from "./Service";

const Services = ({services}) => {
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-center text-3xl font-bold text-slate-700 lg:mt-12">Our Services</h2>
            <h3 className="text-center font-bold text-slate-600 mt-3">Discover Our Circus Event Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {
                 services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;