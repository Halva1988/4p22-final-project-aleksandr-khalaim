
function FormRegistration() {
  const preventDefault = (event) => {
    event.preventDefault();
  };

  return (
    <div className="registration-card">
      <div className="registration-card__tittle">Регистрация</div>
      <form action="#" className="registration-card__form-registration">
          <div className="registration-card__wrapper-input">
              <label className="registration-card__label-email required" htmlFor="email">Email</label>
              <span className="registration-card__required-to-fill-email">Поле обязательно для заполнения</span>
              <span className="registration-card__incorrect-input">Email введён некорректно</span>
              <input className="registration-card__input-email registration-card--error-email" type="email" id="email" name="email" placeholder="Email" autoComplete="off" />
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
              <textarea className="textarea-comment__textarea" name="comment" id="comment" placeholder="Расскажите о себе..."></textarea>
          </div>
          <div className="registration-card__checkbox">
              <input className="checkbox__input-checkbox" type="checkbox" id="checkbox" name="checkbox" value="TRUE" />
              <label className="checkbox__label-checkbox" htmlFor="checkbox">Я согласен получать обновления на
                  почту</label>
          </div>
          <button onClick={(event) => event.preventDefault()} className="registration-card__button" type="submit">Регистрация</button>
      </form>
    </div>
  );
}

export default FormRegistration;
