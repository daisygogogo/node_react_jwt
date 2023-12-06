import { httpClient } from "../utils/request.js";

export const userLogin = (params) => {
  return httpClient.post("/login", params);
};

export const userRegister = (params) => {
  return httpClient.post("/register", params);
};
