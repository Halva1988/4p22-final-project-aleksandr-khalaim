import '../style/formRegistration.scss';

function FormRegistration() {
  // const preventDefault = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div class="registration-card">
      <div class="registration-card__tittle">Регистрация</div>
      <form action="#" class="registration-card__form-registration">
          <div class="registration-card__wrapper-input">
              <label class="registration-card__label-email required" for="email">Email</label>
              <span class="registration-card__required-to-fill-email">Поле обязательно для заполнения</span>
              <span class="registration-card__incorrect-input">Email введён некорректно</span>
              <input class="registration-card__input-email registration-card--error-email" type="email" id="email" name="email" placeholder="Email"
                  autocomplete="off" />
          </div>
          <div class="registration-card__wrapper-input">
              <label class="registration-card__label-password required" for="password">Пароль</label>
              <span class="registration-card__required-to-fill-password">Поле обязательно для заполнения</span>
              <span class="registration-card__password-length">Пароль должен содержать не менее 8
                  символов</span>
              <input class="registration-card__input-password registration-card--error-password" type="password" id="password" name="password"
                  placeholder="Введите пароль" />
          </div>
          <div class="registration-card__wrapper-input">
              <label class="registration-card__label-password-confirmation required" for="password-confirmation">Подтверждение
                  пароля</label>
              <span class="registration-card__not-match">Пароли не совпадают</span>
              <input class="registration-card__input-password-confirmation registration-card--error-password-confirm" type="password" id="password-confirmation"
                  name="password-confirmation" placeholder="Подтвердите пароль" />
          </div>
          <div class="registration-card__radio">
              <legend class="radio__legend">Пол</legend>
              <div class="radio__man">
                  <input class="radio__input-man radio" type="radio" name="sex" id="man" value="MAN" />
                  <label class="radio__label-man" for="man">Мужчина</label>
              </div>
              <div class="radio__woman">
                  <input class="radio__input-woman radio" type="radio" name="sex" id="woman" value="WOMAN" />
                  <label class="radio__label-woman" for="woman">Женщина</label>
              </div>
          </div>
          <div class="registration-card__textarea-comment">
              <span class="textarea-comment__span">О себе</span>
              <textarea class="textarea-comment__textarea" name="comment" id="comment" contenteditable="false"
                  placeholder="Расскажите о себе..."></textarea>
          </div>
          <div class="registration-card__checkbox">
              <input class="checkbox__input-checkbox" type="checkbox" id="checkbox" name="checkbox" value="TRUE" />
              <label class="checkbox__label-checkbox" for="checkbox">Я согласен получать обновления на
                  почту</label>
          </div>
          <button onClick={(event) => event.preventDefault()} class="registration-card__button" type="submit">Регистрация</button>
      </form>
    </div>
  );
}

export default FormRegistration;
