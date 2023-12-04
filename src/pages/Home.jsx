import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "../components/Banner";
import Services from "../components/Services";
import { useLoaderData } from "react-router-dom";
import Ourshows from "../components/Ourshows";
import Tickets from "../components/Tickets";
import Gallery from "../components/Gallery";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
const Home = () => {
   const [services, setServices] = useState([]);
    useEffect(()=> {
      fetch('http://localhost:4600/circuses')
      .then(res => res.json())
      .then(data => {
         setServices(data)
      })
    }, [])
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