import './_cards.scss';
import React from 'react';

export const Cards = ({ image, name, popularity, ems }) => {
    return (
        <>
            <div className="card">
                <img className="card-foto" src={image} alt="img" />
                <h1 className="card-title">{name}</h1>
                <div className="card-popular">Top: {popularity}</div>
                <div className="card-rating">Рейтинг: {ems}</div>
            </div>
        </>
    )
};

export default Cards;