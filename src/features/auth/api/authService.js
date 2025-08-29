import axios from "axios";

export const signupService = async (formData) => {
  try {
    const res = await axios.post(
      "https://www.apirequest.in/user/api/",
      formData
    ); //set backend signup url
    return res.data;
  } catch (error) {
    console.error("Signup error:", error.response?.data || error.message);
  }
};

export const loginService = async (formData) => {
  try {
    const res = await axios.post(
      "https://www.apirequest.in/user/api/login",
      formData
    ); //set backend login url
    return res.data;
  } catch (error) {
    console.error("login error:", error.response?.data || error.message);
  }
};
