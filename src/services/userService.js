import useAuth from "../hooks/useAuth";
import useAxiosInstance from "./axiosInstance";
import axiosPublic from "./axiosPublic";
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

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


// Updating user role
export const useUpdateUserRole = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: async ({ email, role }) => {
            // console.log('role form updateuser', role);
            const { data } = await axiosInstance.patch(`/users/${email}`, { role })
            // console.log('useUpdateUserRole', data);
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['role'])
        }
    })
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