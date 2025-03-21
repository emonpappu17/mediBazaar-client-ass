import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";
import useAxiosInstance from "./axiosInstance";
import useAuth from "../hooks/useAuth";

const fetchBanners = async () => {
    const res = await axiosPublic('/advertisements/approved');
    return res.data;
}

// Get advertisement for Banner (Banner)
export const useBanners = () => {
    return useQuery({
        queryKey: ['Banners'],
        queryFn: fetchBanners,
    })
}

// Getting seller Added medicine name (Seller)
export const useSellerMedicineName = () => {
    const axiosSecure = useAxiosInstance();
    const { user, tokenStored } = useAuth()
    return useQuery({
        queryKey: ['sellerMedicineName', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/sellerMedicine/${user?.email}`)
            return data
        },
        enabled: !!user?.email && tokenStored
    })
}

// Getting seller added advertisements (Seller)
export const useSellerAds = () => {
    const axiosSecure = useAxiosInstance();
    const { user, tokenStored } = useAuth()
    return useQuery({
        queryKey: ['sellerAdds', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/advertisements?sellerEmail=${user?.email}`)
            return data
        },
        enabled: !!user?.email && tokenStored
    })
}

// Getting all advertisements for (Admin)
export const useAllAdvertisement = () => {
    const axiosInstance = useAxiosInstance();
    return useQuery({
        queryKey: ['allAdvertisement'],
        queryFn: async () => {
            const res = await axiosInstance('/advertisements');
            return res.data;
        }
    })
}

// Asking advertisement (Seller)
export const useAskAdvertisement = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();

    return useMutation({
        mutationFn: async ({ formData, controller }) => {
            const { data } = await axiosInstance.post('/advertisements', formData, { signal: controller.signal })
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['Banners'])
        }
    })
}

// Delete (Seller)
export const useDeleteAdvertise = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: async (id) => {
            const { data } = await axiosInstance.delete(`/advertisements/${id}`)
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['Banners']);
        }
    })
}

// Change status (Admin)
export const useUpdateAdvertiseStatus = () => {
    const queryClient = useQueryClient();
    const axiosInstance = useAxiosInstance();
    return useMutation({
        mutationFn: async ({ id, status }) => {
            const { data } = await axiosInstance.patch(`/advertisements/${id}`, { status })
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['allAdvertisement']);
        }
    })
}
