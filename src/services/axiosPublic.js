import axios from "axios";

// Public Axios instance (No Authentication Required)
const axiosPublic = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export default axiosPublic;

