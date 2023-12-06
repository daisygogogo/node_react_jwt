import axios from "axios";

export const httpClient = axios.create({
  timeout: 20 * 1000,
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});
