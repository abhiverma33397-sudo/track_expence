import axios from "axios";

const baseURL = axios.create({
  baseURL: "http://trackexpenseabhi.runasp.net/api/",
});

export default baseURL;