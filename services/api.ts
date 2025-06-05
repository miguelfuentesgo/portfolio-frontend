// services/api.ts
import axios, { type AxiosInstance, type AxiosResponse, AxiosError } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response) {
      console.error('Error en la respuesta del API:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('No se recibió respuesta del API:', error.request);
    } else {
      console.error('Error al configurar la solicitud:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;