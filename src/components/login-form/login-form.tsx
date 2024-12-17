import {ChangeEvent, FormEvent, useState} from 'react';
import {useAppDispatch} from '../../hooks';
import {fetchFavorites, loginAction} from '../../store/api-actions.ts';
import {processErrorHandle} from '../../services/handle-error.ts';

export function LoginForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const changeEmail = (event: ChangeEvent<HTMLInputElement>) =>
    setEmail(event.target.value);

  const changePassword = (event: ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (/[a-z]/.test(password) && /[0-9]/.test(password)) {
      dispatch(loginAction({
        email: email,
        password: password,
      }))
        .then(() => {
          dispatch(fetchFavorites());
        });
    } else {
      processErrorHandle('Password should contain at least 1 letter and digit');
    }
  };
  return (
    <form className="login__form form" action="" onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" onChange={changeEmail}
          required
        >
        </input>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" onChange={changePassword}
          required
        >
        </input>
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in
      </button>
    </form>
  );
}
