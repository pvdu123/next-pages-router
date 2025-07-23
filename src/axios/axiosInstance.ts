import axios from "axios";

const baseURL = "https://nestjs-vercel-197.vercel.app";

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;