import './cards.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { increment } from '../../store/counter/counterSlice';
import { useDispatch } from 'react-redux';

function Cards({ thumbnail, name, category, id }) {
    const dispatch = useDispatch();

    const onClickIncrement = () => {
        dispatch(increment());
    };

    return (
        <>
            <div className='card'>
                <Link to={`Product/${id}`} className='linkCard'>
                    <div className="card-foto">
                        <img className="foto" src={thumbnail} alt="img" />
                    </div>
                    <h1 className="card-title">{name}</h1>
                    <button onClick={onClickIncrement} className="by-product">Купить</button>
                    <div className="card-rating">Категория: {category}</div>
                </Link>
            </div>
        </>
    )
};

export default Cards;