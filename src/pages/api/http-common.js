import axios from "axios";

//Set Global BaseURL in Axios
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL_V2,
});

export default axiosInstance;
