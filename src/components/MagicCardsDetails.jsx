import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useParams } from "react-router-dom";
const MagicCardsDetails = () => {
    const [magicCard, setMagicCard] = useState({});
    const allCards = useLoaderData()
    const {cardId} = useParams();
    useEffect(() => {
        const currentCard = allCards.find(card => card.id == cardId);
        setMagicCard(currentCard);
    }, [])

    return (
        <div>
            <Helmet>
                <title>Magic Card Details</title>
            </Helmet>
            <div className='pt-28 w-11/12 lg:w-8/12 mx-auto'>
            <img className='mt-7 w-full h-[300px] md:h-[500px]' src={magicCard.image} alt="" />
            <h2 className='text-4xl font-bold text-gray-700 mt-6'>{magicCard.title}</h2>
            <p className='mt-5 text-lg'>{magicCard.description}</p>
            </div>
        </div>
    );
};

export default MagicCardsDetails;