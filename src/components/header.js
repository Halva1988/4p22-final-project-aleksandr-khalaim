import '../style/header.scss';

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src="./img/logo.png" alt="logo" />
            <div className="header__tittle">PCS Frontend</div>
            <div className="header__link">
                <a href="./registration/pageReg.html" class="header__registration">Регистрация</a>
                <a href="" class="header__login">Вход</a>
            </div>
        </header>
    )
};

export default Header;