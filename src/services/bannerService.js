import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";
import useAxiosInstance from "./axiosInstance";
import useAuth from "../hooks/useAuth";

const fetchBanners = async () => {
    const res = await axiosPublic('/advertised-medicines');
    return res.data;
}

export const useBanners = () => {
    return useQuery({
        queryKey: ['Banners'],
        queryFn: fetchBanners,
    })
}

// Getting Added medicine name
export const useSellerMedicineName = () => {
    const axiosSecure = useAxiosInstance();
    const { user, tokenStored } = useAuth()
    return useQuery({
        queryKey: ['sellerMedicineName', user?.email],
        queryFn: async () => {
            // console.log(user?.email);
            const { data } = await axiosSecure(`/sellerMedicine/${user?.email}`)
            // console.log('useSellerMedicineName data', data);
            return data
        },
        enabled: !!user?.email && tokenStored
    })
}

// Asking advertisement
export const useAskAdvertisement = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();

    return useMutation({
        mutationFn: async ({ formData, controller }) => {
            const { data } = await axiosInstance.post('/advertisements', formData, { signal: controller.signal })
            console.log(data);
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['Banners'])
        }
    })
}

export const useDeleteAdvertise = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosInstance.delete(`/advertisements/${id}`)
            console.log(data);
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['Banners']);
        }
    })
}
