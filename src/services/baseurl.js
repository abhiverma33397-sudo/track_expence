import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://localhost:7213/api/",
});

export default baseURL;