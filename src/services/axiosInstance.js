import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import { useMemo } from "react";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
})

const useAxiosInstance = () => {
    const navigate = useNavigate();
    const { logOut, user } = useAuth();
    // console.log('useAxiosInstance touched');


    // Attach Token
    axiosInstance.interceptors.request.use((config) => {
        // console.log('interceptors request');

        const token = localStorage.getItem('access-token');
        console.log('interceptors request and token->', token);
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    })

    // Handle Unauthorized Access
    axiosInstance.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
            console.log('interceptors response');
            // if (user) {
            //     await logOut();
            //     navigate('/login');
            // }
            await logOut();
            // localStorage.removeItem('access-token')
            navigate('/login')
        }
        return Promise.reject(error);
    });

    return axiosInstance;
}


// const useAxiosInstance = () => {
//     const navigate = useNavigate();
//     const { logOut } = useAuth();
//     return useMemo(() => {
//         const instance = axios.create({
//             baseURL: import.meta.env.VITE_API_URL,
//         });
//         instance.interceptors.request.use((config) => {
//             const token = localStorage.getItem('access-token');
//             if (token) {
//                 config.headers['Authorization'] = `Bearer ${token}`
//             }
//             return config;
//         }, (error) => {
//             return Promise.reject(error);
//         });
//         instance.interceptors.response.use((response) => {
//             return response;
//         }, async (error) => {
//             const status = error.response?.status;
//             if (status === 401 || status === 403) {
//                 await logOut();
//                 navigate('/login')
//             }
//             return Promise.reject(error);
//         });
//         return instance;
//     }, [navigate, logOut]);
// }

export default useAxiosInstance;