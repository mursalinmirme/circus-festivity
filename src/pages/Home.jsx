import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { useLoaderData } from "react-router-dom";
const Home = () => {
    const services = useLoaderData();
    console.log(services);
    return (
       <div className="max-w-screen-2xl">
          {/* banner */}
          <Banner></Banner>
          {/* services courses */}
          <Services services={services}></Services>
         
       </div>

    );
};

export default Home;