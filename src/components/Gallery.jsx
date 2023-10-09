import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';
import './Gallery.css';
const Gallery = () => {
    return (
        <div className="w-11/12 mx-auto mt-16">
            <h2 className="text-center text-3xl font-bold">Our Gallery</h2>
            <p className='text-center mt-4 font-semibold text-lg text-gray-600'>Visit our latest galleries photos</p>
            <div className='lg:flex mt-12'>
                {/* left */}
                <div className='lg:flex-1 items-center'>
                    <div data-aos="zoom-in" className='relative galleryPhotoDiv'>
                        <img className='h-[350px] w-full' src={gallery4} alt="" />
                        <div className='galleryImgOverlay hidden'>
                        <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-orange-500 text-white'>
                           <h3 className='text-2xl font-semibold'>Julia Alson</h3>
                           <h5 className='text-base font-medium mt-1'>Artist</h5>
                        </div>
                        </div>
                    </div>
                    <div className='lg:flex'>
                        <div data-aos="zoom-in" className='flex-1 h-[350px] relative galleryPhotoDiv'>
                            <img className='w-full h-full' src={gallery1} alt="" />
                           <div className='galleryImgOverlay hidden'>
                           <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-orange-500 text-white'>
                           <h3 className='text-2xl font-semibold'>Jimula kule</h3>
                           <h5 className='text-base font-medium mt-1'>Artist</h5>
                          </div>
                           </div>
                        </div>
                        <div data-aos="zoom-in" className='flex-1 h-[350px] relative galleryPhotoDiv'>
                            <img className='w-full h-full' src={gallery5} alt="" />
                            <div className='galleryImgOverlay hidden'>
                            <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-orange-500 text-white'>
                           <h3 className='text-2xl font-semibold'>Jilora Hekh</h3>
                           <h5 className='text-base font-medium mt-1'>Artist</h5>
                          </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right */}
                <div className='lg:flex-1 items-center'>
                    <div className='lg:flex'>
                        <div data-aos="zoom-in" className='flex-1 h-[350px] relative galleryPhotoDiv'>
                            <img className='w-full h-full' src={gallery3} alt="" />
                            <div className='galleryImgOverlay hidden'>
                            <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-orange-500 text-white'>
                           <h3 className='text-2xl font-semibold'>Hiplo karl</h3>
                           <h5 className='text-base font-medium mt-1'>Artist</h5>
                          </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className='lg:flex-1 h-[350px] relative galleryPhotoDiv'>
                            <img className='w-full h-full' src={gallery2} alt="" />
                            <div className='galleryImgOverlay hidden'>
                            <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-orange-500 text-white'>
                           <h3 className='text-2xl font-semibold'>Jeyreha jul</h3>
                           <h5 className='text-base font-medium mt-1'>Artist</h5>
                          </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className='relative galleryPhotoDiv'>
                        <img className='h-[350px] w-full' src={gallery6} alt="" />
                        <div className='galleryImgOverlay hidden'>
                        <div className='absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full bg-orange-500 text-white'>
                           <h3 className='text-2xl font-semibold'>Abrar Linkon</h3>
                           <h5 className='text-base font-medium mt-1'>Artist</h5>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;