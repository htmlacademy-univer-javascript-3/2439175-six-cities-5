import {FormEvent} from 'react';
import {useAppDispatch} from '../../hooks';
import {loginAction} from '../../store/api-actions.ts';

export function LoginForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    if (email !== null && password !== null) {
      dispatch(loginAction({
        email: email.toString(),
        password: password.toString(),
      }));
    }
  };
  return (
    <form className="login__form form" action="" onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email"
          required
        >
        </input>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password"
          required
        >
        </input>
      </div>
      <button className="login__submit form__submit button" type="submit">Sign in
      </button>
    </form>
  );
}
