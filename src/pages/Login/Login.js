import './Login.scss'

function Login () {
    
    return (
        <div className="login-card">
            <div className="login-card__tittle">Вход</div>
            <form action="#" className="login-card__form-login">
                <label className="login-card__label-email" htmlFor="email">Email</label>
                <input className="login-card__input-email" type="email" id="email" name="email" placeholder="Email"
                    autoComplete="off" />
                <label className="login-card__label-password" htmlFor="password">Пароль</label>
                <input className="login-card__input-password" type="password" id="password" name="password"
                    placeholder="Введите пароль" />
                <button className="login-card__button">Войти</button>
            </form>
        </div>
    )
}

export default Login;