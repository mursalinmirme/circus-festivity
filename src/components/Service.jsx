import { Link } from "react-router-dom";
const Service = ({service}) => {
    const {id, title, image, price, description} = service;
    return (
        <div data-aos="flip-right" data-aos-duration="1000">
            <div className="border rounded-lg">
                    <div className="p-5">
                        <img className="w-full h-[270px] rounded grow" src={image} alt="" />
                        <div className="">
                            <h3 className="font-semibold text-2xl mt-3">{title}</h3>
                            <p className="text-base mt-2">{description.length > 120 ? description.slice(0, 120)+'...' : description}</p>
                            <div className="flex mt-5 items-center justify-between">
                            <p className="text-gray-600 text-xl font-bold">{price}$</p>
                            <Link to={`/service-details/${id}`}><button className="bg-orange-500 px-3 font-medium text-white rounded-md py-2 hover:bg-gray-500">Hire Now</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Service;