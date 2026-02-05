import baseURL from "./baseurl";

// 🔐 LOGIN
export const login = (values) =>
  baseURL.post("UserLogin/login", values);

// 📝 REGISTER (OTP AUTO SEND)
export const signUp = (values) =>
  baseURL.post("User/register", values);

// ✅ VERIFY OTP (signup + forgot both)
export const verifyOTP = (values) =>
  baseURL.post("UserLogin/verify-otp", values);

// 🔁 FORGOT PASSWORD (OTP SEND)
export const forgotPassword = (values) =>
  baseURL.post("Auth/forgot-password", {
    email: values?.email || values?.Email
  });


export const resetPassword = (values) =>
  baseURL.post("UserLogin/reset-password", values);

export const changePassword = (values) =>
  baseURL.post("Auth/change-password", values);
