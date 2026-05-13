import baseURL from "./baseurl";


export const login = (values) =>
  baseURL.post("Auth/login", values);


export const signUp = (values) =>
  baseURL.post("User", values);


export const verifyOTP = (values) =>
  baseURL.post("Auth/otp-verify", values);


export const forgotPassword = (values) =>
  baseURL.post("Auth/forget-password", {
    emailId: values.emailId
  });
 

// export const resetPassword = (values) =>
//   baseURL.post("Auth/reset-password", values);


export const changePassword = (values) =>
  baseURL.post("Auth/change-password", values);
