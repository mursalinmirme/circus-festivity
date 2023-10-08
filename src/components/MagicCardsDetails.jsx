import { useEffect, useState } from 'react';
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
        <div className='pt-28 w-8/12 mx-auto'>
            <img className='mt-7 w-full h-[500px]' src={magicCard.image} alt="" />
            <h2 className='text-4xl font-semibold text-gray-700 mt-6'>{magicCard.title}</h2>
            <p className='mt-8'>{magicCard.description}</p>
        </div>
    );
};

export default MagicCardsDetails;