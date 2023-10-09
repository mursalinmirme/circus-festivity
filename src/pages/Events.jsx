import React from 'react';
import event1 from '../assets/circus-event1.jpg';
import event2 from '../assets/fling-circus.jpg';
import event3 from '../assets/circus-event-3.jpg';
import event4 from '../assets/magic-show.jpg';
import event5 from '../assets/circus-event-4.jpg';
import event6 from '../assets/juggler-circus.jpg';

import Event from '../components/Event';
const Events = () => {
    return (
        <div className='w-11/12 mx-auto pt-28'>
            <h3 className='text-center font-bold text-gray-800 text-3xl mt-7'>Our Exciting Next Events</h3>
            <div className='grid grid-cols-3 gap-6 mt-10'>
                <Event pic={event1} eventName="The Great Circus Parade" time="8pm - 11am" date="21 November 2023"></Event>
                <Event pic={event2} eventName="The Flying Trapeze Showcase" time="11pm - 3am" date="23 November 2023"></Event>
                <Event pic={event3} eventName="Clown Capers and Comedy" time="7pm - 10am" date="25 November 2023"></Event>
                <Event pic={event4} eventName="Mysteries of Magic" time="10pm - 1am" date="27 November 2023"></Event>
                <Event pic={event5} eventName="Acrobatic Marvels" time="9pm - 12am" date="29 November 2023"></Event>
                <Event pic={event6} eventName="Jugglers and Jesters" time="7pm - 10am" date="1 December 2023"></Event>
            </div>
        </div>
    );
};

export default Events;