import baseURL from "./baseurl";


export const login = (values) =>
  baseURL.post("user login/login", values);


export const signUp = (values) =>
  baseURL.post("user login/register", values);


export const verifyOTP = (values) =>
  baseURL.post("user login/verify-otp", values);


export const forgotPassword = (values) =>
  baseURL.post("user login/forget-password", {
    userName: values.email,   
    isRegisterOtp: false,
    isLoginOtp: false,
  });
 
// export const verifyOTP = (values) =>
//   baseURL.post("user login/verify-otp", values);

  
export const resetPassword = (values) =>
  baseURL.post("user login/reset-password", values);


export const changePassword = (values) =>
  baseURL.post("user login/change-password", values);
