import {getCookie, removeCookie, setCookie} from 'typescript-cookie';

const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export type Token = string;

export const getToken = (): Token => {
  const token = getCookie(AUTH_TOKEN_KEY_NAME);
  return token === undefined ? '' : token;
};

export const saveToken = (token: Token): void => {
  setCookie(AUTH_TOKEN_KEY_NAME, token);
};

export const dropToken = (): void => {
  removeCookie(AUTH_TOKEN_KEY_NAME);
};
