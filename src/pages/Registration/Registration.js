import './registration.scss';

function FormRegistration() {
    const preventDefault = (event) => {
        event.preventDefault();
    // ----- create person ----- //

    const person = new Object();

    // ----- for input Email ----- //

    const email = document.querySelector('.registration-card__input-email').value;
    const inputEmail = document.querySelector('.registration-card--error-email');
    const fillEmail = document.querySelector('.registration-card__required-to-fill-email');
    const incorrectEmail = document.querySelector('.registration-card__incorrect-input');

    // ----- for input password ----- //

    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirmation').value;
    const inputPassword = document.querySelector('.registration-card--error-password');
    const fillPassword = document.querySelector('.registration-card__required-to-fill-password');
    const inputPasswordConfirm = document.querySelector('.registration-card--error-password-confirm');
    const notMatchConfirm = document.querySelector('.registration-card__not-match');
    const lengthPassword = document.querySelector('.registration-card__password-length');

    // ----- validation Email ----- //

    if (email.length === 0) {
        errorBorder(inputEmail);
        showErrorName(fillEmail);
        hideErrorName(incorrectEmail);
    }

    if (!validateEmail(email) && email.length >= 1) {
        showErrorName(incorrectEmail);
        errorBorder(inputEmail);
        hideErrorName(fillEmail);
    }

    if (validateEmail(email)) {
        borderNormal(inputEmail);
        hideErrorName(incorrectEmail);
        hideErrorName(fillEmail);
        person.email = email;
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    // ----- validation password ----- //

    if (password !== passwordConfirm) {
        errorBorder(inputPassword);
        errorBorder(inputPasswordConfirm);
        showErrorName(notMatchConfirm);
        hideErrorName(fillPassword);
    }

    if (password === '') {
        errorBorder(inputPassword);
        showErrorName(fillPassword);
    }

    if (passwordConfirm.length === 0) {
        errorBorder(inputPasswordConfirm);
        showErrorName(notMatchConfirm);
    }

    if (password.length > 0 && password.length < 8) {
        errorBorder(inputPassword);
        showErrorName(lengthPassword);
        hideErrorName(notMatchConfirm);
    }

    if (password.length >= 8 || password.length === 0) {
        hideErrorName(lengthPassword);
    }

    if (password.length >= 8 && password === passwordConfirm) {
        borderNormal(inputPassword);
        borderNormal(inputPasswordConfirm);
        hideErrorName(notMatchConfirm);
        hideErrorName(fillPassword);
        person.password = password;
        person.passwordConfirm = passwordConfirm;
    }

    const getGender = () => {
        const man = document.getElementById('man');
        const woman = document.getElementById('woman');
        if (man.checked) {
            person.sex = 'MAN';
        } else if (woman.checked) {
            person.sex = 'WOMAN';
        }
    };

    const getComment = () => {
        const comment = document.getElementById('comment');
        person.comment = comment.value;
    };

    const getCheckbox = () => {
        const check = document.getElementById('checkbox');
        if (check.checked) {
            person.checkbox = true;
        } else {
            person.checkbox = false;
        }
    };

    const getData = () => {
        getGender();
        getComment();
        getCheckbox();
    };

    // ----- error ----- //

    function errorBorder (elem) {
        elem.style.borderColor = 'rgba(238, 36, 36, 1)';
    }

    function borderNormal (elem) {
        elem.style.borderColor = '#787878';
    }

    function showErrorName (elem) {
        elem.style.display = 'block';
    }

    function hideErrorName (elem) {
        elem.style.display = 'none';
    }

    // ----- validation Email and password ----- //

    if (validateEmail(email) && password.length >= 8 && password === passwordConfirm) {
        getData();
        console.log(person);
    }
  };

  return (
    <div className="registration-card">
        <div className="registration-card__tittle">Регистрация</div>
        <form action="#" className="registration-card__form-registration">
            <div className="registration-card__wrapper-input">
                <label className="registration-card__label-email required" htmlFor="email">Email</label>
                <span className="registration-card__required-to-fill-email">Поле обязательно для заполнения</span>
                <span className="registration-card__incorrect-input">Email введён некорректно</span>
                <input className="registration-card__input-email registration-card--error-email" type="email" id="email" name="email" placeholder="Email"
                    autoComplete="off" />
            </div>
            <div className="registration-card__wrapper-input">
                <label className="registration-card__label-password required" htmlFor="password">Пароль</label>
                <span className="registration-card__required-to-fill-password">Поле обязательно для заполнения</span>
                <span className="registration-card__password-length">Пароль должен содержать не менее 8
                    символов</span>
                <input className="registration-card__input-password registration-card--error-password" type="password" id="password" name="password"
                    placeholder="Введите пароль" />
            </div>
            <div className="registration-card__wrapper-input">
                <label className="registration-card__label-password-confirmation required" htmlFor="password-confirmation">Подтверждение
                    пароля</label>
                <span className="registration-card__not-match">Пароли не совпадают</span>
                <input className="registration-card__input-password-confirmation registration-card--error-password-confirm" type="password" id="password-confirmation"
                    name="password-confirmation" placeholder="Подтвердите пароль" />
            </div>
            <div className="registration-card__radio">
                <legend className="radio__legend">Пол</legend>
                <div className="radio__man">
                    <input className="radio__input-man radio" type="radio" name="sex" id="man" value="MAN" />
                    <label className="radio__label-man" htmlFor="man">Мужчина</label>
                </div>
                <div className="radio__woman">
                    <input className="radio__input-woman radio" type="radio" name="sex" id="woman" value="WOMAN" />
                    <label className="radio__label-woman" htmlFor="woman">Женщина</label>
                </div>
            </div>
            <div className="registration-card__textarea-comment">
                <span className="textarea-comment__span">О себе</span>
                <textarea className="textarea-comment__textarea" name="comment" id="comment"
                    placeholder="Расскажите о себе..."></textarea>
            </div>
            <div className="registration-card__foto">
                <span className="foto__span">Вставте фото</span>
                <input type="file" name="photo" accept="image/*,image/jpeg" />
            </div>
            <div className="registration-card__checkbox">
                <input className="checkbox__input-checkbox" type="checkbox" id="checkbox" name="checkbox" value="TRUE" />
                <label className="checkbox__label-checkbox" htmlFor="checkbox">Я согласен получать обновления на
                    почту</label>
            </div>
            <button onClick={(event) => preventDefault(event)} className="registration-card__button" type="submit">Регистрация</button>
        </form>
    </div>
  );
}

export default FormRegistration;
