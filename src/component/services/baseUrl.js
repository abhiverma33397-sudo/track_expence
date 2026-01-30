import axios from 'axios';

export const baseurl=axios.create({
    baseURL:"https://apistudent2.codedonor.in/api/"
});
export default baseurl;