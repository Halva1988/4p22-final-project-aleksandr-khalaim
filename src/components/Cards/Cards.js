import './cards.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { increment } from '../../store/counter/counterSlice';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../store/basket/basketSlice';

function Cards({ thumbnail, name, category, id, price }) {
    const dispatch = useDispatch();

    const onByClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        dispatch(addToBasket(id));
        dispatch(increment());
    }

    return (
        <>
            <div className='card'>
                <Link to={`Product/${id}`} className='linkCard'>
                    <div className="card-foto">
                        <img className="foto" src={thumbnail} alt="img" />
                    </div>
                    <h1 className="card-title">{name}</h1>
                    <button onClick={onByClick} className="by-product">Купить</button>
                    <div className="card-price">$ {price}</div>
                    <div className="card-category">{category}</div>
                </Link>
            </div>
        </>
    )
};

export default Cards;