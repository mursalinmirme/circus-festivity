import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Toaster } from "react-hot-toast";
import AOS from 'aos';
import 'aos/dist/aos.css';
const MainLayout = () => {
    AOS.init();
    return (
        <div className="font-montserrat max-w-screen-2xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default MainLayout;