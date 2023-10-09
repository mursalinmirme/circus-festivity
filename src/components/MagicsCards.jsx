import { Link } from 'react-router-dom';
import './MagicCards.css';
const MagicsCards = ({magic}) => {
    const {id, title, description,image,startinMagic} = magic;
    return (
        <div data-aos="zoom-in" className="px-3.5 fullMagicCards">
          <div className="relative">
            <img className="h-[450px]" src={image} alt="" />
            <div className="absolute bg-[#00000071] py-5 bottom-0 w-full text-white text-center">
              <div className='magicCardDetailsBtn'>
              <Link to={`/magic-card-details/${id}`}><button className='bg-slate-100 text-black font-semibold px-5 py-2 rounded text-lg hover:bg-orange-500 hover:text-white'>Details</button></Link>
              </div>
              <h2 className="text-2xl font-bold text-slate-50 mt-4">{title}</h2>
              <p className="mt-5 text-slate-50">
                {startinMagic}
              </p>
            </div>
          </div>
        </div>
      );
};

export default MagicsCards;
