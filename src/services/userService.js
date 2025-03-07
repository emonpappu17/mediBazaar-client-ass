import useAuth from "../hooks/useAuth";
import useAxiosInstance from "./axiosInstance";
import axiosPublic from "./axiosPublic";
import { useQuery } from '@tanstack/react-query'

// Saving user to db
export const saveUserToDB = async (userData) => {
    try {
        const { data } = await axiosPublic.post(`/users`, userData)
        return data;
    } catch (err) {
        console.log("Error saving user:", err);
    }
}

// Getting user role
export const useRole = () => {
    const { user, loading } = useAuth();
    const axiosInstance = useAxiosInstance();
    const { data: role = '', isLoading } = useQuery({
        queryKey: ['role', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const { data } = await axiosInstance(`/user/${user?.email}`)
            // console.log(data);
            return data.role;
        }
    })
    return [role, isLoading]
}

// Getting all users 
export const useUsers = () => {
    const axiosInstance = useAxiosInstance();
    return useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const { data } = await axiosInstance('/users')
            // console.log('useUsers', data);
            return data
        }
    })
}