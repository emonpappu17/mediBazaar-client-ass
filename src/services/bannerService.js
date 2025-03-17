import { useQuery } from "@tanstack/react-query";
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

export const useSellerMedicineName = () => {
    const axiosSecure = useAxiosInstance();
    const { user, tokenStored } = useAuth()
    return useQuery({
        queryKey: ['sellerMedicineName', user?.email],
        queryFn: async () => {
            // console.log(user?.email);

            const { data } = await axiosSecure(`/sellerMedicine/${user?.email}`)
            console.log('useSellerMedicineName data', data);


            return data
        },
        enabled: !!user?.email && tokenStored
    })
}