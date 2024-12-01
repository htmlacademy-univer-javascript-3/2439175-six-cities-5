import axios, {AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import {getToken} from './token.ts';
import {StatusCodes} from 'http-status-codes';
import {processErrorHandle} from './process-error-action.ts';

type DetailMessageType = {
  type: string;
  message: string;
}

const StatusCodeMapping = new Set<number>([StatusCodes.BAD_REQUEST]);

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping.has(response.status);

const BACKEND_URL = 'https://14.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const CreateAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['X-Token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = (error.response.data);

        processErrorHandle(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
