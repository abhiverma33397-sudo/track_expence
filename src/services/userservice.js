import baseURL from "./baseurl";



export const login = (values) => baseURL.post("Auth/login", values);
export const signUp = (values) => baseURL.post("User/register", values);
export const forgotPassword = (values) => {
	const payload = { email: values?.Email || values?.email };
	console.log(payload);
	return baseURL.post("Auth/forgot-password", payload);
};
export const verifyOTP = (values) => baseURL.post("Auth/verify-otp", values);

export const resetPassword = (values) => baseURL.post("Auth/reset-password", values);
export const changePassword = (values) => baseURL.post("Auth/change-password", values);


