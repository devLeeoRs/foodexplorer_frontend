import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-leonardooliveira.koyeb.app",
  withCredentials: true,
});
