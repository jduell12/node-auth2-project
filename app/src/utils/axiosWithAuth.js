import axios from "axios";
import { BASE_URL } from "./constants";

export const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: BASE_URL,
  });
};
