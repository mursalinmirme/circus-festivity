import Slider from 'react-slick';
import { useEffect, useState } from 'react';
import MagicsCards from './MagicsCards';
const Ourshows = () => {

    const [magics, setMagics] = useState([])

    useEffect(() => {
        fetch('/public/magics.json')
        .then(res => res.json())
        .then(data => setMagics(data))
    }, [])

    const settings = {
      dots: false,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 2000,
      speed: 1000,
      pauseOnHover: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
      };
    return (
        <div className='w-11/12 mx-auto mt-20'>
            <h2 className='text-center font-bold text-gray-600 text-3xl'>Our Fantastic Show</h2>
            <h4 className='text-center text-base font-medium text-gray-600 mt-3 '>Magic of Our Spectacular Shows</h4>
       <div className='mt-10'>
        <div>
        <Slider {...settings}>
        {/* single slider 1 */}
        {
            magics.map(magic => <MagicsCards key={magic.id} magic={magic}></MagicsCards>)
            
        }
          

          
        </Slider>
      </div>
            </div>
        </div>
    );
};

export default Ourshows;