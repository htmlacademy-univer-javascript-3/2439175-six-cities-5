import {FormEvent, useRef} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions.ts';

export function LoginForm(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };
  return (
    <form className="login__form form" action="" onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email"
          required ref={loginRef}
        >
        </input>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password"
          required ref={passwordRef}
        >
        </input>
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in
      </button>
    </form>
  );
}
