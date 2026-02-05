import baseURL from "./baseurl";


export const login = (values) =>
  baseURL.post("UserLogin/login", values);


export const signUp = (values) =>
  baseURL.post("User/register", values);


export const verifyOTP = (values) =>
  baseURL.post("UserLogin/verify-otp", values);


export const forgotPassword = (values) =>
  baseURL.post("Auth/forgot-password", {
    email: values?.email || values?.Email,
  });

export const resetPassword = (values) =>
  baseURL.post("UserLogin/reset-password", values);


export const changePassword = (values) =>
  baseURL.post("Auth/change-password", values);
