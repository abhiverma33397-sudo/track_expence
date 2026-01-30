import axios from "axios";


 const baseURL = axios.create({
    baseURL:"https://apistudent2.codedonor.in/api/",
});

baseURL.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});


export default baseURL;