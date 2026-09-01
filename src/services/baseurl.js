import axios from "axios";

const baseURL = axios.create({
  baseURL: "https://expensetrackerr.runasp.net/api/",
});

export default baseURL;