import axios from "axios";
import { environnement } from "./environnement";
import { Post, User } from "./types";

interface userData {
  data: User[];
}

const api = {
  admin: {
    delete: (id: number) => {
      return axios
        .delete(`${environnement.apiUrl}/admin/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    save: (id: number, data: { username: string }) => {
      return axios
        .post(`${environnement.apiUrl}/admin/${id}`, data)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
  },
  comment: {
    create: (postId: number, data: { userId: number; content: string }) => {
      return axios
        .post(`${environnement.apiUrl}/comment/${postId}`, data)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    update: (commentId: number, data: { userId: number; content: string }) => {
      return axios
        .put(`${environnement.apiUrl}/comment/${commentId}`, data)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    delete: (commentId: number) => {
      return axios
        .delete(`${environnement.apiUrl}/comment/${commentId}`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
  },
  user: {
    showAll: () => {
      return axios
        .get<userData>(`${environnement.apiUrl}/user`)
        .then((res) => {
          const { data } = res.data;
          return data;
        })
        .catch((err) => console.log({ err: err.message }));
    },
    save: (data: { username: string; email: string; password: string }) => {
      return axios
        .post<User>(`${environnement.apiUrl}/auth/signup`, data)
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
        .get<Post[]>(`${environnement.apiUrl}/post`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    showOne: (id: number) => {
      return axios
        .get<Post>(`${environnement.apiUrl}/post/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    create: (data: { userId: number; message: string; image?: File }) => {
      const formData = new FormData();
      formData.append("userId", data.userId.toString());
      formData.append("message", data.message);
      formData.append("image", data.image !== undefined ? data.image : "");

      return axios
        .post(`${environnement.apiUrl}/post`, formData)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    update: (
      id: number,
      data: { userId: number; message: string; image?: File }
    ) => {
      const formData = new FormData();
      formData.append("userId", data.userId.toString());
      formData.append("message", data.message);
      formData.append("image", data.image !== undefined ? data.image : "");

      return axios
        .put(`${environnement.apiUrl}/post/${id}`, formData)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    delete: (id: number) => {
      return axios
        .delete(`${environnement.apiUrl}/post/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    like: (data: { postId: number; userId: number }) => {
      return axios
        .post(`${environnement.apiUrl}/like`, data)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
    unlike: (id: number) => {
      return axios
        .delete(`${environnement.apiUrl}/like/${id}`)
        .then((res) => res.data)
        .catch((err) => console.log({ err: err.message }));
    },
  },
};

export default api;
