import developer from "../assets/developer.jpg";
import Service from "./Service";
const Services = ({services}) => {
    return (
        <div className='mb-32 w-11/12 mx-auto'>
            <h3 className='text-center font-bold font-lora text-xl'>Featured Courses</h3>
            <h2 className='text-center mt-5 font-bold text-2xl'>Pick A Course To Get Started</h2>
            <div className="grid grid-cols-2 gap-5 mt-8">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;