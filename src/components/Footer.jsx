import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs"
const Footer = () => {
    return (
        <div className="max-w-screen-2xl bg-base-200 mt-16">
          <div className="w-11/12 mx-auto">
          <footer className="footer flex flex-col lg:flex-row justify-between pt-20 pb-10 bg-base-200 text-base-content">
  <aside>
    <p className="text-3xl font-bold"><span className="text-[#ffa51d]">Circus</span>Festivity</p>
    <p className="mt-3 leading-8"> Dedicated to Elevating the Circus <br /> Arts and Inspiring Excellence.</p>
  </aside> 
  <nav>
    <header className="footer-title text-gray-900">Useful Links</header> 
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">Our Service</a> 
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">Terms and conditions</a> 
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">Contact Us</a>
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">Privacy Policy</a>
  </nav> 
  <nav>
    <header className="footer-title text-gray-900">Company</header> 
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">About us</a> 
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">Payment System</a> 
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">Jobs</a> 
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title text-gray-900">Our Support</header> 
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">Help Center</a> 
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">Speicial Support</a> 
    <a className="link link-hover text-base font-medium text-gray-600 mt-1">Contact Support</a>
  </nav>
  <div> 
  <header className="footer-title text-gray-900">Our Social media</header> 
    <ul className="flex text-xl space-x-6 mt-5">
      <li><a className="text-black" href="#"><BsGithub></BsGithub></a></li>
      <li><a className="text-sky-700" href="#"><BsLinkedin></BsLinkedin></a></li>
      <li><a className="text-blue-700" href="#"><BsFacebook></BsFacebook></a></li>
      <li><a className="text-orange-700" href="#"><BsInstagram></BsInstagram></a></li>
      <li><a className="text-red-600" href="#"><BsYoutube></BsYoutube></a></li>
    </ul>
  </div>
</footer>
<p className="text text-center pb-8 border-t border-t-gray-300 pt-5">© All Right Reserved By Mursalin Mir</p>
        </div>
        </div>
    );
};

export default Footer;