import axios from "axios";

export const api = axios.create({
  baseURL: "https://food-explorer-back3.onrender.com",
  withCredentials: true,
});
