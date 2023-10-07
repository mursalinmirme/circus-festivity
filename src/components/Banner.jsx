import Slider from 'react-slick';
import bannerOne from "../assets/bannerOne.jpg";
import bannerTwo from "../assets/bannerTwo.jpg";
import bannerThree from "../assets/bannerThree.jpg";
const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <div className="center overflow-hidden border-none">
        <Slider {...settings}>
          {/* slider 1 */}
          <div className="w-full border-none h-[100vh]">
                <div className='relative'>
                  <img className="w-full" src={bannerOne} alt="" />
                  <div className="absolute text-white top-0 bg-[#000000c6] w-full h-full">
                    <div className='flex justify-center flex-col items-center h-[99vh]'>
                    <h3 className="text-xl text-white">InnoLearn Innovative & Successfull</h3>
                    <h2 className='text-7xl font-bold mt-10'>Online Courses</h2>
                    <button className='btn bg-green-600 border-none outline-none text-base font-semibold mt-12 rounded-none px-7 text-white'>Join Now</button>
                    </div>
                  </div>
                </div>
          </div>
          {/* slider 2 */}
          <div className="w-full border-none h-[100vh]">
                <div className='relative'>
                  <img className="w-full" src={bannerTwo} alt="" />
                  <div className="absolute text-white top-0 bg-[#000000c6] w-full h-full">
                    <div className='flex justify-center flex-col items-center h-[99vh]'>
                    <h3 className="text-xl text-white">InnoLearn Innovative & Successfull</h3>
                    <h2 className='text-7xl font-bold mt-10'>Online Courses</h2>
                    <button className='btn bg-green-600 border-none outline-none text-base font-semibold mt-12 rounded-none px-7 text-white'>Join Now</button>
                    </div>
                  </div>
                </div>
          </div>
          {/* slider 3 */}
          <div className="w-full border-none h-[100vh]">
                <div className='relative'>
                  <img className="w-full" src={bannerThree} alt="" />
                  <div className="absolute text-white top-0 bg-[#000000c6] w-full h-full">
                    <div className='flex justify-center flex-col items-center h-[99vh]'>
                    <h3 className="text-xl text-white">InnoLearn Innovative & Successfull</h3>
                    <h2 className='text-7xl font-bold mt-10'>Online Courses</h2>
                    <button className='btn bg-green-600 border-none outline-none text-base font-semibold mt-12 rounded-none px-7 text-white'>Join Now</button>
                    </div>
                  </div>
                </div>
          </div>


        </Slider>
      </div>
        </div>
    );
};

export default Banner;