import { Link } from "react-router-dom";
const Service = ({service}) => {
    const {id, title, image, price, description , category} = service;
    return (
        <div>
            <div className="border rounded-lg">
                    <div className="flex p-5">
                        <img className="w-[40%] rounded grow" src={image} alt="" />
                        <div className="pl-4">
                            <h4 className="bg-orange-500 inline px-3 py-1 rounded font-semibold text-sm text-white">{category}</h4>
                            <h3 className="font-semibold text-2xl mt-3">{title}</h3>
                            <p className="text-base mt-2">{description.slice(0,150)}...</p>
                            <div className="flex mt-5 items-center justify-between">
                            <p className="text-orange-600 font-bold">Price: {price}$</p>
                            <Link to={`/service-details/${id}`}><button className="bg-[#00a556] px-3 font-medium text-white rounded-md py-2">View Details</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Service;