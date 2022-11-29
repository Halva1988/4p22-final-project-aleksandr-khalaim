import './header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={require('../../img/header/tv.png')} alt="logo" />
            <Link to={'/'} className="header__tittle">Fake Shop</Link>
            <div className="header__link">
                <Link to={'Basket'} className='basket-wrapper'><img  className='header__basket' src={require('../../img/header/basket.png')}/></Link>
                <Link to={'Login'} className="header__login">Sign in</Link>
                <Link to={'Registration'} className="header__login">Registration</Link>
            </div>
        </header>
    )
};

export default Header;
