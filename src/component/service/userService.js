
import { baseUrl } from "./baseurl";

export const login = (values) => baseUrl.post("Auth/login", values);
export const signUp = (values) => baseUrl.post("User/register", values);

export const forgetPassword = (values) => baseUrl.post("Auth/forgot-password", values);
export const resetPassword = (values) => baseUrl.post("Auth/reset-password", values);
