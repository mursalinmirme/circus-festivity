import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Ourshows from "../components/Ourshows";
import Services from "../components/Services";
import Tickets from "../components/Tickets";
const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_running_server}/circuses`)
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Home Circus</title>
      </Helmet>
      <div className="max-w-screen-2xl">
        {/* banner */}
        <Banner></Banner>
        {/* services courses */}
        <Services services={services}></Services>
        {/* our show section */}
        <Ourshows></Ourshows>
        {/* buy Ticket Section */}
        <Tickets></Tickets>
        {/* our gallery */}
        <Gallery></Gallery>
      </div>
    </div>
  );
};

export default Home;
