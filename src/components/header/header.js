import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
    const count = useSelector((state) => state.counter.value);

    return (
        <header className="header">
            <img className="header__logo" src={require('../../img/header/tv.png')} alt="logo" />
            <Link to={'/'} className="header__tittle">Fake Shop</Link>
            <div className="header__link">
                <Link to={'Basket'} className='basket-wrapper'><img  className='header__basket' src={require('../../img/header/basket.png')}/><b className='basketCount'>{ count }</b></Link>
                <Link to={'Login'} className="header__login">Sign in</Link>
                <Link to={'Registration'} className="header__login">Registration</Link>
                
            </div>
        </header>
    )
};

export default Header;
