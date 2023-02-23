import axios from "axios";
import { environnement } from "./environnement";

const api = {
  user: {
    showAll: () => {
      return axios
        .get(`${environnement.apiUrl}/user`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    save: (data: { username: string; email: string; password: string }) => {
      return axios
        .post(`${environnement.apiUrl}/auth/signup`, data)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    login: (data: { username: string; password: string }) => {
      return axios
        .post(`${environnement.apiUrl}/auth/login`, data)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    delete: (id: number) => {
      return axios
        .delete(`${environnement.apiUrl}/user/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    checkToken: (data: { token: string; id: number }) => {
      return axios
        .post(`${environnement.apiUrl}/auth/checkToken`, data)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    info: (id: number) => {
      return axios
        .get(`${environnement.apiUrl}/user/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
  },
  posts: {
    showAll: () => {
      return axios
        .get(`${environnement.apiUrl}/post`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    showOne: (id: number) => {
      return axios
        .get(`${environnement.apiUrl}/post/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
  },
};

export default api;
