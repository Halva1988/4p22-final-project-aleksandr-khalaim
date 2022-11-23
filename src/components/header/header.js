import './_header.scss';
import React from 'react';


export default function Header() {


    return (
        <header className="header">
            <img className="header__logo" src={require('../../img/header/tv.png')} alt="logo" />
            <div className="header__tittle">MovieBox</div>
            <div className="header__search">
                <input type="text" placeholder="Поиск" />
            </div>
            <div className="header__link">
                <a href="/" className="header__login">Sign in</a>
            </div>
        </header>
    )
};
