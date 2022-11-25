import './_cards.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ image, name, popularity, imdb, id }) {
    return (
        <>
            <div className='card'>
                <button className='btn-favorite'></button>
                <Link to={`Film/${id}`} className='linkCard'>
                    <img className="card-foto" src={image} alt="img" />
                    <h1 className="card-title">{name}</h1>
                    <div className="card-popular">Top: {popularity}</div>
                    <div className="card-rating">Рейтинг: {imdb}</div>
                </Link>
            </div>
        </>
    )
};

export default Cards;