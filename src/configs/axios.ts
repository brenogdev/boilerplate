import axios, { AxiosRequestConfig } from "axios";
import { store } from "../store";
import { errorInterceptor } from "./errorInterceptor";
import { responseInterceptor } from "./responseInterceptor";

const { authentication } = store.getState();

const token = authentication.userLogged.accessToken;

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 300000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config: any) => {
  if (config.headers === undefined) {
    config.headers = {};
  }
  if (!config.headers.Authorization && token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
);

export default axiosInstance;
