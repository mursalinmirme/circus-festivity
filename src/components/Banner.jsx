import Slider from 'react-slick';
import bannerOne from "../assets/bannerOne.jpg";
import bannerTwo from "../assets/bannerTwo.jpg";
import bannerThree from "../assets/bannerThree.jpg";
const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        autoplaySpeed: 4000,
        autoplay:true,
        pauseOnHover: false,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
        <div>
            <div className="center overflow-hidden border-none">
        <Slider {...settings}>
          {/* slider 2 */}
          <div className="w-full border-none h-[800px]">
                <div className='relative'>
                  <img className="w-full" src={bannerOne} alt="" />
                  <div className="absolute text-white top-0 bg-[#000000c6] w-full h-full">
                    <div className='flex justify-center flex-col items-center h-[800px]'>
                    <div className='text-5xl font-bold mt-10 leading-relaxed flex justify-center text-center w-full pl-20'>
                    <h2 className='w-[750px] text-zinc-300'>Embrace a World of Marvel and Joy Uncover Magnificent Circus Shows Nearby</h2>
                    </div>
                    <div className='flex justify-center w-full pl-20'>
                    <button className='btn bg-yellow-600 border-none outline-none text-base font-semibold mt-12 rounded-full px-7 text-white hover:text-black'>Explore Now</button>
                    </div>
                    </div>
                  </div>
                </div>
          </div>
          {/* slider 2 */}
          <div className="w-full border-none h-[800px]">
                <div className='relative'>
                  <img className="w-full" src={bannerTwo} alt="" />
                  <div className="absolute text-white top-0 bg-[#000000c6] w-full h-full">
                    <div className='flex justify-center flex-col items-center h-[800px]'>
                    <div className='text-5xl font-bold mt-10 leading-relaxed flex justify-start w-full pl-20'>
                    <h2 className='w-[700px] text-zinc-300'>Unveil the Magic of Circus Excellence Experience Thrilling Shows Right in Your Area</h2>
                    </div>
                    <div className='flex justify-start w-full pl-20'>
                    <button className='btn bg-yellow-600 border-none outline-none text-base font-semibold mt-12 rounded-full px-7 text-white hover:text-black'>Explore Now</button>
                    </div>
                    </div>
                  </div>
                </div>
          </div>
          {/* slider 3 */}
          <div className="w-full border-none h-[800px]">
                <div className='relative'>
                  <img className="w-full" src={bannerThree} alt="" />
                  <div className="absolute text-white top-0 bg-[#000000c6] w-full h-full">
                    <div className='flex justify-center flex-col items-center h-[750px]'>
                    <div className='text-5xl font-bold mt-10 leading-relaxed flex justify-end w-full text-end pr-20'>
                    <h2 className='w-[700px] text-zinc-300'>Step into the Circus Extravaganza Find Unforgettable Entertainment Near You</h2>
                    </div>
                    <div className='flex justify-end w-full pr-20'>
                    <button className='btn bg-yellow-600 border-none outline-none text-base font-semibold mt-12 rounded-full px-7 text-white hover:text-black'>Explore Now</button>
                    </div>
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