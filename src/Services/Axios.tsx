import axios from "axios";
import { baseUrl } from "./ServiceConstants";

const instance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

const jsonInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => Promise.reject(error)
);

jsonInstance.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => Promise.reject(error)
);

export { instance, jsonInstance };
