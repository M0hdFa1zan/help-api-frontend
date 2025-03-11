import React from 'react';
import "./CardsList.css"
const CardsList = ({ cards, loading, error }) => {
    if (loading) return <p>Loading cards...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className='cardlist'>
            {cards.map((card) => (
                <div className='keycard' key={card.id}>
                    <div className='card-title'>{card.title}</div>
                    <div className='card-detail'>{card.description}</div>
                </div>
            ))}
        </div>
    );
};

export default CardsList;
