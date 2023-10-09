import { Link } from "react-router-dom";
const Service = ({service}) => {
    const {id, title, image, price, description} = service;
    return (
        <div>
            <div className="border rounded-lg">
                    <div className="p-5">
                        <img className="w-full h-[270px] rounded grow" src={image} alt="" />
                        <div className="">
                            <h3 className="font-semibold text-2xl mt-3">{title}</h3>
                            <p className="text-base mt-2">{description.length > 120 ? description.slice(0, 120)+'...' : description}</p>
                            <div className="flex mt-5 items-center justify-between">
                            <p className="text-gray-600 text-lg font-bold">Price: {price}$</p>
                            <Link to={`/service-details/${id}`}><button className="bg-[#ffa51d] px-3 font-medium text-white rounded-md py-2">Hire Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Service;