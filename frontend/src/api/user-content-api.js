import { httpClient } from "../utils/request.js";

export const getCommonUserContent = (params) => {
  return httpClient.get("/user/getCommonUserContent", params);
};

export const getAdminContent = (params) => {
  return httpClient.get("/user/getAdminContent", params);
};
