const Event = ({pic, date, time, eventName}) => {
    console.log(pic);
    return (
        <div className='relative h-[460px]'>
                    <img className="w-full h-full" src={pic} alt="" />
                    <div className='absolute bg-[#000000bf] top-0 text-white w-full h-full'>
                        <div className='absolute left-3 top-5'>
                            <p className='bg-yellow-400 text-black inline px-6 py-2 font-semibold rounded'>Upcomming</p>
                        </div>
                        <div className='absolute bottom-5 text-left left-4 space-y-4'>
                        <h4 className='text-lg font-semibold text-yellow-400'>Shedule: {time}</h4>
                        <h3 className='text-xl font-semibold text-yellow-400'>Date: {date}</h3>
                        <h2 className='text-2xl font-bold text-slate-100'>{eventName}</h2>
                        </div>
                    </div>
                </div>
    );
};

export default Event;