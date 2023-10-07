
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  
    return (
        <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3 className="bg-red-500 text-center">1</h3>
          </div>
          <div>
            <h3 className="bg-red-500 text-center">2</h3>
          </div>
          <div>
            <h3 className="bg-red-500 text-center">3</h3>
          </div>

        </Slider>
      </div>
    );
};

export default Home;