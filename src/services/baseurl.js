import axios from "axios";
 const baseURL = axios.create({
    baseURL:"https://apistudent2.codedonor.in/api/"
});

export default baseURL;