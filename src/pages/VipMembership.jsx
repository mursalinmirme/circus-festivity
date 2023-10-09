import React from 'react';
import vipMembership from '../assets/vip-membership.jpg';
import vipCircus4 from '../assets/vip-circus-4.jpg';
import vipCircus2 from '../assets/vip-circus-2.jpg';
import vipCircus3 from '../assets/vip-circus-3.jpg';
const VipMembership = () => {
    return (
        <div className='w-11/12 mx-auto pt-28'>
            <div style={{backgroundImage: `url(${vipMembership})`, backgroundSize: '100% 400px', backgroundRepeat: 'no-repeat', backgroundBlendMode: 'hue' }} className='relative flex justify-center items-center w-full h-[400px] bg-[#000000bd]'>
                <div className='absolute justify-center'>
                    <h3 className='text-5xl font-bold text-slate-100'>Get <span className='text-orange-500'>20%</span> Discount</h3>
                    <h2 className='text-slate-100 font-bold mt-14 text-4xl text-center'>Vip Membership</h2>
                </div>
            </div>
            <div className='mt-10'>
                    
                    <p className='text-center mt-4 text-3xl font-semi font-semibold text-gray-700 leading-relaxed'>Elevate your circus experience to new heights  <br /> with our VIP Show Section</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8'>
                        {/* vip card 1 */}
                        <div className="px-3.5 fullMagicCards">
                            <div className="relative">
                                <img className="h-[450px]" src={vipCircus4} alt="" />
                                <div className="absolute bg-[#0000009f] py-5 bottom-0 w-full h-full text-white text-left pl-5">
                                <div>
                                    <p className='bg-yellow-600 inline px-7 py-2 font-semibold'>Vip</p>
                                </div>
                                <div className='absolute w-full bottom-5'>
                                <h2 className="text-2xl font-bold text-slate-100 mt-4">Circus Royale Treasures</h2>
                                <p className="mt-3 text-yellow-500 font-semibold">
                                Starting Jun 2, 2024 to Jul 4, 2024
                                </p>
                                <div className='mt-4'>
                                    <button className='bg-white rounded py-1.5 px-3 font-semibold text-yellow-600 pr-10'>Get Membership</button>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* vip card 2 */}
                        <div className="px-3.5 fullMagicCards">
                            <div className="relative">
                                <img className="h-[450px]" src={vipCircus2} alt="" />
                                <div className="absolute bg-[#0000009f] py-5 bottom-0 w-full h-full text-white text-left pl-5">
                                <div>
                                    <p className='bg-yellow-600 inline px-7 py-2 font-semibold'>Vip</p>
                                </div>
                                <div className='absolute bottom-5'>
                                <h2 className="text-2xl font-bold text-slate-100 mt-4">Spectacle Splendors</h2>
                                <p className="mt-3 text-yellow-500 font-semibold">
                                Starting Jun 17, 2024 to Jul 4, 2024
                                </p>
                                <div className='mt-4'>
                                    <button className='bg-white rounded py-1.5 px-3 font-semibold text-yellow-600 pr-10'>Get Membership</button>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        {/* vip card 4 */}
                        <div className="px-3.5 fullMagicCards">
                            <div className="relative">
                                <img className="h-[450px]" src={vipCircus3} alt="" />
                                <div className="absolute bg-[#0000009f] py-5 bottom-0 w-full h-full text-white text-left pl-5">
                                <div>
                                    <p className='bg-yellow-600 inline px-7 py-2 font-semibold'>Vip</p>
                                </div>
                                <div className='absolute bottom-5'>
                                <h2 className="text-2xl font-bold text-slate-100 mt-4">Grand Marquee Magic</h2>
                                <p className="mt-3 text-yellow-500 font-semibold">
                                Starting Jun 12, 2024 to Jul 4, 2024
                                </p>
                                <div className='mt-4'>
                                    <button className='bg-white rounded py-1.5 px-3 font-semibold text-yellow-600 pr-10'>Get Membership</button>
                                </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default VipMembership;