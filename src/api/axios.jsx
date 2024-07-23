import axios from "axios";

const ACCOUNTS_URL = "http://127.0.0.1:8000/api/accounts";

export default axios.create({
  baseURL: ACCOUNTS_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});

export const accountsAPI = axios.create({
  baseURL: ACCOUNTS_URL,
  headers: {
    "Content-type": "application/json",
  },
  withCredentials: true,
});
