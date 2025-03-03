import { useQuery } from "@tanstack/react-query";
import axiosPublic from "./axiosPublic";

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